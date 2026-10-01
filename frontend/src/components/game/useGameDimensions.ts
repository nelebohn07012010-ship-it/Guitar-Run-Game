import { useEffect } from "react"
import type { MutableRefObject } from "react"

type GameSize = { width: number; height: number }

export const useGameDimensions = (
  gameScreenRef: MutableRefObject<HTMLElement | null>,
  setGameSize: (size: GameSize) => void
) => {
  useEffect(() => {
    const updateGameSize = () => {
      if (!gameScreenRef.current) return

      const gameArea = gameScreenRef.current.querySelector("#game-area")
      if (!gameArea) return

      const rect = gameArea.getBoundingClientRect()
      setGameSize({ width: rect.width, height: rect.height })
    }

    updateGameSize()
    window.addEventListener("resize", updateGameSize)

    return () => window.removeEventListener("resize", updateGameSize)
  }, [])
}
