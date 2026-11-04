import Player from "./player/Player"
import type { PlayerHandle } from "./player/Player"
import type { GameObjectHandle } from "./obstacles/GameObject"
import "./GameScreen.css"
import { memo, useCallback, useEffect, useState, useRef } from "react"
import type { CSSProperties } from "react"
import levelOne from "../levels/levelOne"
import GuitarAudioService from "../services/GuitarAudioService"
import "../styles/desert.css"
import "../styles/neonArcade.css"
import "../styles/sky.css"
import "../styles/snow.css"
import "../styles/fire.css"
import "../styles/jungle.css"
import { GAME_CONFIG } from "../gameConfig"
import PauseMenu from "./PauseMenu.tsx"
import EndScreen from "./EndScreen.tsx"
import { saveLevelStat } from "../levels/levelStats.ts"
import DeathAnimation from "../components/player/DeathAnimation"
import { saveAchievement } from "../levels/achievementStats.ts"
import { playGameSound } from "../services/GuitarSoundService.ts"
import NoteCatalog from "./NoteCatalog"
import { completeLevel } from "../levels/levelUnlock.ts"
import ObstacleLayer from "./game/ObstacleLayer"
import {
  countLevelCoins,
  findNextPlayableObstacle,
  getLevelProgress,
  getObstacleVisibility,
} from "./game/levelProgress"
import { checkCollision, checkSpikeCollision } from "./game/collision"


type LevelAttempt = {
  date: string
  progress: number
  coins: number
  attemptNumber: number
}

const Snowfall = memo(function Snowfall() {
  return (
    <div id="snowfall" aria-hidden="true">
      {Array.from({ length: 100 }, (_, i) => (
        <span
          className="snowflake"
          key={i}
          style={{
            left: `${(i * 37) % 200}%`,
            animationDuration: `${5 + ((i * 13) % 8)}s`,
            animationDelay: `${-((i * 7) % 12)}s`,
            "--drift": `${((i * 17) % 61) - 30}px`,
            "--size": `${3 + ((i * 11) % 5)}px`,
          } as CSSProperties}
        />
      ))}
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


  const recordAttempt = () => {
    if (attemptRecordedRef.current) return

    sessionAttemptsRef.current.push({
      date: new Date().toISOString(),
      progress: levelProgressRef.current,
      coins,
      attemptNumber: attempts,
    })

    attemptRecordedRef.current = true
  }

  const handleHome = () => {
    recordAttempt()

    const allAttempts = sessionAttemptsRef.current

    const bestAttempt = allAttempts.reduce((best, attempt) => {
      if (attempt.progress > best.progress) {
        return attempt
      }

      if (
        attempt.progress === best.progress &&
        attempt.coins > best.coins
      ) {
        return attempt
      }

      return best
    })

    saveLevelStat({
      levelName: currentLevel.name,
      date: bestAttempt.date,
      progress: bestAttempt.progress,
      coins: bestAttempt.coins,
      totalCoins: countLevelCoins(currentLevel.obstacles),
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

    if (coins >= countLevelCoins(currentLevel.obstacles)) {
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

  const gameScreenRef = useRef<HTMLElement | null>(null)
  const gameAreaRef = useRef<HTMLDivElement>(null)
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

  const sessionAttemptsRef = useRef<LevelAttempt[]>([])
  const attemptRecordedRef = useRef(false)


  const [playerY, setPlayerY] = useState(50)
  const [isPlayerCrouching, setIsPlayerCrouching] = useState(false)
  const previousPlayerBottomRef = useRef(playerY)
  const [playerGroundY, setPlayerGroundY] = useState(GAME_CONFIG.ground.height)
  const playerYRef = useRef(playerY)
  const playerGroundYRef = useRef(playerGroundY)

  const gameObjRef = useRef<Record<number, GameObjectHandle | null>>({})

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

  const [isPaused, setIsPaused] = useState(false)
  const [levelProgress, setLevelProgress] = useState(0)
  const levelProgressRef = useRef(0)
  const [restartAnimation, setRestartAnimation] = useState(false)
  const lastObstacle = currentLevel.obstacles[currentLevel.obstacles.length - 1]

  const diedThisRunRef = useRef(false)

  const attemptPositionX = 40

  const [activeObstacleId, setActiveObstacleId] = useState<number | null>(null)

  useEffect(() => {
    if (!isCalibrating) return

    currentLevel.obstacles.forEach((obstacle) => {
      const object = gameObjRef.current[obstacle.id]
      if (!object) return

      object.setVisualPosition(obstacle.positionX, 1)
    })
  }, [isCalibrating, currentLevel])


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

      audioReadyRef.current = true

      const startDetection = () => {
        detectionInterval = window.setInterval(() => {

          const data = service.getFrequencyData()
          if (!data) return
          const chordNotes = service.getChordNotes(data)

          service.addChordNotes(chordNotes)
          const chordObstacle = activeObstacleDataRef.current

          if (chordObstacle?.chord !== undefined) {
            const detectedChord = service.getDetectedChord()

            if (detectedChord === chordObstacle.chord) {
              const playerCanJump =
                playerYRef.current <=
                playerGroundYRef.current + 0.5

              if (chordObstacle.type === "crouch") {
                playerRef.current?.setIsCrouching(true)
              } else if (playerCanJump) {
                setJumpTrigger(trigger => trigger + 1)
              }
            } else if (chordObstacle.type === "crouch") {
              playerRef.current?.setIsCrouching(false)
            }

            return
          }

          const fundamentalFrequency =
            service.getFundamentalFrequency(data)

          if (fundamentalFrequency) {
            service.addDetectedChordNote(
              fundamentalFrequency.frequency
            )

          }





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


          if (activeObstacle.chord === undefined) {
            if (
              activeObstacle.string === undefined ||
              activeObstacle.fret === undefined
            ) {
              playerRef.current?.setIsCrouching(false)
              return
            }
          }





          let correctCrouchTone = false

          for (const position of detectedPositions) {

            const playerCanJump =
              playerYRef.current <=
              playerGroundYRef.current + 0.5
            if (
              activeObstacle.type === "crouch" &&
              position.note === activeObstacle.note
            ) {
              correctCrouchTone = true;
            }



            if (
              position.note === activeObstacle.note
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


  const handlePlayerPosition = useCallback((yPosition: number) => {
    playerYRef.current = yPosition
    setPlayerY(yPosition)
  }, [setPlayerY])

  const playerLeft = GAME_CONFIG.player.left;

  const playerSize =
    GAME_CONFIG.player

  const playerWidth = playerSize.width;

  const playerHeight = isPlayerCrouching
    ? playerSize.height / 2
    : playerSize.height;

  const playerRight = playerLeft + playerWidth;

  const playerBottom = playerY;
  const playerTop = playerBottom + playerHeight;





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
        if (
          playerGroundYRef.current !== GAME_CONFIG.ground.height &&
          !playerIsOnObstacleRef.current
        ) {
          playerGroundYRef.current = GAME_CONFIG.ground.height
          playerRef.current?.fallToGround()
        }
        const allObstacles = currentLevel.obstacles
        const progress = getLevelProgress(allObstacles, newMovement)

        if (progress.percentage !== levelProgressRef.current) {
          levelProgressRef.current = progress.percentage
          setLevelProgress(progress.percentage)
        }

        if (progress.isComplete) {
          completeLevel(currentLevel.name)

          setLevelComplete(true)
          setIsPaused(true)
        }
        currentLevel.obstacles.forEach((obstacle) => {
          const object = gameObjRef.current[obstacle.id]

          if (!object) return

          const visibility = getObstacleVisibility(obstacle, newMovement)

          if (!visibility) {
            return
          }

          if (
            obstacle.type === "coin" &&
            collectedCoinsRef.current.has(obstacle.id)
          ) {
            object.setVisualPosition(
              obstacle.positionX - newMovement,
              0,
              0
            )

            return
          }

          object.setVisualPosition(
            visibility.left,
            visibility.opacity,
            0
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




  useEffect(() => {
    if (!gameOver) {
      return
    }

    diedThisRunRef.current = true
    playGameSound("death")

    recordAttempt()


    if (beatAudioRef.current) {
      beatAudioRef.current.pause()
      beatAudioRef.current.currentTime = 0
    }



    const restartTimer = setTimeout(() => {
      movementRef.current = 0
      setMovement(0)

      currentLevel.obstacles.forEach((obstacle) => {
        gameObjRef.current[obstacle.id]?.setVisualPosition(
          obstacle.positionX,
          1,
          0
        )
      })

      lastTime.current = 0

      activeObstacleRef.current = null
      activeObstacleDataRef.current = null
      hitObstacleRef.current = null

      setJumpTrigger(0)

      setAttemps(prev => prev + 1)
      attemptRecordedRef.current = false

      collectedCoinsRef.current.clear()
      setCoins(0)

      diedThisRunRef.current = false

      playGameSound("restart")

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
    }, 1500)

    return () => {
      clearTimeout(restartTimer)
    }
  }, [gameOver])


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
          playGameSound("coin")

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
        const horizontalInset = obstacle.width * 0.15
        const verticalInset = obstacle.height * 0.15

        const collision = checkSpikeCollision(
          playerLeft,
          playerRight,
          playerBottom,
          playerTop,
          obstacleLeft + horizontalInset,
          obstacleRight - horizontalInset,
          obstacleBottom + verticalInset,
          obstacleTop - verticalInset
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


  useEffect(() => {
    const nextObstacle = findNextPlayableObstacle(
      currentLevel.obstacles,
      movementRef.current,
      GAME_CONFIG.player.left
    ) ?? null

    const previousObstacle = activeObstacleDataRef.current

    activeObstacleDataRef.current = nextObstacle
    setActiveObstacleId(nextObstacle?.id ?? null)

    if (previousObstacle?.type === "crouch" && previousObstacle !== nextObstacle) {
      playerRef.current?.setIsCrouching(false)
    }

  }, [movement])


  return (<section ref={gameScreenRef} id="game-screen" className={currentLevel.style}>

    <div
      ref={gameAreaRef}
      id="game-area"
      className={`${currentLevel.style} ${restartAnimation ? "restart-animation" : ""}`}
    >

      {currentLevel.style === "snow-theme" && <Snowfall />}

      <NoteCatalog obstacles={currentLevel.obstacles} activeObstacleId={activeObstacleId} />
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
        playerSize={currentLevel.speed ?? "slow"}
        onCrouchChange={setIsPlayerCrouching}
      />
      {gameOver && (
        <DeathAnimation
          x={GAME_CONFIG.player.left}
          y={playerY}
          groundY={playerGroundY}
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
          totalCoins={countLevelCoins(currentLevel.obstacles)}
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
