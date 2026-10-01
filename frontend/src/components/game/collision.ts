export const checkCollision = (
  playerLeft: number,
  playerRight: number,
  playerBottom: number,
  playerTop: number,
  obstacleLeft: number,
  obstacleRight: number,
  obstacleBottom: number,
  obstacleTop: number
) => (
  playerRight > obstacleLeft &&
  playerLeft < obstacleRight &&
  playerTop > obstacleBottom &&
  playerBottom < obstacleTop
)

export const checkSpikeCollision = (
  playerLeft: number,
  playerRight: number,
  playerBottom: number,
  playerTop: number,
  spikeLeft: number,
  spikeRight: number,
  spikeBottom: number,
  spikeTop: number
) => {
  if (playerRight <= spikeLeft || playerLeft >= spikeRight) {
    return false
  }

  const spikeWidth = spikeRight - spikeLeft
  const spikeHeight = spikeTop - spikeBottom
  const spikeCenter = spikeLeft + spikeWidth / 2
  const overlapLeft = Math.max(playerLeft, spikeLeft)
  const overlapRight = Math.min(playerRight, spikeRight)
  const closestX = Math.max(overlapLeft, Math.min(spikeCenter, overlapRight))
  const distanceFromCenter = Math.abs(closestX - spikeCenter)
  const triangleHeight = spikeHeight * (1 - (2 * distanceFromCenter) / spikeWidth)
  const triangleTopAtPlayer = spikeBottom + triangleHeight

  return playerTop > spikeBottom && playerBottom < triangleTopAtPlayer
}
