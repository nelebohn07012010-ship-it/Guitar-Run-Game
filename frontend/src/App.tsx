import { useEffect, useState, useRef } from 'react'
import GameScreen from './components/GameScreen'
import StartScreen from './components/StartScreen'
import "./App.css"
import GuitarAudioService from './services/GuitarAudioService'
import levelOne from "./levels/levelOne"
import tutorial from './levels/tutorial'

const levels = [
  tutorial,
  levelOne
]

function App() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [noiseFloor, setNoiseFloor] = useState<number | null>(null)
  const [currentLevel, setCurrentLevel] = useState(levelOne)
  const [isCalibrating, setIsCalibrating] = useState(false)
  const [calibrationCount, setCalibrationCount] = useState(7)
  const previewAudioRef = useRef<HTMLAudioElement | null>(null)



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
    setIsCalibrating(true)

    setCalibrationCount(7)

    setCurrentLevel(level)

    setIsPlaying(true)
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
        />
      ) : (
        <StartScreen startGame={startGame} levels={levels} previewAudioRef={previewAudioRef} />
      )}
    </>
  )
}

export default App
