import "./StartScreen.css"
import levelOne from "../levels/levelOne"
import { useState, useRef, useEffect } from "react"
import playButton from "../assets/play_button.png"
import rankingButton from "../assets/ranking_button.png"
import achievmentButton from "../assets/achievement_button.png"
import Settings from "../assets/setting.png"
import {
  getLevelStats,
  clearLevelStats,
  type LevelStat
} from "../levels/levelStats"
import Achievements from "./Achievements.tsx"
import { isLevelUnlocked } from "../levels/levelUnlock.ts"



const StartScreen = ({ startGame, levels, previewAudioRef, controlMode, setControlMode }: {
  startGame: (level: typeof levelOne) => void
  levels: typeof levelOne[]
  previewAudioRef: React.MutableRefObject<HTMLAudioElement | null>
  controlMode: "guitar" | "arrows"
  setControlMode: React.Dispatch<React.SetStateAction<"guitar" | "arrows">>
}) => {
  const [selectedLevel, setSelectedLevel] = useState(() => {
    const saved = localStorage.getItem("guitar-run-selected-level")

    if (saved === null) {
      return 0
    }

    const parsed = Number(saved)

    return Number.isInteger(parsed) && parsed >= 0 && parsed < levels.length
      ? parsed
      : 0
  })
  const [expandedChord, setExpandedChord] = useState<string | null>(null)
  const [showChordGuide, setShowChordGuide] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [levelStats, setLevelStats] = useState<LevelStat[]>([])
  const [showLeaderboard, setShowLeaderboard] = useState(false)
  const [showAchievements, setShowAchievements] = useState(false)
  const [showControlHint, setShowControlHint] = useState(() => {
    return localStorage.getItem("guitar-run-control-hint-seen") !== "true"
  })

  useEffect(() => {
    localStorage.setItem(
      "guitar-run-selected-level",
      String(selectedLevel)
    )
  }, [selectedLevel])

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
  const currentLevelUnlocked = isLevelUnlocked(
    currentLevel,
    levels
  )
  const levelChords = [
    ...new Set(
      currentLevel.obstacles
        .map((obstacle) => obstacle.chord)
        .filter((chord): chord is string => Boolean(chord))
    ),
  ]

  const showMusicTab =
    controlMode === "guitar" && levelChords.length > 0
  return (<section id="start-screen" className={currentLevel.style}>

    <div
      id="start-area"
      className={!currentLevelUnlocked ? "start-area-locked" : ""}
    >
      {!currentLevelUnlocked && (
        <div id="level-lock-overlay" aria-label="Level gesperrt">
          <svg viewBox="0 0 64 64" aria-hidden="true">
            <rect
              x="12"
              y="27"
              width="40"
              height="30"
              rx="4"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              d="M21 27V19a11 11 0 0 1 22 0v8"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <circle cx="32" cy="40" r="3" fill="currentColor" />
            <path
              d="M32 43v5"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
      )}

      {showMusicTab && (
        <>
          <button
            id="music-guide-button"
            type="button"
            aria-label="Akkordübersicht öffnen"
            aria-expanded={showChordGuide}
            onClick={() => setShowChordGuide(true)}
          >
            ♫
          </button>

          {showChordGuide && (
            <div
              id="music-guide-overlay"
              onClick={() => setShowChordGuide(false)}
            >
              <div
                id="music-guide-panel"
                role="dialog"
                aria-modal="true"
                aria-label="Noten und Akkorde dieses Levels"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  id="music-guide-close"
                  type="button"
                  aria-label="Schließen"
                  onClick={() => setShowChordGuide(false)}
                >
                  ×
                </button>

                <h2> CHORDS</h2>

                <div id="music-guide-list">
                  {levelChords.map((chord) => (
                    <button
                      className="music-guide-card"
                      key={chord}
                      type="button"
                      onClick={() => setExpandedChord(chord)}
                      aria-label={`${chord} vergrößern`}
                    >
                      <h3>{chord}</h3>

                      <div className="music-guide-image-placeholder">
                        <img
                          src={`src/assets/${chord}.png`}
                          alt={`Chord ${chord}`}
                        />
                      </div>
                    </button>
                  ))}
                </div>

              </div>
            </div>
          )}
          {expandedChord && (
            <div
              id="expanded-chord-overlay"
              onClick={() => setExpandedChord(null)}
            >
              <div
                id="expanded-chord-panel"
                role="dialog"
                aria-modal="true"
                aria-label={`Akkord ${expandedChord}`}
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  id="expanded-chord-close"
                  type="button"
                  aria-label="Akkordansicht schließen"
                  onClick={() => setExpandedChord(null)}
                >
                  ×
                </button>

                <div className="expanded-chord-image">
                  <img
                    src={`src/assets/${expandedChord}.png`}
                    alt={`Chord ${expandedChord}`}
                  />
                </div>
              </div>
            </div>
          )}
        </>
      )}
      {showControlHint && (
        <div id="control-hint-overlay">
          <div id="settings-highlight"></div>
          <div id="control-hint">


            <h2>IMPORTANT</h2>

            <p>
              Before starting the game, choose your preferred control mode
              in the settings.
            </p>
            <p>
              For the best gaming experience, make sure you play loud enough and in a quiet room.
            </p>

            <button
              id="control-hint-close"
              onClick={() => {
                localStorage.setItem(
                  "guitar-run-control-hint-seen",
                  "true"
                )
                setShowControlHint(false)
              }}
            >
              GOT IT
            </button>
          </div>
        </div>
      )}

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
      {showControlHint && (
        <div id="settings-highlight">
        </div>
      )}

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

      <div
        id="level-difficulty"
        className={`difficulty-${currentLevel.difficulty
          .toLowerCase()
          .replaceAll(" ", "-")}`}
      >
        {currentLevel.difficulty}
      </div>

      <div id="level-actions">

        <button
          id="achievements-button"
          onClick={() => setShowAchievements(true)}
        >
          <img src={achievmentButton} alt="Achievments" />
        </button>

        <button
          id="play-button"
          disabled={!currentLevelUnlocked}
          onClick={() => {
            if (currentLevelUnlocked) {
              startGame(currentLevel)
            }
          }}
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

      {showAchievements && (
        <Achievements
          controlMode={controlMode}
          levelName={currentLevel.name}
          onClose={() => setShowAchievements(false)}
        />
      )}
      {showLeaderboard && (
        <div id="leaderboard-menu">
          <h2>
            LEADERBOARD ({controlMode === "guitar" ? "GUITAR" : "ARROWS"})
          </h2>

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
                .filter(
                  stat =>
                    stat.levelName === currentLevel.name &&
                    stat.controlMode === controlMode
                )
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

          <div id="leaderboard-actions">
            <button
              id="leaderboard-reset"
              onClick={() => {
                clearLevelStats()
                setLevelStats([])
              }}
            >
              RESET STATS
            </button>

            <button
              id="leaderboard-close"
              onClick={() => setShowLeaderboard(false)}
            >
              CLOSE
            </button>
          </div>
        </div>
      )}

    </div>
  </section>)
}

export default StartScreen
