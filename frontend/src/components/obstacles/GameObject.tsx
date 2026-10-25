import { forwardRef, useEffect, useImperativeHandle, useRef } from "react"


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
  positionX,
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
    getRect: () => objectRef.current?.getBoundingClientRect() ?? null,
    setVisualPosition: (newPositionX: number, opacity = 1, cameraY = 0) => {
      const element = objectRef.current
      if (!element) return
      const positionPx =
        ((newPositionX - positionX) / 100) * gameAreaWidthRef.current

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
        left: `${positionX}%`,
        bottom: `${positionY}%`,
        width: `${width}%`,
        height: `${height}%`,
      }}
    >
      {children}
    </div>
  )
})

export default GameObject
