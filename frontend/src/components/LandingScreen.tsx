import "./LandingScreen.css"
import backgroundImage from "../assets/arcade_bckgrnd_startscreen.png"

type LandingScreenProps = {
  onStart: () => void
}

const LandingScreen = ({ onStart }: LandingScreenProps) => {
  return (
    <section
      id="landing-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div id="landing-area">

        <h1>GUITAR RUN</h1>

        <h2>PLAY NOW</h2>

        <button id="landing-play-button" onClick={onStart}>
          PLAY
        </button>

      </div>
    </section>
  )
}

export default LandingScreen