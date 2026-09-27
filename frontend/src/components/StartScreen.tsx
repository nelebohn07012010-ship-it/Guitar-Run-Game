import "./StartScreen.css"
import levelOne from "../levels/levelOne"
import { useState, useRef, useEffect } from "react"
import playButton from "../assets/play_button.png"
import rankingButton from "../assets/ranking_button.png"
import Settings from "../assets/setting.png"
import { getLevelStats, type LevelStat } from "../levels/levelStats"

const StartScreen = ({ startGame, levels, previewAudioRef, controlMode, setControlMode }: {
  startGame: (level: typeof levelOne) => void
  levels: typeof levelOne[]
  previewAudioRef: React.MutableRefObject<HTMLAudioElement | null>
  controlMode: "guitar" | "arrows"
  setControlMode: React.Dispatch<React.SetStateAction<"guitar" | "arrows">>
}) => {
  const [selectedLevel, setSelectedLevel] = useState(0)
  const [showSettings, setShowSettings] = useState(false)
  const [levelStats, setLevelStats] = useState<LevelStat[]>([])
  const [showLeaderboard, setShowLeaderboard] = useState(false)

  useEffect(() => {
    const audio = previewAudioRef.current

    if (audio) {
      audio.pause()
      audio.currentTime = 0
    }

    if (controlMode !== "arrows") return

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

  useEffect(() => {
    setLevelStats(getLevelStats())
  }, [])

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
      <button id="settings-button" onClick={() => setShowSettings(true)}>
        <img src={Settings} alt="⚙" />
      </button>
      {showSettings && (
        <div id="settings-menu">

          <h2>SETTINGS</h2>

          <div id="settings-section">
            <h3>CONTROL</h3>

            <div id="control-options">

              <button
                id="guitar-option"
                className={controlMode === "guitar" ? "active" : ""}
                onClick={() => setControlMode("guitar")}
              >
                🎸 Guitar
              </button>

              <button
                id="arrows-option"
                className={controlMode === "arrows" ? "active" : ""}
                onClick={() => setControlMode("arrows")}
              >
                ⌨ Arrow Keys
              </button>

            </div>
          </div>

          <button
            id="settings-close"
            onClick={() => setShowSettings(false)}
          >
            CLOSE
          </button>

        </div>
      )}

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

        <button
          id="leaderboard-button"
          onClick={() => setShowLeaderboard(true)}
        >
          <img src={rankingButton} alt="Leaderboard" />
        </button>

      </div>
      {showLeaderboard && (
        <div id="leaderboard-menu">
          <h2>LEADERBOARD</h2>

          {levelStats.length === 0 ? (
            <p>NO STATS YET</p>
          ) : (
            <div id="leaderboard-stats">
              <div id="leaderboard-header">
                <span>LEVEL</span>
                <span>DATE</span>
                <span>%</span>
                <span>COINS</span>
                <span>ATTEMPTS</span>
              </div>
              {levelStats
                .filter(stat => stat.levelName === currentLevel.name)
                .sort((a, b) => {
                  if (b.progress !== a.progress) {
                    return b.progress - a.progress
                  }

                  if (b.coins !== a.coins) {
                    return b.coins - a.coins
                  }

                  return a.attempts - b.attempts
                })
                .map((stat, index) => (
                  <div className="leaderboard-stat" key={index}>
                    <strong>{stat.levelName}</strong>

                    <span>{new Date(stat.date).toLocaleDateString("de-DE")}</span>

                    <span>{stat.progress}%</span>

                    <span>
                      {stat.coins}/{stat.totalCoins} 🪙
                    </span>

                    <span>{stat.attempts} ATTEMPTS</span>
                  </div>
                ))}
            </div>
          )}

          <button
            id="leaderboard-close"
            onClick={() => setShowLeaderboard(false)}
          >
            CLOSE
          </button>
        </div>
      )}

    </div>
  </section>)
}

export default StartScreen
