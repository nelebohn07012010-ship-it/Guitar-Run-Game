export type AchievementType =
  | "100%"
  | "coin-master"
  | "first-try"

export type AchievementStat = {
  levelName: string
  achievement: AchievementType
  date: string
  controlMode: "guitar" | "arrows"
}

const STORAGE_KEY = "guitar-run-achievements"

export const getAchievements = (): AchievementStat[] => {
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

export const saveAchievement = (
  levelName: string,
  achievement: AchievementType,
  controlMode: "guitar" | "arrows"
) => {
  const achievements = getAchievements()

  const alreadyUnlocked = achievements.some(
    item =>
      item.levelName === levelName &&
      item.achievement === achievement &&
      item.controlMode === controlMode
  )

  if (alreadyUnlocked) {
    return
  }

  achievements.push({
    levelName,
    achievement,
    controlMode,
    date: new Date().toLocaleDateString("de-DE")
  })

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(achievements)
  )
}

export const hasAchievement = (
  levelName: string,
  achievement: AchievementType,
  controlMode: "guitar" | "arrows"
) => {
  return getAchievements().some(
    item =>
      item.levelName === levelName &&
      item.achievement === achievement &&
      item.controlMode === controlMode
  )
}

export const clearAchievements = () => {
  localStorage.removeItem(STORAGE_KEY)
}