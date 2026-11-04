export type LevelStat = {
  levelName: string
  date: string
  progress: number
  coins: number
  totalCoins: number
  attempts: number
  controlMode: "guitar" | "arrows"
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

  const previousStats = stats.filter(
    stat =>
      stat.levelName === newStat.levelName &&
      stat.controlMode === newStat.controlMode
  )

  const isBetter = previousStats.every(
    stat =>
      newStat.progress > stat.progress ||
      (
        newStat.progress === stat.progress &&
        newStat.coins > stat.coins
      )
  )

  if (!isBetter) {
    return
  }

  stats.push(newStat)

  localStorage.setItem(STORAGE_KEY, JSON.stringify(stats))
}



export const clearLevelStats = () => {
  localStorage.removeItem(STORAGE_KEY)
}
