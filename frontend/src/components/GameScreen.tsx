import Player from "./player/Player"
import type { PlayerHandle } from "./player/Player"
import "./GameScreen.css"
import Spike from "./obstacles/Spike"
import Crouch from "./obstacles/Crouch"
import Obstacle from "./obstacles/Platform"
import Coin from "./obstacles/Coin"
import Text from "./obstacles/Text"
import type { GameObjectHandle } from "./obstacles/GameObject"
import { memo, useEffect, useState, useRef } from "react"
import type { MutableRefObject } from "react"
import levelOne from "../levels/levelOne"
import tutorial from "../levels/tutorial"
import GuitarAudioService from "../services/GuitarAudioService"
import "../styles/neonArcade.css"
import { GAME_CONFIG } from "../gameConfig"
import PauseMenu from "./PauseMenu.tsx"
import EndScreen from "./EndScreen.tsx"
import { saveLevelStat } from "../levels/levelStats.ts"
import DeathAnimation from "../components/player/DeathAnimation"
import { saveAchievement } from "../levels/achievementStats.ts"

const ObstacleLayer = memo(function ObstacleLayer({
  obstacles,
  gameObjRef,
}: {
  obstacles: typeof levelOne.obstacles
  gameObjRef: MutableRefObject<Record<number, GameObjectHandle | null>>
}) {
  return (
    <div id="obstacle-layer">
      {obstacles.map((obstacle) => {
        if (obstacle.type === "spike") {
          return (
            <Spike
              key={obstacle.id}
              ref={(ref) => {
                gameObjRef.current[obstacle.id] = ref
              }}
              positionX={obstacle.positionX}
              positionY={obstacle.positionY}
              width={obstacle.width}
              height={obstacle.height}
              note={obstacle.note}
              string={obstacle.string}
              fret={obstacle.fret}
            />
          )
        }

        if (obstacle.type === "crouch") {
          return (
            <Crouch
              key={obstacle.id}
              ref={(ref) => {
                gameObjRef.current[obstacle.id] = ref
              }}
              positionX={obstacle.positionX}
              positionY={obstacle.positionY}
              width={obstacle.width}
              height={obstacle.height}
              note={obstacle.note}
              string={obstacle.string}
              fret={obstacle.fret}
            />
          )
        }

        if (obstacle.type === "coin") {
          return (
            <Coin
              key={obstacle.id}
              ref={(ref) => {
                gameObjRef.current[obstacle.id] = ref
              }}
              positionX={obstacle.positionX}
              positionY={obstacle.positionY}
              width={obstacle.width}
              height={obstacle.height}
            />
          )
        }

        if (obstacle.type === "text") {
          return (
            <Text
              key={obstacle.id}
              ref={(ref) => {
                gameObjRef.current[obstacle.id] = ref
              }}
              positionX={obstacle.positionX}
              positionY={obstacle.positionY}
              width={obstacle.width}
              height={obstacle.height}
              text={obstacle.text}
            />
          )
        }

        return (
          <Obstacle
            key={obstacle.id}
            ref={(ref) => {
              gameObjRef.current[obstacle.id] = ref
            }}
            positionX={obstacle.positionX}
            positionY={obstacle.positionY}
            width={obstacle.width}
            height={obstacle.height}
            note={obstacle.note}
            string={obstacle.string}
            fret={obstacle.fret}
          />
        )
      })}
    </div>
  )
})
const GameScreen = ({
  playing,
  noiseFloor,
  onHome,
  currentLevel,
  isCalibrating,
  calibrationCount,
  controlMode, }: {
    playing: boolean
    noiseFloor: number
    onHome: () => void
    currentLevel: typeof levelOne
    isCalibrating: boolean
    calibrationCount: number
    controlMode: "guitar" | "arrows"
  }) => {

  //===========================
  //SAVING
  //===========================
  const handleHome = () => {
    saveLevelStat({
      levelName: currentLevel.name,
      date: new Date().toISOString(),
      progress: levelProgress,
      coins,
      totalCoins: currentLevel.obstacles.filter(
        obstacle => obstacle.type === "coin"
      ).length,
      attempts,
      controlMode,
    })

    if (levelProgress >= 100) {
      saveAchievement(
        currentLevel.name,
        "100%",
        controlMode
      )
    }

    if (coins >= currentLevel.obstacles.filter(
      obstacle => obstacle.type === "coin"
    ).length) {
      saveAchievement(
        currentLevel.name,
        "coin-master",
        controlMode
      )
    }

    if (levelProgress >= 100 && !diedThisRunRef.current) {
      saveAchievement(
        currentLevel.name,
        "first-try",
        controlMode
      )
    }

    onHome()
  }

  // ====================
  // STATE & REFS
  // ====================
  const gameScreenRef = useRef<HTMLElement | null>(null)
  const gameAreaRef = useRef<HTMLDivElement>(null)
  const [gameSize, setGameSize] = useState({
    width: 0,
    height: 0,
  })
  const [levelComplete, setLevelComplete] = useState(false)

  const [movement, setMovement] = useState(0)
  const lastTime = useRef(0)
  const movementRef = useRef(0)
  const animationRef = useRef<number | null>(null)
  const playerRef = useRef<PlayerHandle | null>(null)
  const audioReadyRef = useRef(false)
  const microphoneStartedRef = useRef(false)
  const [attempts, setAttemps] = useState(1)
  const collectedCoinsRef = useRef<Set<number>>(new Set())
  const [coins, setCoins] = useState(0)

  const [playerY, setPlayerY] = useState(50)
  const previousPlayerBottomRef = useRef(playerY)
  const [playerGroundY, setPlayerGroundY] = useState(GAME_CONFIG.ground.height)
  const playerYRef = useRef(playerY)
  const playerGroundYRef = useRef(playerGroundY)
  const [landY, setLandY] = useState<number | null>(null)

  const gameObjRef = useRef<Record<number, GameObjectHandle | null>>({})
  const obstacleLayerRef = useRef<HTMLDivElement>(null)

  const [gameOver, setGameOver] = useState(false)
  const [jumpTrigger, setJumpTrigger] = useState(0)
  const [restartKey, setRestartKey] = useState(0)

  const hitObstacleRef = useRef<number | null>(null)
  const activeObstacleRef = useRef<number | null>(null)
  const activeObstacleDataRef = useRef<typeof currentLevel.obstacles[number] | null>(null)

  const guitarAudioService = useRef<GuitarAudioService | null>(null)
  const beatAudioRef = useRef<HTMLAudioElement | null>(null)
  const lastDetectedNoteRef = useRef<string | null>(null)
  const detectedNoteCountRef = useRef(0)
  const lastLoggedStableNoteRef = useRef<string | null>(null)

  const [isPaused, setIsPaused] = useState(false)
  const [levelProgress, setLevelProgress] = useState(0)
  const levelProgressRef = useRef(0)
  const [restartAnimation, setRestartAnimation] = useState(false)
  const [cameraY, setCameraY] = useState(0)
  const lastObstacle = currentLevel.obstacles[currentLevel.obstacles.length - 1]

  const diedThisRunRef = useRef(false)

  const attemptPositionX = 40
  //=================================
  //CALIBRATING PAUSE
  //=================================

  useEffect(() => {
    if (!isCalibrating) return

    currentLevel.obstacles.forEach((obstacle) => {
      const object = gameObjRef.current[obstacle.id]
      if (!object) return

      object.setVisualPosition(obstacle.positionX, 1)
    })
  }, [isCalibrating, currentLevel])

  //=====================
  // GAME SIZE
  //=====================

  useEffect(() => {
    const updateGameSize = () => {
      if (!gameScreenRef.current) {
        return
      }

      const gameArea = gameScreenRef.current.querySelector("#game-area")

      if (!gameArea) {
        return
      }

      const rect = gameArea.getBoundingClientRect()

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
    if (!playing || isCalibrating || controlMode !== "arrows") {
      return
    }

    if (!beatAudioRef.current) {
      beatAudioRef.current = new Audio(currentLevel.music)
    }

    const audio = beatAudioRef.current

    audio.currentTime = 0
    audio.play()
  }, [playing, isCalibrating, controlMode])

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

    if (controlMode !== "guitar" || isCalibrating) return

    const startMicrophone = async () => {
      if (microphoneStartedRef.current) {
        return
      }

      microphoneStartedRef.current = true
      audioReadyRef.current = false

      const service = new GuitarAudioService()
      guitarAudioService.current = service

      await service.start()

      service.setNoiseFloor(noiseFloor)

      console.log("Noise Floor:", noiseFloor)

      audioReadyRef.current = true

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
            playerRef.current?.setIsCrouching(false)
            return
          }

          const detectedPosition = detectedPositions[0]

          const detectedNoteKey =
            `${detectedPosition.name}-${detectedPosition.fret}`

          if (lastDetectedNoteRef.current === detectedNoteKey) {
            detectedNoteCountRef.current += 1
          } else {
            lastDetectedNoteRef.current = detectedNoteKey
            detectedNoteCountRef.current = 1
          }

          if (detectedNoteCountRef.current < 2) {
            return
          }



          const activeObstacle =
            activeObstacleDataRef.current

          if (!activeObstacle) {
            playerRef.current?.setIsCrouching(false)
            return
          }
          if (
            activeObstacle.string === undefined ||
            activeObstacle.fret === undefined
          ) {
            playerRef.current?.setIsCrouching(false)
            return
          }





          let correctCrouchTone = false

          for (const position of detectedPositions) {

            const playerCanJump =
              playerYRef.current <=
              playerGroundYRef.current + 0.5
            if (activeObstacle.type === "crouch" && position.name === activeObstacle.string && position.fret === activeObstacle.fret) {
              correctCrouchTone = true
            }



            if (
              position.name === activeObstacle.string &&
              position.fret === activeObstacle.fret
            ) {
              if (activeObstacle.type === "crouch") {
                playerRef.current?.setIsCrouching(true)
                break
              }


              if (playerCanJump) {
                setJumpTrigger(
                  trigger => trigger + 1
                )

                break
              }
            }
          }
          if (activeObstacle.type === "crouch") {
            playerRef.current?.setIsCrouching(correctCrouchTone)
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

  }, [controlMode, isCalibrating])

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
      if (isPaused || isCalibrating) {
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
        const playerRect = playerRef.current?.getScreenRect()
        const gameAreaRect = gameAreaRef.current?.getBoundingClientRect()

        if (playerRect && gameAreaRect) {
          const playerBottomY = playerRect.bottom

          const gameAreaCenterY =
            gameAreaRect.top + gameAreaRect.height / 2

          if (playerBottomY < gameAreaCenterY) {
            const cameraOffsetY =
              gameAreaCenterY - playerBottomY

            setCameraY(cameraOffsetY)
            console.log("CAMERA Y:", cameraOffsetY)
          } else {
            setCameraY(0)
          }
        }

        if (
          playerGroundYRef.current !== GAME_CONFIG.ground.height &&
          !playerIsOnObstacleRef.current
        ) {
          playerGroundYRef.current = GAME_CONFIG.ground.height
          playerRef.current?.fallToGround()
        }
        const allObstacles = currentLevel.obstacles
        const passedObstacles = allObstacles.filter(obstacle => obstacle.positionX - newMovement + obstacle.width <= 0)

        const newProgress = allObstacles.length === 0 ? 0 : Math.round((passedObstacles.length / allObstacles.length) * 100)

        if (newProgress !== levelProgressRef.current) {
          levelProgressRef.current = newProgress
          setLevelProgress(newProgress)
        }

        if (
          allObstacles.length > 0 &&
          passedObstacles.length === allObstacles.length
        ) {
          setLevelComplete(true)
          setIsPaused(true)
        }
        currentLevel.obstacles.forEach((obstacle) => {
          const object = gameObjRef.current[obstacle.id]

          if (!object) return

          if (
            obstacle.type === "coin" &&
            collectedCoinsRef.current.has(obstacle.id)
          ) {
            object.setVisualPosition(
              obstacle.positionX - newMovement,
              0,
              cameraY
            )

            return
          }

          const obstacleLeft = obstacle.positionX - newMovement
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

          object.setVisualPosition(
            obstacleLeft,
            obstacleOpacity,
            cameraY
          )
        })
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

  }, [gameOver, isPaused, isCalibrating])



  // ====================
  // GAME OVER & RESTART
  // ====================

  useEffect(() => {
    if (!gameOver) {
      return
    }

    diedThisRunRef.current = true


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

      setAttemps(prev => prev + 1)

      collectedCoinsRef.current.clear()
      setCoins(0)

      diedThisRunRef.current = false

      setGameOver(false)
      setRestartAnimation(false)

      requestAnimationFrame(() => {
        setRestartAnimation(true)

        requestAnimationFrame(() => {
          setRestartAnimation(false)
        })
      })

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

    for (const obstacle of currentLevel.obstacles) {
      if (obstacle.type === "text") {
        continue
      }

      const obstacleLeft = obstacle.positionX - movementRef.current
      const obstacleRight = obstacleLeft + obstacle.width

      const obstacleBottom = obstacle.positionY


      const obstacleHeight = obstacle.height
      const obstacleTop = obstacleBottom + obstacleHeight

      if (obstacle.type === "coin") {
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

        if (
          collision &&
          !collectedCoinsRef.current.has(obstacle.id)
        ) {
          collectedCoinsRef.current.add(obstacle.id)
          setCoins(prev => prev + 1)

          console.log("COIN GESAMMELT")
        }

        continue
      }


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

        ("Seitliche Kollision")
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

  }, [playerY, gameOver, movement])

  // ====================
  // ACTIVE OBSTACLE
  // ====================

  useEffect(() => {
    let nextObstacle = null

    for (const obstacle of currentLevel.obstacles) {
      if (
        obstacle.string === undefined ||
        obstacle.fret === undefined
      ) {
        continue
      }

      const obstacleHasBeenPassed =
        obstacle.type === "crouch"
          ? obstacle.positionX +
          obstacle.width -
          movementRef.current <=
          GAME_CONFIG.player.left
          : obstacle.positionX -
          movementRef.current <=
          GAME_CONFIG.player.left

      if (!obstacleHasBeenPassed) {
        nextObstacle = obstacle
        break
      }
    }

    activeObstacleDataRef.current = nextObstacle

  }, [movement])
  // ====================
  // RENDERING
  // ====================


  return (<section ref={gameScreenRef} id="game-screen">

    <div
      ref={gameAreaRef}
      id="game-area"
      className={`${currentLevel.style} ${restartAnimation ? "restart-animation" : ""}`}
    >
      {isCalibrating && (
        <div id="calibration-overlay">
          <div id="calibration-text">
            CALIBRATING...
          </div>

          <div id="calibration-countdown">
            {calibrationCount}
          </div>
          <div id="calibration-warning">
            ...DON'T PLAY
          </div>
        </div>
      )}
      {isPaused && !levelComplete && (
        <PauseMenu
          onResume={() => setIsPaused(false)}
          onRestart={() => { setIsPaused(false); setRestartAnimation(true); setGameOver(true) }}
          onHome={handleHome}
          levelProgress={levelProgress}
          levelName={currentLevel.name}
        />)}
      <div id="background-layer" className={gameOver || isPaused || isCalibrating ? "paused" : ""}></div>
      <button id="pause-button" onClick={() => setIsPaused(prev => !prev)}></button>
      <div
        id="attempt-counter"
        style={{
          left: `${attemptPositionX - movement}%`
        }}
      >
        ATTEMPT {attempts}
      </div>
      <Player
        key={restartKey}
        onPositionChange={handlePlayerPosition}
        gameOver={gameOver}
        jumpTrigger={jumpTrigger}
        groundY={GAME_CONFIG.ground.height}
        ref={playerRef}
        isPaused={isPaused || isCalibrating}
        controlMode={controlMode}
      />
      {gameOver && (
        <DeathAnimation
          x={GAME_CONFIG.player.left}
          y={playerRef.current?.getYPosition() ?? 0}
          groundY={playerGroundYRef.current}
        />
      )}
      <div id="game-world"  >
        <div id="ground" className={isPaused || gameOver || isCalibrating ? "paused" : ""} style={{ height: `${GAME_CONFIG.ground.height}%` }}>
          <div id="ground-shadow" ></div>
        </div>
        <ObstacleLayer obstacles={currentLevel.obstacles} gameObjRef={gameObjRef} />
      </div>
      {levelComplete && (
        <EndScreen
          attempts={attempts}
          coins={coins}
          totalCoins={currentLevel.obstacles.filter(
            obstacle => obstacle.type === "coin"
          ).length}
          onReplay={() => {
            setLevelComplete(false)
            setIsPaused(false)
            setGameOver(true)
          }}
          onHome={handleHome}
          controlMode={controlMode}
        />
      )}
    </div></section >)

}

export default GameScreen
