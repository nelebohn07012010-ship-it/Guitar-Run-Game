import { getAchievements } from "../../levels/achievementStats"
import "./Achievments.css"

type AchievementsProps = {
  controlMode: "guitar" | "arrows"
  levelName: string
  onClose: () => void
}

const Achievements = ({ controlMode, levelName, onClose }: AchievementsProps) => {
  const achievements = getAchievements().filter(
    achievement =>
      achievement.controlMode === controlMode &&
      achievement.levelName === levelName
  )

  return (
    <div id="achievements-menu">
      <h2>
        ACHIEVEMENTS ({controlMode.toUpperCase()})
      </h2>

      <div id="achievements-stats">
        {["100%", "coin-master", "first-try"].map(achievementType => {
          const unlocked = achievements.find(
            achievement => achievement.achievement === achievementType
          )

          const icon =
            achievementType === "100%"
              ? "🏆"
              : achievementType === "coin-master"
                ? "🪙"
                : "⚡"

          return (
            <div
              key={achievementType}
              className={unlocked ? "achievement unlocked" : "achievement locked"}
            >
              <div>
                {icon}
              </div>

              <div>
                {achievementType === "100%"
                  ? "100 %"
                  : achievementType === "coin-master"
                    ? "Coin Master"
                    : "First Try"}
              </div>

              <div>
                {unlocked ? unlocked.date : "LOCKED"}
              </div>
            </div>

          )


        })}


      </div>
      <div id="achievements-actions">
        <button
          id="achievements-close"
          onClick={onClose}
        >
          CLOSE
        </button>
      </div>
    </div>
  )
}

export default Achievements