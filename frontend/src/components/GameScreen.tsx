import Player from "./player/Player"
import type { PlayerHandle } from "./player/Player"
import "./GameScreen.css"
import Spike from "./obstacles/Spike"
import Crouch from "./obstacles/Crouch"
import Obstacle from "./obstacles/Platform"
import type { GameObjectHandle } from "./obstacles/GameObject"
import { useEffect, useState, useRef } from "react"
import levelOne from "../levels/levelOne"
import GuitarAudioService from "../services/GuitarAudioService"
import "../styles/neonArcade.css"
import { GAME_CONFIG } from "../gameConfig"
import beatAudioFile from "../assets/Neon Run.mp3"

const GameScreen = ({ playing }: { playing: boolean }) => {

  // ====================
  // STATE & REFS
  // ====================
  const gameScreenRef = useRef<HTMLElement | null>(null)
  const [gameSize, setGameSize] = useState({
    width: 0,
    height: 0,
  })

  const [movement, setMovement] = useState(0)
  const lastTime = useRef(0)
  const movementRef = useRef(0)
  const animationRef = useRef<number | null>(null)
  const playerRef = useRef<PlayerHandle | null>(null)
  const audioReadyRef = useRef(false)
  const microphoneStartedRef = useRef(false)

  const [playerY, setPlayerY] = useState(50)
  const previousPlayerBottomRef = useRef(playerY)
  const [playerGroundY, setPlayerGroundY] = useState(GAME_CONFIG.ground.height)
  const playerYRef = useRef(playerY)
  const playerGroundYRef = useRef(playerGroundY)
  const [landY, setLandY] = useState<number | null>(null)

  const gameObjRef = useRef<Record<number, GameObjectHandle | null>>({})

  const [gameOver, setGameOver] = useState(false)
  const [jumpTrigger, setJumpTrigger] = useState(0)
  const [restartKey, setRestartKey] = useState(0)

  const hitObstacleRef = useRef<number | null>(null)
  const activeObstacleRef = useRef<number | null>(null)
  const activeObstacleDataRef = useRef<typeof levelOne.obstacles[number] | null>(null)

  const guitarAudioService = useRef<GuitarAudioService | null>(null)
  const beatAudioRef = useRef<HTMLAudioElement | null>(null)

  const [isPaused, setIsPaused] = useState(false)

  const lastObstacle = levelOne.obstacles[levelOne.obstacles.length - 1]

  //=====================
  // GAME SIZE
  //=====================

  useEffect(() => {
    const updateGameSize = () => {
      if (!gameScreenRef.current) {
        return
      }

      const rect = gameScreenRef.current.getBoundingClientRect()

      setGameSize({
        width: rect.width,
        height: rect.height,
      })

    }

    updateGameSize()

    window.addEventListener("resize", updateGameSize)

    return () => {
      window.removeEventListener("resize", updateGameSize)
    }
  }, [])

  // ===================
  // AUDIO PLAYER
  // ===================
  useEffect(() => {
    if (!playing) {
      return
    }

    if (!beatAudioRef.current) {
      beatAudioRef.current = new Audio(beatAudioFile)
    }

    const audio = beatAudioRef.current

    audio.currentTime = 0
    audio.play()
  }, [playing])

  useEffect(() => {
    const audio = beatAudioRef.current

    if (!audio) {
      return
    }

    if (isPaused) {
      audio.pause()
    } else {
      audio.play()
    }
  }, [isPaused])



  // ====================
  // GUITAR MICROPHONE
  // ====================

  useEffect(() => {
    let detectionInterval: number | null = null

    const startMicrophone = async () => {
      if (microphoneStartedRef.current) {
        return
      }

      microphoneStartedRef.current = true
      audioReadyRef.current = false

      const service = new GuitarAudioService()
      guitarAudioService.current = service

      await service.start()

      console.log("Gitarren-Mikrofon gestartet 🎤")

      console.log(
        "Kalibrierung startet – bitte kurz nicht spielen!"
      )

      const noiseFloor =
        await service.calibrateNoiseFloor()

      console.log("Noise Floor:", noiseFloor)

      audioReadyRef.current = true

      console.log("Gitarren-Mikrofon ist bereit! 🎸")

      const startDetection = () => {
        detectionInterval = window.setInterval(() => {

          const data = service.getFrequencyData()

          if (!data) {
            return
          }

          const fundamentalFrequency =
            service.getFundamentalFrequency(data)

          if (!fundamentalFrequency) {
            return
          }

          const detectedPositions =
            service.getClosestNote(
              fundamentalFrequency.frequency
            )

          if (!detectedPositions) {
            return
          }

          const activeObstacle =
            activeObstacleDataRef.current

          if (!activeObstacle) {
            return
          }

          for (const position of detectedPositions) {

            const playerCanJump =
              playerYRef.current <=
              playerGroundYRef.current + 0.5

            if (
              position.name === activeObstacle.string &&
              position.fret === activeObstacle.fret &&
              playerCanJump &&
              hitObstacleRef.current !== activeObstacle.id
            ) {
              console.log("RICHTIGER GRIFF!")

              hitObstacleRef.current =
                activeObstacle.id

              if (activeObstacle.type === "crouch") {
                playerRef.current?.crouch()
              } else {
                setJumpTrigger(
                  trigger => trigger + 1
                )
              }

              break
            }
          }

        }, 50)
      }

      startDetection()
    }

    startMicrophone()

    return () => {
      if (detectionInterval !== null) {
        clearInterval(detectionInterval)
      }
    }

  }, [])

  // ====================
  // PLAYER
  // ====================

  const handlePlayerPosition = (yPosition: number) => {
    playerYRef.current = yPosition
    setPlayerY(yPosition)
  }
  const playerLeft = GAME_CONFIG.player.left
  const playerWidth = GAME_CONFIG.player.width



  const playerHeight = playerRef.current?.isCrouching() ? GAME_CONFIG.player.height / 2 : GAME_CONFIG.player.height

  const playerRight = playerLeft + playerWidth
  const playerBottom = playerY
  const playerTop = playerBottom + playerHeight



  // ====================
  // COLLISION DETECTION
  // ====================

  const checkCollision = (
    playerLeft: number,
    playerRight: number,
    playerBottom: number,
    playerTop: number,
    obstacleLeft: number,
    obstacleRight: number,
    obstacleBottom: number,
    obstacleTop: number
  ) => {
    if (
      playerRight > obstacleLeft &&
      playerLeft < obstacleRight &&
      playerTop > obstacleBottom &&
      playerBottom < obstacleTop
    ) {
      return true
    }

    return false

  }

  const checkSpikeCollision = (
    playerLeft: number,
    playerRight: number,
    playerBottom: number,
    playerTop: number,
    spikeLeft: number,
    spikeRight: number,
    spikeBottom: number,
    spikeTop: number
  ) => {
    if (playerRight <= spikeLeft || playerLeft >= spikeRight) {
      return false
    }

    const spikeWidth = spikeRight - spikeLeft
    const spikeHeight = spikeTop - spikeBottom

    const spikeCenter = spikeLeft + spikeWidth / 2

    const overlapLeft = Math.max(playerLeft, spikeLeft)
    const overlapRight = Math.min(playerRight, spikeRight)

    const closestX = Math.max(
      overlapLeft,
      Math.min(spikeCenter, overlapRight)
    )

    const distanceFromCenter = Math.abs(closestX - spikeCenter)

    const triangleHeight = spikeHeight * (1 - (2 * distanceFromCenter) / spikeWidth)

    const triangleTopAtPlayer = spikeBottom + triangleHeight

    return (
      playerTop > spikeBottom && playerBottom < triangleTopAtPlayer
    )
  }

  // ====================
  // GAME MOVEMENT
  // ====================


  useEffect(() => {
    const animate = (time: number) => {
      if (isPaused) {
        lastTime.current = time
        animationRef.current = requestAnimationFrame(animate)
        return
      }
      const speed = 30

      let newMovement = movementRef.current

      if (lastTime.current !== 0) {
        const deltaTime = time - lastTime.current
        const deltaSeconds = deltaTime / 1000

        newMovement = movementRef.current + speed * deltaSeconds

        movementRef.current = newMovement
        setMovement(newMovement)
      }

      lastTime.current = time
      if (!gameOver) {
        if (lastObstacle.positionX - newMovement > -50) {
          animationRef.current = requestAnimationFrame(animate)
        }
      }
    }
    if (!gameOver) {
      animationRef.current = requestAnimationFrame(animate)
    }
    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current)
      }
    }

  }, [gameOver, isPaused])

  // ====================
  // GAME OVER & RESTART
  // ====================

  useEffect(() => {
    if (!gameOver) {
      return
    }


    if (beatAudioRef.current) {
      beatAudioRef.current.pause()
      beatAudioRef.current.currentTime = 0
    }



    const restartTimer = setTimeout(() => {
      movementRef.current = 0
      setMovement(0)

      lastTime.current = 0

      activeObstacleRef.current = null
      activeObstacleDataRef.current = null
      hitObstacleRef.current = null

      setJumpTrigger(0)

      setGameOver(false)

      if (beatAudioRef.current) {
        beatAudioRef.current.play()
      }

      setRestartKey(key => key + 1)
    }, 2000)

    return () => {
      clearTimeout(restartTimer)
    }
  }, [gameOver])

  // ====================
  // PLAYER COLLISION
  // ====================

  const playerIsOnObstacleRef = useRef(false)

  useEffect(() => {
    if (gameOver) {
      return
    }

    playerIsOnObstacleRef.current = false

    for (const obstacle of levelOne.obstacles) {

      const obstacleLeft = obstacle.positionX - movement
      const obstacleRight = obstacleLeft + obstacle.width

      const obstacleBottom = obstacle.positionY


      const obstacleHeight = obstacle.height
      const obstacleTop = obstacleBottom + obstacleHeight

      if (obstacle.type === "crouch") {
        const collision = checkCollision(
          playerLeft,
          playerRight,
          playerBottom,
          playerTop,
          obstacleLeft,
          obstacleRight,
          obstacleBottom,
          obstacleTop
        )

        if (collision) {
          console.log("CROUCH GETROFFEN")
          setGameOver(true)
        }

        continue
      }

      if (obstacle.type === "spike") {
        const collision = checkSpikeCollision(
          playerLeft,
          playerRight,
          playerBottom,
          playerTop,
          obstacleLeft,
          obstacleRight,
          obstacleBottom,
          obstacleTop
        )

        if (collision) {
          console.log("SPIKE GETROFFEN")
          setGameOver(true)
        }

        continue
      }

      const horizontalOverlap =
        playerRight > obstacleLeft &&
        playerLeft < obstacleRight

      const falling =
        playerBottom < previousPlayerBottomRef.current


      const landing =
        horizontalOverlap &&
        previousPlayerBottomRef.current >= obstacleTop &&
        playerBottom <= obstacleTop &&
        falling

      if (landing) {
        console.log("🟢 LANDING", {
          obstacleTop,
          playerBottom,
          previousBottom: previousPlayerBottomRef.current,
        })

        playerGroundYRef.current = obstacleTop
        setPlayerGroundY(obstacleTop)
        setLandY(obstacleTop)

        playerIsOnObstacleRef.current = true

        previousPlayerBottomRef.current = obstacleTop
        playerRef.current?.landOn(obstacleTop)

        continue
      }

      const standingOnObstacle =
        horizontalOverlap &&
        Math.abs(playerBottom - obstacleTop) < 1 &&
        !falling &&
        playerGroundYRef.current === obstacleTop

      if (standingOnObstacle) {
        playerIsOnObstacleRef.current = true
        continue
      }

      const collision = checkCollision(
        playerLeft,
        playerRight,
        playerBottom,
        playerTop,
        obstacleLeft,
        obstacleRight,
        obstacleBottom,
        obstacleTop
      )

      if (collision) {
        const standingOnThisObstacle =
          Math.abs(playerBottom - obstacleTop) < 0.5

        if (standingOnThisObstacle) {
          continue
        }

        console.log("Seitliche Kollision")
        setGameOver(true)
      }

    }



    if (
      !playerIsOnObstacleRef.current &&
      playerGroundYRef.current !== GAME_CONFIG.ground.height
    ) {
      playerGroundYRef.current = GAME_CONFIG.ground.height
      setPlayerGroundY(GAME_CONFIG.ground.height)

      playerRef.current?.fallToGround()
    }

    previousPlayerBottomRef.current = playerBottom

  }, [movement, playerY, gameOver])

  // ====================
  // ACTIVE OBSTACLE
  // ====================

  useEffect(() => {
    if (gameOver) {
      return
    }
    const hitZoneRect = playerRef.current?.getHitZoneRect()

    if (!hitZoneRect) {
      return
    }

    const hitZoneLeft = (hitZoneRect.left / gameSize.width) * 100

    const hitZoneRight = (hitZoneRect.right / gameSize.width) * 100

    const hitZoneBottom =
      ((gameSize.height - hitZoneRect.bottom) / gameSize.height) * 100

    const hitZoneTop =
      ((gameSize.height - hitZoneRect.top) / gameSize.height) * 100

    let obstacleFound = false

    for (const obstacle of levelOne.obstacles) {
      const obstacleLeft = obstacle.positionX - movement
      const obstacleRight = obstacleLeft + obstacle.width

      const obstacleBottom = obstacle.positionY

      const obstacleHeight = gameSize.height > 0 ? (obstacle.width / 100 * gameSize.width) / gameSize.height * 100 / (obstacle.width / obstacle.height) : 0
      const obstacleTop = obstacleBottom + obstacleHeight

      const isInHitZone = checkCollision(
        hitZoneLeft,
        hitZoneRight,
        hitZoneBottom,
        hitZoneTop,
        obstacleLeft,
        obstacleRight,
        obstacleBottom,
        obstacleTop
      )

      if (isInHitZone) {
        if (activeObstacleRef.current !== obstacle.id) {
          hitObstacleRef.current = null
        }

        activeObstacleRef.current = obstacle.id
        activeObstacleDataRef.current = obstacle
        obstacleFound = true
        break
      }
    }

    if (!obstacleFound) {
      activeObstacleRef.current = null
      activeObstacleDataRef.current = null

    }
  }, [movement, playerY, gameOver])

  // ====================
  // RENDERING
  // ====================


  return (<section ref={gameScreenRef} id="game-screen">
    <div id="game-area" className={levelOne.style}>
      <div id="background-layer" className={gameOver || isPaused ? "paused" : ""}></div>
      <button id="pause-button" onClick={() => setIsPaused(prev => !prev)}>{isPaused ? "▶" : "Ⅱ"}</button>
      <Player
        key={restartKey}
        onPositionChange={handlePlayerPosition}
        gameOver={gameOver}
        jumpTrigger={jumpTrigger}
        groundY={GAME_CONFIG.ground.height}
        ref={playerRef}
        isPaused={isPaused}
      />
      <div id="ground" className={isPaused || gameOver ? "paused" : ""} style={{ height: `${GAME_CONFIG.ground.height}%` }}>
        <div id="ground-shadow" ></div>
      </div>
      {levelOne.obstacles.map((obstacle) => {
        const obstacleLeft = obstacle.positionX - movement
        const obstacleRight = obstacleLeft + obstacle.width
        const fadeDistance = 24

        const fadeIn = Math.min(
          1,
          Math.max(0, (100 - obstacleLeft) / fadeDistance)
        )

        const fadeOut = Math.min(
          1,
          Math.max(0, obstacleRight / fadeDistance)
        )

        const obstacleOpacity = Math.min(fadeIn, fadeOut)

        if (obstacle.type === "spike") {
          return (
            <div key={obstacle.id} style={{ opacity: obstacleOpacity, }}>
              <Spike
                key={obstacle.id}
                ref={(ref) => {
                  gameObjRef.current[obstacle.id] = ref
                }}
                positionX={obstacleLeft}
                positionY={obstacle.positionY}
                width={obstacle.width}
                height={obstacle.height}
                note={obstacle.note}
                string={obstacle.string}
                fret={obstacle.fret}
              />
            </div>
          )
        }

        if (obstacle.type === "crouch") {
          return (
            <div key={obstacle.id} style={{ opacity: obstacleOpacity }}>
              <Crouch
                key={obstacle.id}
                ref={(ref) => {
                  gameObjRef.current[obstacle.id] = ref
                }}
                positionX={obstacleLeft}
                positionY={obstacle.positionY}
                width={obstacle.width}
                height={obstacle.height}
                note={obstacle.note}
                string={obstacle.string}
                fret={obstacle.fret}
              />
            </div>
          )
        }

        return (
          <div key={obstacle.id} style={{ opacity: obstacleOpacity }}>
            <Obstacle
              key={obstacle.id}
              ref={(element) => {
                gameObjRef.current[obstacle.id] = element
              }}
              positionX={obstacleLeft}
              positionY={obstacle.positionY}
              width={obstacle.width}
              height={obstacle.height}
              note={obstacle.note}
              string={obstacle.string}
              fret={obstacle.fret}
            /></div>
        )
      })}</div></section>)

}

export default GameScreen