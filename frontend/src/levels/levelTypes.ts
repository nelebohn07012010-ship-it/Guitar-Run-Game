import type { ObstacleType } from "./obstacleTypes"

type PlayerSize = "fast" | "slow";

export type LevelNote = {
  id: number
  type: ObstacleType
  note?: string
  chord?: string
  string?: string
  fret?: number
  positionX: number
  positionY: number
  width: number
  height: number
  text?: string
}

export type Level = {
  name: string
  backgroundImage: string
  group?: number
  style: string
  speed?: PlayerSize;
  music: string
  obstacles: LevelNote[]
}