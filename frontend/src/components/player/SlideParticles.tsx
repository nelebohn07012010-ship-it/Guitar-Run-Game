import "./SlideParticles.css"

const SlideParticles = ({ isCrouching, isLanding, isPaused }: { isCrouching: boolean; isLanding: boolean; isPaused: boolean }) => {
  return (
    <>
      <div
        id="slide-particles"
        className={`${isCrouching ? "crouching" : ""} ${isPaused ? "paused" : ""
          } ${isLanding ? "landing" : ""}`}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>

        {isCrouching && (
          <>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </>
        )}
      </div>

      {isLanding && (
        <div id="landing-burst">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
    </>
  )
}

export default SlideParticles