import { forwardRef } from "react"
import GameObject, { type GameObjectHandle } from "./GameObject"
import "./Spike.css"

type SpikeProps = {
  positionX: number
  positionY: number
  width: number
  height: number
  note: string
  string: string
  fret: number
}

const Spike = forwardRef<GameObjectHandle, SpikeProps>((props, ref) => {
  return (
    <GameObject
      {...props}
      ref={ref}
      className="spike"
    >
      <div className="spike-shape" />
    </GameObject>
  )
})

export default Spike


