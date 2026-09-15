import { forwardRef, useImperativeHandle, useRef } from "react"

export type GameObjectHandle = {
  getRect: () => DOMRect | null
}

export type GameObjectProps = {
  positionX: number
  positionY: number
  width: number
  height: number
  note: string
  string: string
  fret: number
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
  className,
  children,
}, ref) => {

  const objectRef = useRef<HTMLDivElement>(null)

  useImperativeHandle(ref, () => ({
    getRect: () => objectRef.current?.getBoundingClientRect() ?? null,
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

      <div className={`${className}-note`}>
        <strong>{string}</strong>
        <span>Bund {fret}</span>
      </div>
    </div>
  )
})

export default GameObject