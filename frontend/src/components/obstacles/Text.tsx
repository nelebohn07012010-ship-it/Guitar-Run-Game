import {
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react"
import "./Text.css"

import type { GameObjectHandle } from "./GameObject"

type TextProps = {
  positionX: number
  positionY: number
  width: number
  height: number
  text?: string
}

const Text = forwardRef<GameObjectHandle, TextProps>(
  ({
    positionX,
    positionY,
    width,
    height,
    text,
  }, ref) => {

    const objectRef = useRef<HTMLDivElement>(null)

    useImperativeHandle(ref, () => ({
      getRect: () => {
        return objectRef.current?.getBoundingClientRect() ?? null
      },

      setVisualPosition: (
        newPositionX,
        opacity = 1
      ) => {
        const element = objectRef.current

        if (!element) {
          return
        }

        const gameAreaWidth =
          element
            .closest("#game-area")
            ?.getBoundingClientRect()
            .width ?? 0

        const positionPx =
          (newPositionX / 100) * gameAreaWidth

        element.style.transform =
          `translate3d(${positionPx}px, 0, 0)`

        element.style.opacity = "1"
      },
    }))

    return (
      <div
        ref={objectRef}
        className="text-obstacle"
        style={{
          position: "absolute",
          left: 0,
          bottom: `${positionY}%`,
          width: `${width}%`,
          height: `${height}%`,
        }}
      >
        {text}
      </div>
    )
  }
)

export default Text