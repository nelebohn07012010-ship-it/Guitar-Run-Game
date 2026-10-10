import { forwardRef, useImperativeHandle, useRef } from "react"
import "./Note.css"

export type GameObjectHandle = {
  getRect: () => DOMRect | null
  setVisualPosition: (positionX: number, opacity?: number, cameraY?: number) => void
}

export type GameObjectProps = {
  positionX: number
  positionY: number
  width: number
  height: number
  note?: string
  chord?: string
  string?: string
  fret?: number
  className: string
  children?: React.ReactNode
}

const GameObject = forwardRef<GameObjectHandle, GameObjectProps>(({
  positionY,
  width,
  height,
  string,
  fret,
  chord,
  className,
  children,
}, ref) => {

  const objectRef = useRef<HTMLDivElement>(null)

  useImperativeHandle(ref, () => ({
    getRect: () => objectRef.current?.getBoundingClientRect() ?? null,
    setVisualPosition: (newPositionX: number, opacity = 1, cameraY = 0) => {
      const element = objectRef.current
      if (!element) return
      const gameAreaWidth =
        element.closest("#game-area")?.getBoundingClientRect().width ?? 0
      const positionPx =
        (newPositionX / 100) * gameAreaWidth

      element.style.transform =
        `translate3d(${positionPx}px, ${-cameraY}px, 0)`
      element.style.opacity = String(opacity)
    },
  }))


  return (
    <div
      ref={objectRef}
      className={className}
      style={{
        position: "absolute",
        left: 0,
        bottom: `${positionY}%`,
        width: `${width}%`,
        height: `${height}%`,
      }}
    >
      {children}

      {(chord || (string && fret !== undefined)) && (
        <div className={`obstacle-note ${className}`}>
          {chord ? (
            <strong>{chord}</strong>
          ) : (
            <>
              <strong>{string}-string</strong>
              <span>fret {fret}</span>
            </>
          )}
        </div>
      )}
    </div>
  )
})

export default GameObject