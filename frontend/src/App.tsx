import { useEffect, useState, useRef } from 'react'
import GameScreen from './components/GameScreen'
import StartScreen from './components/StartScreen'
import LandingScreen from "./components/LandingScreen"
import "./App.css"
import GuitarAudioService from './services/GuitarAudioService'
import levelOne from "./levels/levelOne"
import tutorial from './levels/tutorial'
import tutorialArr from './levels/tutorial2'

const levels = [
  tutorial,
  tutorialArr,
  levelOne
]

function App() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [noiseFloor, setNoiseFloor] = useState<number | null>(null)
  const [currentLevel, setCurrentLevel] = useState(levelOne)
  const [isCalibrating, setIsCalibrating] = useState(false)
  const [calibrationCount, setCalibrationCount] = useState(7)
  const previewAudioRef = useRef<HTMLAudioElement | null>(null)
  const [controlMode, setControlMode] = useState<"guitar" | "arrows">("guitar")
  const [showLanding, setShowLanding] = useState(true)

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

    const calibrateNoiseFloor = await service.calibrateNoiseFloor()

    previewAudioRef.current?.pause()
    previewAudioRef.current = null

    setNoiseFloor(calibrateNoiseFloor)
    setIsCalibrating(false)
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
          onStart={() => setShowLanding(false)}
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
