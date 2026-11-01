import "./PauseMenu.css"

type PauseMenuProps = {
  onResume: () => void
  onRestart: () => void
  onHome: () => void
  levelProgress: number
  levelName: string
}

const PauseMenu = ({
  onResume,
  onRestart,
  onHome,
  levelProgress,
  levelName,
}: PauseMenuProps) => {
  return (
    <div id="pause-menu">
      <div id="level-name">{levelName}</div>

      <div id="level-progress">
        <div id="level-progress-bar">
          <div
            id="level-progress-fill"
            style={{ width: `${levelProgress}%` }}
          />
        </div>

        <span>{levelProgress}%</span>
      </div>

      <button type="button" className="pause-action pause-resume" onClick={onResume} aria-label="Spiel fortsetzen">
        <span aria-hidden="true">▶</span>
      </button>

      <button type="button" className="pause-action" onClick={onRestart} aria-label="Level neu starten">
        <span aria-hidden="true">↻</span>
      </button>

      <button type="button" className="pause-action" onClick={onHome} aria-label="Zurück zum Hauptmenü">
        <span aria-hidden="true">⌂</span>
      </button>
    </div>
  )
}

export default PauseMenu
