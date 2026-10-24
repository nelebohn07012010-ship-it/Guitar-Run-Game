
type UnlockableLevel = {
  name: string
  group?: number
}

const STORAGE_KEY = "guitar-run-completed-levels"

function getCompletedLevels(): string[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)

    if (!saved) {
      return []
    }

    const parsed: unknown = JSON.parse(saved)

    if (
      Array.isArray(parsed) &&
      parsed.every((name) => typeof name === "string")
    ) {
      return parsed
    }

    return []
  } catch {
    return []
  }
}

export function isLevelUnlocked(
  level: UnlockableLevel,
  levels: UnlockableLevel[]
): boolean {
  // Alle Level derselben Gruppe finden
  const groupLevels = levels.filter(
    (item) => item.group === level.group
  )

  // Das erste Level jeder Gruppe ist immer freigeschaltet
  if (groupLevels[0]?.name === level.name) {
    return true
  }

  // Das vorherige Level innerhalb dieser Gruppe finden
  const levelIndex = groupLevels.findIndex(
    (item) => item.name === level.name
  )

  if (levelIndex <= 0) {
    return false
  }

  const previousLevel = groupLevels[levelIndex - 1]
  const completedLevels = getCompletedLevels()

  return completedLevels.includes(previousLevel.name)
}

export function completeLevel(levelName: string): void {
  const completedLevels = getCompletedLevels()

  if (!completedLevels.includes(levelName)) {
    completedLevels.push(levelName)

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(completedLevels)
    )
  }
}
