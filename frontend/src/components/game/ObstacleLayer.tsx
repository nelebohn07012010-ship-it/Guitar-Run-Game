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

type RenderedObstacleProps = {
  obstacle: LevelNote
  objectRef: (handle: GameObjectHandle | null) => void
}

const RenderedObstacle = ({ obstacle, objectRef }: RenderedObstacleProps) => {
  const geometry = {
    height: obstacle.height,
    positionX: obstacle.positionX,
    positionY: obstacle.positionY,
    width: obstacle.width,
  }

  const noteData = {
    chord: obstacle.chord,
    fret: obstacle.fret,
    note: obstacle.note,
    string: obstacle.string,
  }

  switch (obstacle.type) {
    case "spike":
      return <Spike ref={objectRef} {...geometry} {...noteData} />
    case "crouch":
      return <Crouch ref={objectRef} {...geometry} {...noteData} />
    case "coin":
      return <Coin ref={objectRef} {...geometry} />
    case "text":
      return <Text ref={objectRef} {...geometry} text={obstacle.text} />
    default:
      return <Platform ref={objectRef} {...geometry} {...noteData} />
  }
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

        return (
          <RenderedObstacle
            key={obstacle.id}
            obstacle={obstacle}
            objectRef={ref}
          />
        )
      })}
    </div>
  )
})

export default ObstacleLayer
