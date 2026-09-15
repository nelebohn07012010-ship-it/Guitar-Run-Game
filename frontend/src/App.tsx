import { useState } from 'react'
import GameScreen from './components/GameScreen'
import StartScreen from './components/StartScreen'
import "./App.css"


function App() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <>
      {isPlaying ? <GameScreen playing={isPlaying} /> : <StartScreen startGame={setIsPlaying} />}
    </>
  )
}

export default App
