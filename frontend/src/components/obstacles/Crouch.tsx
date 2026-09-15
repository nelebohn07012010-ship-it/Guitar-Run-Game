import { forwardRef } from "react"
import GameObject, { type GameObjectHandle } from "./GameObject"
import "./Crouch.css"

type CrouchProps = {
  positionX: number
  positionY: number
  width: number
  height: number
  note: string
  string: string
  fret: number
}

const Crouch = forwardRef<GameObjectHandle, CrouchProps>((props, ref) => {
  return (
    <GameObject
      {...props}
      ref={ref}
      className="crouch"
    />
  )
})

export default Crouch