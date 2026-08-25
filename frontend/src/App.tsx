import { useState } from 'react'
import GameScreen from './components/GameScreen'
import StartScreen from './components/StartScreen'


function App() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    isPlaying
      ? <GameScreen />
      : <StartScreen startGame={setIsPlaying} />
  )
}

export default App
