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

      <button onClick={onResume}>
      </button>

      <button onClick={onRestart}>
      </button>

      <button onClick={onHome}>
      </button>
    </div>
  )
}

export default PauseMenu