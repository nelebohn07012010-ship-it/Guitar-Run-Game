import "./StartScreen.css"

const StartScreen = ({ startGame }: { startGame: (playing: boolean) => void }) => {
  return (<section id="start-screen">
    <div id="start-area">
      <h1>Guitar Run</h1>

      <button onClick={() => startGame(true)}>
        Start Game
      </button>
    </div>
  </section>)
}

export default StartScreen
