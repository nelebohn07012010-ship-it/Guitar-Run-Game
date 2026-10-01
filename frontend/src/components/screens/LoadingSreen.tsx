import "./LoadingScreen.css"
import arcadeBackground from "../../assets/arcade_bckgrnd_startscreen.png"

const LoadingScreen = () => {
  return (
    <section
      id="loading-screen"
      style={{
        backgroundImage: `url(${arcadeBackground})`
      }}
    >
      <div id="loading-area">
        <h1>GUITAR RUN</h1>
        <div id="loading-text">LOADING...</div>
        <div id="loading-spinner"></div>
      </div>
    </section>
  )
}

export default LoadingScreen