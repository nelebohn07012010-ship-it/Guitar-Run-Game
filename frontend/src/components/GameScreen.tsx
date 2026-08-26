import Player from "./Player"
import "./GameScreen.css"
import Obstacle from "./Obstacle"
import { useEffect, useState, useRef } from "react"

const obstacles = [
  { position: 300, width: 40, height: 50 },
  { position: 500, width: 60, height: 80 },
  { position: 800, width: 40, height: 50 },
]


const GameScreen = () => {
  const [movement, setMovement] = useState(0)
  const lastTime = useRef(0)
  const movementRef = useRef(0)
  const animationRef = useRef<number | null>(null)
  const lastObstacle = obstacles[obstacles.length - 1]
  const [playerY, setPlayerY] = useState(50)
  const [gameOver, setGameOver] = useState(false)
  const [restartKey, setRestartKey] = useState(0)

  const handlePlayerPosition = (yPosition: number) => {
    setPlayerY(yPosition)
  }
  const playerLeft = 20
  const playerRight = playerLeft + 50
  const playerBottom = playerY
  const playerTop = playerBottom + 50

  const checkCollision = (
    playerLeft: number,
    playerRight: number,
    playerBottom: number,
    playerTop: number,
    obstacleLeft: number,
    obstacleRight: number,
    obstacleBottom: number,
    obstacleTop: number
  ) => {
    if (
      playerRight > obstacleLeft &&
      playerLeft < obstacleRight &&
      playerTop > obstacleBottom &&
      playerBottom < obstacleTop
    ) {
      return true
    }

    return false

  }

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
      if (!gameOver) {
        if (lastObstacle.position - newMovement > -50) {
          animationRef.current = requestAnimationFrame(animate)
        }
      }
    }
    if (!gameOver) {
      animationRef.current = requestAnimationFrame(animate)
    }
    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current)
      }
    }

  }, [gameOver])

  useEffect(() => {
    if (!gameOver) {
      return
    }

    const restartTimer = setTimeout(() => {
      movementRef.current = 0
      setMovement(0)

      lastTime.current = 0

      setGameOver(false)
      setRestartKey(key => key + 1)
    }, 2000)

    return () => {
      clearTimeout(restartTimer)
    }
  }, [gameOver])

  return (<section id="game-screen">
    <h1>Guitar Run Game</h1>
    <Player key={restartKey} onPositionChange={handlePlayerPosition} gameOver={gameOver} />
    <div id="ground"></div>
    {obstacles.map((obstacle) => {
      const obstacleLeft = obstacle.position - movement
      const obstacleRight = obstacleLeft + obstacle.width
      const obstacleBottom = 50
      const obstacleTop = obstacleBottom + obstacle.height

      const collision = checkCollision(
        playerLeft,
        playerRight,
        playerBottom,
        playerTop,
        obstacleLeft,
        obstacleRight,
        obstacleBottom,
        obstacleTop
      )
      if (collision && !gameOver) {
        console.log("Kollision!")
        setGameOver(true)
      }

      return (
        <Obstacle
          key={obstacle.position}
          position={obstacleLeft}
          width={obstacle.width}
          height={obstacle.height}
        />
      )
    })}</section>)

}

export default GameScreen