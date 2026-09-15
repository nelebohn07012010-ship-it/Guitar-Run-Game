import { forwardRef } from "react"
import GameObject, { type GameObjectHandle } from "./GameObject"
import "./Platform.css"

type ObstacleProps = {
  positionX: number
  positionY: number
  width: number
  height: number
  note: string
  string: string
  fret: number
}

const Obstacle = forwardRef<GameObjectHandle, ObstacleProps>((props, ref) => {
  return (
    <GameObject
      {...props}
      ref={ref}
      className="obstacle"
    />
  )
})

export default Obstacle