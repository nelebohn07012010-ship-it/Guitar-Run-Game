import "./LandingScreen.css"
import backgroundImage from "../assets/arcade_bckgrnd_startscreen.png"

type LandingScreenProps = {
  onStart: () => void
}

const LandingScreen = ({ onStart }: LandingScreenProps) => {
  const handleStart = async () => {
    try {
      // Vollbildmodus anfordern
      if (document.documentElement.requestFullscreen) {
        await document.documentElement.requestFullscreen()
      }

      // Querformat anfordern
      if (screen.orientation?.lock) {
        await screen.orientation.lock("landscape")
      }
    } catch (error) {
      console.log("Landscape mode is not supported:", error)
    }

    onStart()
  }

  return (
    <section
      id="landing-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div id="landing-area">

        <h1>GUITAR RUN</h1>

        <h2>PLAY NOW</h2>

        <button id="landing-play-button" onClick={handleStart}>
          PLAY
        </button>

      </div>
    </section>
  )
}

export default LandingScreen