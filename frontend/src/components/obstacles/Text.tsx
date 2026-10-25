import {
  forwardRef,
  useEffect,
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
    const gameAreaWidthRef = useRef(0)

    useEffect(() => {
      const gameArea = objectRef.current?.closest("#game-area")
      if (!gameArea) return

      const updateGameAreaWidth = () => {
        gameAreaWidthRef.current = gameArea.getBoundingClientRect().width
      }

      updateGameAreaWidth()

      const resizeObserver = new ResizeObserver(updateGameAreaWidth)
      resizeObserver.observe(gameArea)

      return () => resizeObserver.disconnect()
    }, [])

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

        const positionPx =
          ((newPositionX - positionX) / 100) * gameAreaWidthRef.current

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
          left: `${positionX}%`,
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
