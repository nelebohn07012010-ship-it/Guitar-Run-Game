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

  // Nur Ergebnisse desselben Levels und Steuerungsmodus vergleichen.
  const previousStats = stats.filter(
    stat =>
      stat.levelName === newStat.levelName &&
      stat.controlMode === newStat.controlMode
  )

  // Prüfen, ob das neue Ergebnis besser als alle bisherigen ist.
  const isBetter = previousStats.every(
    stat =>
      newStat.progress > stat.progress ||
      (
        newStat.progress === stat.progress &&
        newStat.coins > stat.coins
      )
  )

  // Wenn es nicht besser ist, nichts speichern.
  if (!isBetter) {
    return
  }

  // Besseres Ergebnis hinzufügen, alte Einträge bleiben erhalten.
  stats.push(newStat)

  localStorage.setItem(STORAGE_KEY, JSON.stringify(stats))
}



export const clearLevelStats = () => {
  localStorage.removeItem(STORAGE_KEY)
}