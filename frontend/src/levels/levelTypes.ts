import type { ObstacleType } from "./obstacleTypes"


export type LevelNote = {
  id: number
  type: ObstacleType
  note: string
  string: string
  fret: number
  positionX: number
  positionY: number
  width: number
  height: number
}

export type Level = {
  style: string
  obstacles: LevelNote[]
}