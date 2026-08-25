import "./StartScreen.css"

const StartScreen = ({ startGame }: { startGame: (playing: boolean) => void }) => {
  return (<section id="center">
    <h1>Guitar Run</h1>
    <button onClick={() => startGame(true)} >Start Game</button>
  </section>)
}

export default StartScreen
