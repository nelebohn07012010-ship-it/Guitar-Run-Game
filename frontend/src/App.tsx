import { useEffect, useState, useRef } from 'react'
import GameScreen from './components/GameScreen'
import StartScreen from './components/StartScreen'
import LandingScreen from "./components/LandingScreen"
import "./App.css"
import GuitarAudioService from './services/GuitarAudioService'
import levelOne from "./levels/levelOne"
import levelTwo from './levels/levelTwo'
import levelThree from './levels/levelThree'
import levelFour from './levels/levelFour'
import levelFive from './levels/levelFive'
import levelSix from './levels/levelSix'
import levelSeven from './levels/levelSeven'
import levelEight from './levels/levelEight'
import levelNine from './levels/levelNine'
import levelTen from './levels/levelTen'
import levelTwelve from './levels/levelTwelve'
import levelEleven from './levels/levelEleven'
import tutorial from './levels/tutorial'
import tutorialArr from './levels/tutorial2'

import LoadingScreen from './components/LoadingSreen'
import { preloadAssets } from './assetPreloader'

const levels = [
  tutorial,
  tutorialArr,
  levelOne,
  levelTwo,
  levelThree,
  levelFour,
  levelFive,
  levelSix,
  levelSeven,
  levelEight,
  levelNine,
  levelTen,
  levelEleven,
  levelTwelve
]

function App() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [noiseFloor, setNoiseFloor] = useState<number | null>(null)
  const [currentLevel, setCurrentLevel] = useState(levelOne)
  const [isCalibrating, setIsCalibrating] = useState(false)
  const [calibrationCount, setCalibrationCount] = useState(7)
  const previewAudioRef = useRef<HTMLAudioElement | null>(null)
  const [controlMode, setControlMode] = useState<"guitar" | "arrows">(() => {
    const saved = localStorage.getItem("guitar-run-control-mode")

    return saved === "arrows" ? "arrows" : "guitar"
  })
  const [showLanding, setShowLanding] = useState(true)
  const [assetsLoaded, setAssetsLoaded] = useState(false)

  const startLoading = async () => {
    setShowLanding(false)
    setAssetsLoaded(false)

    try {
      await preloadAssets()
    } catch (error) {
      console.error("Failed to preload assets:", error)
    }

    setAssetsLoaded(true)
  }

  useEffect(() => {
    localStorage.setItem("guitar-run-control-mode", controlMode)
  }, [controlMode])

  useEffect(() => {
    if (!isCalibrating) return

    const countdown = setInterval(() => {
      setCalibrationCount(current => {
        if (current <= 1) {
          clearInterval(countdown)
          return 1
        }

        return current - 1
      })
    }, 1000)

    return () => clearInterval(countdown)
  }, [isCalibrating])



  const startGame = async (level: typeof levelOne) => {
    setCurrentLevel(level)
    setIsPlaying(true)

    if (controlMode === "arrows") {
      previewAudioRef.current?.pause()
      previewAudioRef.current = null

      setIsCalibrating(false)
      setNoiseFloor(0)

      return
    }

    setIsCalibrating(true)
    setCalibrationCount(7)

    const service = new GuitarAudioService()

    await service.start()

    const calibrateNoiseFloor =
      await service.calibrateNoiseFloor()

    previewAudioRef.current?.pause()
    previewAudioRef.current = null

    setNoiseFloor(calibrateNoiseFloor)
    setIsCalibrating(false)
  }

  if (!assetsLoaded && !showLanding) {
    return <LoadingScreen />
  }

  return (
    <>
      {isPlaying ? (
        <GameScreen
          playing={isPlaying}
          noiseFloor={noiseFloor ?? 0}
          onHome={() => setIsPlaying(false)}
          currentLevel={currentLevel}
          isCalibrating={isCalibrating}
          calibrationCount={calibrationCount}
          controlMode={controlMode}
        />
      ) : showLanding ? (
        <LandingScreen
          onStart={startLoading}
        />
      ) : (
        <StartScreen
          startGame={startGame}
          levels={levels}
          previewAudioRef={previewAudioRef}
          controlMode={controlMode}
          setControlMode={setControlMode}
        />
      )}
    </>
  )
}

export default App
