export type LevelStat = {
  levelName: string
  date: string
  progress: number
  coins: number
  totalCoins: number
  attempts: number
}

const STORAGE_KEY = "guitar-run-level-stats"

export const getLevelStats = (): LevelStat[] => {
  const saved = localStorage.getItem(STORAGE_KEY)

  if (!saved) {
    return []
  }

  try {
    return JSON.parse(saved)
  } catch {
    return []
  }
}

export const saveLevelStat = (newStat: LevelStat) => {
  const stats = getLevelStats()

  const levelStats = stats.filter(
    stat => stat.levelName === newStat.levelName
  )

  const bestProgress =
    levelStats.length > 0
      ? Math.max(...levelStats.map(stat => stat.progress))
      : 0

  const bestCoins =
    levelStats.length > 0
      ? Math.max(...levelStats.map(stat => stat.coins))
      : 0

  const bestAttempts =
    levelStats.length > 0
      ? Math.min(...levelStats.map(stat => stat.attempts))
      : Infinity

  const isBetter =
    levelStats.length === 0 ||
    newStat.progress > bestProgress ||
    newStat.coins > bestCoins ||
    newStat.attempts < bestAttempts

  if (!isBetter) {
    return
  }

  stats.push(newStat)

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(stats)
  )
}