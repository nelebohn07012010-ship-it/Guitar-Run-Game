
import { useEffect, useRef } from "react"
import "./NoteCatalog.css"

type CatalogObstacle = {
  id: number
  type: string
  note?: string
  chord?: string
  string?: string
  fret?: number
}

type NoteCatalogProps = {
  obstacles: CatalogObstacle[]
  activeObstacleId: number | null
}

export default function NoteCatalog({
  obstacles,
  activeObstacleId,
}: NoteCatalogProps) {
  const activeItemRef = useRef<HTMLDivElement>(null)

  // Nur spielbare Noten und Akkorde anzeigen, keine Münzen.
  const notes = obstacles.filter(
    (obstacle) =>
      obstacle.chord !== undefined ||
      (
        obstacle.note !== undefined &&
        obstacle.string !== undefined &&
        obstacle.fret !== undefined
      )
  )

  const activeIndex = notes.findIndex(
    (obstacle) => obstacle.id === activeObstacleId
  )


  useEffect(() => {
    const activeItem = activeItemRef.current
    const track = activeItem?.parentElement

    if (!activeItem || !track) return

    const itemLeft = activeItem.offsetLeft
    const itemWidth = activeItem.offsetWidth
    const trackWidth = track.clientWidth

    const targetScrollLeft =
      itemLeft - (trackWidth - itemWidth) / 2

    track.scrollTo({
      left: targetScrollLeft,
      behavior: "smooth",
    })
  }, [activeObstacleId])

  return (
    <div className="note-catalog">


      <div className="note-catalog-track">
        {notes.map((obstacle, index) => {
          const isActive = obstacle.id === activeObstacleId
          const isPlayed =
            activeIndex >= 0 && index < activeIndex

          return (
            <div
              key={obstacle.id}
              ref={isActive ? activeItemRef : null}
              className={[
                "note-catalog-item",
                isActive ? "active" : "",
                isPlayed ? "played" : "",
              ].join(" ")}
            >

              {obstacle.chord ? (
                <strong>{obstacle.chord} CHORD</strong>
              ) : (
                <span className="note-details">
                  <span>string : {obstacle.string}</span>
                  <span>fret : {obstacle.fret}</span>
                </span>
              )}

            </div>
          )
        })}
      </div>
    </div>
  )
}
