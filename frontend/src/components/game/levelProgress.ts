import type { LevelNote } from "../../levels/levelTypes"

export const countLevelCoins = (obstacles: LevelNote[]) =>
  obstacles.filter((obstacle) => obstacle.type === "coin").length

export const getLevelProgress = (
  obstacles: LevelNote[],
  movement: number
) => {
  const passedObstacleCount = obstacles.filter(
    (obstacle) => obstacle.positionX + obstacle.width <= movement
  ).length

  const percentage = obstacles.length === 0
    ? 0
    : Math.round((passedObstacleCount / obstacles.length) * 100)

  return {
    isComplete: obstacles.length > 0 && passedObstacleCount === obstacles.length,
    percentage,
  }
}

export const findNextPlayableObstacle = (
  obstacles: LevelNote[],
  movement: number,
  playerLeft: number
) => obstacles.find((obstacle) => {
  const isChord = obstacle.chord !== undefined
  const hasPosition = obstacle.string !== undefined && obstacle.fret !== undefined

  if (!isChord && !hasPosition) {
    return false
  }

  const obstacleEnd = obstacle.type === "crouch"
    ? obstacle.positionX + obstacle.width
    : obstacle.positionX

  return obstacleEnd - movement > playerLeft
})

export const getObstacleVisibility = (
  obstacle: LevelNote,
  movement: number,
  fadeDistance = 24
) => {
  const left = obstacle.positionX - movement
  const right = left + obstacle.width
  const isOffScreen = right < -fadeDistance || left > 100 + fadeDistance

  if (isOffScreen) {
    return null
  }

  const fadeIn = Math.min(1, Math.max(0, (100 - left) / fadeDistance))
  const fadeOut = Math.min(1, Math.max(0, right / fadeDistance))

  return { left, opacity: Math.min(fadeIn, fadeOut) }
}
