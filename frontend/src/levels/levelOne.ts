import type { Level } from "./levelTypes"
import backgroundImage from "../assets/arcade_bckgrnd_startscreen.png"
import music from "../assets/Neon Run.mp3"

const levelOne: Level = {
  backgroundImage,
  music,
  name: "Neon Highway (Lvl.1)",
  style: "neon-arcade",
  obstacles: [
    {
      id: 11,
      type: "coin",
      positionX: 100,
      positionY: 35,
      width: 5,
      height: 5,
    },

  ]
}

export default levelOne