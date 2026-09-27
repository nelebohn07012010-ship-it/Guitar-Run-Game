import "./EndScreen.css"

type EndScreenProps = {
  attempts: number
  coins: number
  totalCoins: number
  onReplay: () => void
  onHome: () => void
  controlMode: "guitar" | "arrows"
}

const EndScreen = ({
  attempts,
  coins,
  totalCoins,
  onReplay,
  onHome,
  controlMode
}: EndScreenProps) => {
  const confetti = Array.from({ length: 40 })
  return (
    <div id="end-screen">
      <div id="confetti">
        {confetti.map((_, index) => (
          <span
            key={index}
            style={{
              "--x": `${Math.random() * 160 - 80}vw`,
              "--y": `${Math.random() * 100 - 70}vh`,
              animationDelay: `${Math.random() * 0.2}s`
            } as React.CSSProperties}
          />
        ))}
      </div>

      <div id="end-screen-panel">

        <h1>LEVEL COMPLETE</h1>

        <div id="end-stats">

          <div className="end-stat">
            <span>ATTEMPTS</span>
            <strong>{attempts}</strong>
          </div>

          <div className="end-stat">
            <span>COINS</span>
            <strong>
              {coins}/{totalCoins}
            </strong>
          </div>

          <div className="end-stat">
            <span>CONTROL</span>
            <strong>
              {controlMode === "guitar" ? "🎸" : "⌨"}
            </strong>
          </div>
        </div>

        <div id="end-buttons">

          <button onClick={onReplay}>
            REPLAY
          </button>

          <button onClick={onHome}>
            HOME
          </button>

        </div>

      </div>

    </div>
  )
}

export default EndScreen