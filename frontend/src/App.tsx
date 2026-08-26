import { useState } from 'react'
import GameScreen from './components/GameScreen'
import StartScreen from './components/StartScreen'
import GuitarAudioTest from "./components/GuitarAudioTest"


function App() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <>
      {isPlaying ? <GameScreen /> : <StartScreen startGame={setIsPlaying} />}
      <GuitarAudioTest />
    </>
  )
}

export default App
