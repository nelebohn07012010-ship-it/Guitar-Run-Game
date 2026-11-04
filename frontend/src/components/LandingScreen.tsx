import "./LandingScreen.css"

type LandingScreenProps = {
  onStart: () => void
}

const LandingScreen = ({ onStart }: LandingScreenProps) => {
  const handleStart = async () => {
    try {
      if (document.documentElement.requestFullscreen) {
        await document.documentElement.requestFullscreen()
      }

      if (screen.orientation?.lock) {
        await screen.orientation.lock("landscape")
      }
    } catch {
      onStart()
      return
    }

    onStart()
  }

  return (
    <section id="landing-screen">
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
