import GameObject, {
  type GameObjectHandle
} from "./GameObject"

import { forwardRef } from "react"

import "./Coin.css"

type CoinProps = {
  positionX: number
  positionY: number
  width: number
  height: number
}

const Coin = forwardRef<GameObjectHandle, CoinProps>(({
  positionX,
  positionY,
  width,
  height
}, ref) => {

  return (
    <GameObject
      ref={ref}
      positionX={positionX}
      positionY={positionY}
      width={width}
      height={height}
      className="coin"
    >
      🪙
    </GameObject>
  )
})

export default Coin