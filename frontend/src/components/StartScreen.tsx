import "./StartScreen.css"
import levelOne from "../levels/levelOne"
import { useState, useRef, useEffect } from "react"
import playButton from "../assets/play_button.png"
import rankingButton from "../assets/ranking_button.png"

const StartScreen = ({ startGame, levels, previewAudioRef }: {
  startGame: (level: typeof levelOne) => void
  levels: typeof levelOne[]
  previewAudioRef: React.MutableRefObject<HTMLAudioElement | null>
}) => {
  const [selectedLevel, setSelectedLevel] = useState(0)

  useEffect(() => {
    const audio = previewAudioRef.current

    if (audio) {
      audio.pause()
      audio.currentTime = 0
    }

    const previewAudio = new Audio(levels[selectedLevel].music)
    previewAudio.loop = true

    previewAudioRef.current = previewAudio

    previewAudio.play().catch(() => { })

    return () => {
    }
  }, [selectedLevel, levels])



  const previousLevel = () => {
    setSelectedLevel(current => current === 0 ? levels.length - 1 : current - 1)
  }

  const nextLevel = () => {
    setSelectedLevel(current => current === levels.length - 1 ? 0 : current + 1)
  }

  const currentLevel = levels[selectedLevel]
  return (<section id="start-screen">
    <div id="start-area">

      <div
        id="level-background"
        style={{
          backgroundImage: `url(${currentLevel.backgroundImage})`
        }}
      />

      <div
        id="level-arrow-left"
        onClick={previousLevel}
      >
        ❮
      </div>

      <div id="level-name">
        {currentLevel.name}
      </div>
      <div
        id="level-arrow-right"
        onClick={nextLevel}
      >
        ❯
      </div>

      <div id="level-preview">
        Level Preview
      </div>

      <div id="level-actions">

        <button id="achievements-button">
          <img src={rankingButton} alt="Achievments" />
        </button>

        <button
          id="play-button"
          onClick={() => startGame(currentLevel)}
        >
          <img src={playButton} alt="Play" />
        </button>

        <button id="leaderboard-button">
          <img src={rankingButton} alt="Leaderboard" />d
        </button>

      </div>

    </div>
  </section>)
}

export default StartScreen
