import { memo } from "react"
import type { MutableRefObject } from "react"
import type { LevelNote } from "../../levels/levelTypes"
import Spike from "../obstacles/Spike"
import Crouch from "../obstacles/Crouch"
import Platform from "../obstacles/Platform"
import Coin from "../obstacles/Coin"
import Text from "../obstacles/Text"
import type { GameObjectHandle } from "../obstacles/GameObject"

type ObstacleLayerProps = {
  obstacles: LevelNote[]
  gameObjRef: MutableRefObject<Record<number, GameObjectHandle | null>>
}

const ObstacleLayer = memo(function ObstacleLayer({
  obstacles,
  gameObjRef,
}: ObstacleLayerProps) {
  return (
    <div id="obstacle-layer">
      {obstacles.map((obstacle) => {
        const ref = (handle: GameObjectHandle | null) => {
          gameObjRef.current[obstacle.id] = handle
        }

        if (obstacle.type === "spike") {
          return <Spike key={obstacle.id} ref={ref} positionX={obstacle.positionX} positionY={obstacle.positionY} width={obstacle.width} height={obstacle.height} note={obstacle.note} string={obstacle.string} fret={obstacle.fret} />
        }

        if (obstacle.type === "crouch") {
          return <Crouch key={obstacle.id} ref={ref} positionX={obstacle.positionX} positionY={obstacle.positionY} width={obstacle.width} height={obstacle.height} note={obstacle.note} string={obstacle.string} fret={obstacle.fret} />
        }

        if (obstacle.type === "coin") {
          return <Coin key={obstacle.id} ref={ref} positionX={obstacle.positionX} positionY={obstacle.positionY} width={obstacle.width} height={obstacle.height} />
        }

        if (obstacle.type === "text") {
          return <Text key={obstacle.id} ref={ref} positionX={obstacle.positionX} positionY={obstacle.positionY} width={obstacle.width} height={obstacle.height} text={obstacle.text} />
        }

        return <Platform key={obstacle.id} ref={ref} positionX={obstacle.positionX} positionY={obstacle.positionY} width={obstacle.width} height={obstacle.height} note={obstacle.note} string={obstacle.string} fret={obstacle.fret} />
      })}
    </div>
  )
})

export default ObstacleLayer
