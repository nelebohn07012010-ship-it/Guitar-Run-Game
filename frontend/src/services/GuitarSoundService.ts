import coinSound from "../assets/coin.mp3"
import restartSound from "../assets/video-game-bonus-retro-sparkle-gamemaster-audio-lower-tone-1-00-00.mp3"
import deathSound from "../assets/death.mp3"

export type GameSound =
  | "coin"
  | "restart"
  | "death"

export const playGameSound = (sound: GameSound) => {
  const audio = new Audio()

  if (sound === "coin") {
    audio.src = coinSound
  }

  if (sound === "restart") {
    audio.src = restartSound
  }

  if (sound === "death") {
    audio.src = deathSound
  }

  audio.currentTime = 0
  audio.play()
}