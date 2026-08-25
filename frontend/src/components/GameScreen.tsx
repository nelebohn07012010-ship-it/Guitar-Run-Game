import Player from "./Player"
import "./GameScreen.css"
import Obstacle from "./Obstacle"
import { useEffect, useState, useRef } from "react"

const obstacles = [300, 500, 800, 1200, 1500, 1800, 2100]



const GameScreen = () => {
  const [movement, setMovement] = useState(0)
  const lastTime = useRef(0)
  const movementRef = useRef(0)
  const animationRef = useRef<number | null>(null)
  const lastObstacle = obstacles[obstacles.length - 1]



  useEffect(() => {
    const animate = (time: number) => {
      const speed = 200

      let newMovement = movementRef.current

      if (lastTime.current !== 0) {
        const deltaTime = time - lastTime.current
        const deltaSeconds = deltaTime / 1000

        newMovement = movementRef.current + speed * deltaSeconds

        movementRef.current = newMovement
        setMovement(newMovement)
      }

      lastTime.current = time

      if (lastObstacle - newMovement > -50) {
        animationRef.current = requestAnimationFrame(animate)
      }
    }

    animationRef.current = requestAnimationFrame(animate)
    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current)
      }
    }

  }, [])

  return (<section id="game-screen">
    <h1>Guitar Run Game</h1>
    <Player />
    <div id="ground"></div>
    {obstacles.map(
      (obstacle) =>
        (<Obstacle key={obstacle} position={obstacle - movement} />))}
  </section>)
}

export default GameScreen