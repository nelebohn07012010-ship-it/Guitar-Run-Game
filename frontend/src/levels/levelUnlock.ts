
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
  const groupLevels = levels.filter(
    (item) => item.group === level.group
  )

  if (groupLevels[0]?.name === level.name) {
    return true
  }

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
