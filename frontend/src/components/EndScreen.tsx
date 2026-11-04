import "./EndScreen.css"

const confetti = Array.from({ length: 40 }, (_, index) => ({
  delay: `${(index % 5) * 0.04}s`,
  x: `${(index * 47) % 160 - 80}vw`,
  y: `${(index * 29) % 100 - 70}vh`,
}))

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
  return (
    <div id="end-screen">
      <div id="confetti">
        {confetti.map((piece, index) => (
          <span
            key={index}
            style={{
              "--x": piece.x,
              "--y": piece.y,
              animationDelay: piece.delay,
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
