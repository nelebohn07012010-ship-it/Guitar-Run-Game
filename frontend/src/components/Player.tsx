import "./Player.css"
import { useState, useRef, useEffect } from "react"

const Player = ({
  onPositionChange,
  gameOver,
  shouldJump,
}: {
  onPositionChange: (yPosition: number) => void
  gameOver: boolean
  shouldJump: boolean
}) => {
  const [yPosition, setYPosition] = useState(50)
  const [verticalSpeed, setVerticalSpeed] = useState(0)
  const yPositionRef = useRef(50)
  const verticalSpeedRef = useRef(0)
  const lastTime = useRef(0)
  const animationRef = useRef<number | null>(null)
  const jump = () => {
    if (yPositionRef.current <= 50) {
      verticalSpeedRef.current = 600
      setVerticalSpeed(600)
    }
  }
  useEffect(() => {
    if (shouldJump) {
      jump()
    }
  }, [shouldJump])
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowUp" && yPositionRef.current <= 50) {
        jump()
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    const animate = (time: number) => {
      if (lastTime.current !== 0) {
        const deltaTime = time - lastTime.current
        const deltaSeconds = deltaTime / 1000

        const gravity = 1500
        const newVerticalSpeed =
          verticalSpeedRef.current - gravity * deltaSeconds

        const newYPosition =
          yPositionRef.current + newVerticalSpeed * deltaSeconds

        if (newYPosition <= 50) {
          yPositionRef.current = 50
          setYPosition(50)

          verticalSpeedRef.current = 0
          setVerticalSpeed(0)

          onPositionChange(50)
        } else {
          verticalSpeedRef.current = newVerticalSpeed
          setVerticalSpeed(newVerticalSpeed)

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

      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [gameOver, onPositionChange])

  return (
    <div id="player" style={{ bottom: yPosition }}></div>
  )
}


export default Player