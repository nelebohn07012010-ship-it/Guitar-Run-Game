import type { ObstacleType } from "./obstacleTypes"

type PlayerSize = "fast" | "slow";
type Difficulty = "Absolute Beginner" | "Advanced Beginner" | "Intermediate" | "Advanced" | "Master"

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
  difficulty: Difficulty
  music: string
  obstacles: LevelNote[]
}