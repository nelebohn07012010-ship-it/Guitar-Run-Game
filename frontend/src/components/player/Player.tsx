import "./Player.css"
import { memo, useState, useRef, useEffect, forwardRef, useImperativeHandle } from "react"
import { GAME_CONFIG } from "../../gameConfig"
import SlideParticles from "./SlideParticles"

export type PlayerHandle = {
  landOn: (groundY: number) => void
  fallToGround: () => void
  isCrouching: () => boolean
  crouch: () => void
  setIsCrouching: (crouhing: boolean) => void
  getYPosition: () => number
  getScreenRect: () => DOMRect | null
}

type PlayerProps = {
  onPositionChange: (yPosition: number) => void
  gameOver: boolean
  jumpTrigger: number
  groundY: number
  isPaused: boolean
  controlMode: "guitar" | "arrows"
  playerSize: "fast" | "slow"
}

const Player = memo(
  forwardRef<PlayerHandle, PlayerProps>(({
  onPositionChange,
  gameOver,
  jumpTrigger,
  groundY,
  isPaused,
  controlMode,
  playerSize: playerSizeName,
}, ref) => {

  // ====================
  // STATE & REFS
  // ====================

  const [yPosition, setYPosition] = useState(groundY)
  const [isCrouching, setIsCrouching] = useState(false)
  const [rotation, setRotation] = useState(0)
  const [isJumping, setIsJumping] = useState(false)
  const [isLanding, setIsLanding] = useState(false)

  const yPositionRef = useRef(groundY)
  const verticalSpeedRef = useRef(0)
  const lastTime = useRef(0)
  const animationRef = useRef<number | null>(null)
  const currentGroundYRef = useRef(groundY)
  // ====================
  // JUMP LOGIC
  // ====================
  const jump = () => {
    if (yPositionRef.current <= currentGroundYRef.current + 0.5) {
      verticalSpeedRef.current = playerSizeName === "slow" ? 70 : 240
      setIsJumping(true)
      setRotation(prev => prev + 180)
    }
  }
  useEffect(() => {
    if (jumpTrigger > 0) {
      jump()
    }
  }, [jumpTrigger])

  // ===================
  // CROUCH LOGIC
  // ===================

  const crouch = () => {
    setIsCrouching(true)
  }

  // ===================
  // LANDING LOGIC
  // ===================

  const landOn = (newGroundY: number) => {
    currentGroundYRef.current = newGroundY

    yPositionRef.current = newGroundY
    setYPosition(newGroundY)
    verticalSpeedRef.current = 0

    onPositionChange(newGroundY)
  }

  useImperativeHandle(ref, () => ({
    landOn,
    fallToGround,
    isCrouching: () => isCrouching,
    setIsCrouching: (crouching) => { setIsCrouching(crouching) },
    crouch,
    getYPosition: () => yPositionRef.current,
    getScreenRect: () => {
      return document.getElementById("player")?.getBoundingClientRect() ?? null
    },

  }))

  // ====================
  // FALLING LOGIC
  // ====================

  const fallToGround = () => {
    console.log("FALL TO GROUND AUSGEFÜHRT")
    console.log("Vorheriger Ground:", currentGroundYRef.current)
    console.log("Normaler Ground:", groundY)
    currentGroundYRef.current = groundY
  }

  // ====================
  // PLAYER ANIMATION
  // ====================

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (controlMode !== "arrows") return
      if (event.key === "ArrowUp" && yPositionRef.current <= currentGroundYRef.current + 0.5) {
        jump()
      }
      if (event.key === "ArrowDown" && !isPaused && !gameOver) {
        console.log("ARROW DOWN")
        setIsCrouching(true)
      }
    }

    const handleKeyUp = (event: KeyboardEvent) => {
      if (controlMode !== "arrows") return
      if (event.key === "ArrowDown") {
        console.log("ARROW DOWN LOSGELASSEN")
        setIsCrouching(false)
      }
    }

    window.addEventListener("keyup", handleKeyUp)
    window.addEventListener("keydown", handleKeyDown)

    const animate = (time: number) => {
      if (isPaused) {
        lastTime.current = time
        animationRef.current = requestAnimationFrame(animate)
        return
      }
      if (lastTime.current !== 0) {
        const deltaTime = time - lastTime.current
        const deltaSeconds = deltaTime / 1000

        const gravity = playerSizeName === "slow" ? 180 : 1000

        const newVerticalSpeed =
          verticalSpeedRef.current - gravity * deltaSeconds

        const newYPosition =
          yPositionRef.current + newVerticalSpeed * deltaSeconds

        if (newYPosition <= currentGroundYRef.current) {
          if (verticalSpeedRef.current < 0) {
            setIsLanding(true)
            setTimeout(() => setIsLanding(false), 400)
          }
          yPositionRef.current = currentGroundYRef.current
          setYPosition(currentGroundYRef.current)

          verticalSpeedRef.current = 0

          if (isJumping) {
            setIsJumping(false)

            setIsLanding(true)
            setTimeout(() => setIsLanding(false), 400)
          }

          onPositionChange(currentGroundYRef.current)
        } else {
          verticalSpeedRef.current = newVerticalSpeed


          yPositionRef.current = newYPosition
          setYPosition(newYPosition)

          onPositionChange(newYPosition)
        }
      }

      lastTime.current = time

      if (!gameOver) {
        animationRef.current = requestAnimationFrame(animate)
      }
    }

    if (!gameOver) {
      animationRef.current = requestAnimationFrame(animate)
    }

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener("keyup", handleKeyUp)
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [gameOver, onPositionChange, controlMode, isPaused, isJumping, playerSizeName])


  // ====================
  // RENDER
  // ====================


  const playerSize = GAME_CONFIG.player

  const playerWidth = playerSize.width;

  const playerHeight = isCrouching
    ? playerSize.height / 2
    : playerSize.height;


  return (
    <div id="player" className={isCrouching ? "crouching" : ""} style={{
      left: `${GAME_CONFIG.player.left}%`,
      bottom: `${yPosition}%`,
      width: `${playerWidth}%`,
      height: `${playerHeight}%`
    }}>
      <div
        id="player-visual"
        className={`${isCrouching ? "crouching" : ""} ${gameOver ? "dead" : ""}`}
        style={{ transform: `rotate(${rotation}deg)` }}
      ></div>
      <SlideParticles isCrouching={isCrouching} isLanding={isLanding} isPaused={isPaused || gameOver || isJumping} />
    </div>
  )
  })
)


export default Player
