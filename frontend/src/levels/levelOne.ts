import type { Level } from "./levelTypes"
import backgroundImage from "../assets/level1_preview.png"
import music from "../assets/Neon Run.mp3"

const levelOne: Level = {
  backgroundImage,
  music,
  difficulty: "Advanced Beginner",
  name: "7 Nation Army (1)",
  style: "neon-arcade",
  group: 1,
  obstacles: [
    // RIFF 1: A-Saite – 7 7 10 7 5 3 2
    { id: 1, type: "spike", note: "E", string: "A", fret: 7, positionX: 100, positionY: 20, width: 5, height: 8 },
    { id: 2, type: "obstacle", note: "E", string: "A", fret: 7, positionX: 220, positionY: 20, width: 230, height: 8 },
    { id: 3, type: "spike", note: "G", string: "A", fret: 10, positionX: 340, positionY: 28, width: 5, height: 8 },
    { id: 4, type: "obstacle", note: "E", string: "A", fret: 7, positionX: 460, positionY: 28, width: 110, height: 8 },
    { id: 5, type: "obstacle", note: "D", string: "A", fret: 5, positionX: 580, positionY: 36, width: 260, height: 8 },
    { id: 6, type: "spike", note: "C", string: "A", fret: 3, positionX: 700, positionY: 44, width: 5, height: 8 },
    { id: 7, type: "spike", note: "B", string: "A", fret: 2, positionX: 820, positionY: 44, width: 5, height: 8 },
    { id: 100, type: "coin", positionX: 840, positionY: 62, width: 8, height: 8 },

    { id: 8, type: "crouch", note: "E", string: "A", fret: 7, positionX: 920, positionY: 30, width: 20, height: 8 },
    { id: 9, type: "obstacle", note: "E", string: "A", fret: 7, positionX: 1140, positionY: 20, width: 110, height: 8 },
    { id: 10, type: "obstacle", note: "G", string: "A", fret: 10, positionX: 1260, positionY: 28, width: 230, height: 8 },
    { id: 11, type: "spike", note: "E", string: "A", fret: 7, positionX: 1380, positionY: 36, width: 5, height: 8 },
    { id: 12, type: "obstacle", note: "D", string: "A", fret: 5, positionX: 1500, positionY: 36, width: 260, height: 8 },
    { id: 13, type: "crouch", note: "C", string: "A", fret: 3, positionX: 1620, positionY: 54, width: 20, height: 8 },
    { id: 101, type: "coin", positionX: 1690, positionY: 66, width: 8, height: 8 },
    { id: 14, type: "spike", note: "B", string: "A", fret: 2, positionX: 1740, positionY: 44, width: 5, height: 8 },
    { id: 102, type: "coin", positionX: 1780, positionY: 46, width: 8, height: 8 },

    { id: 15, type: "obstacle", note: "E", string: "A", fret: 7, positionX: 1860, positionY: 20, width: 110, height: 8 },
    { id: 16, type: "obstacle", note: "E", string: "A", fret: 7, positionX: 1980, positionY: 28, width: 110, height: 8 },
    { id: 17, type: "obstacle", note: "G", string: "A", fret: 10, positionX: 2100, positionY: 36, width: 110, height: 8 },
    { id: 18, type: "obstacle", note: "E", string: "A", fret: 7, positionX: 2220, positionY: 44, width: 110, height: 8 },
    { id: 19, type: "obstacle", note: "D", string: "A", fret: 5, positionX: 2340, positionY: 52, width: 100, height: 8 },
    { id: 20, type: "obstacle", note: "C", string: "A", fret: 3, positionX: 2460, positionY: 44, width: 125, height: 8 },
    { id: 21, type: "spike", note: "B", string: "A", fret: 2, positionX: 2580, positionY: 52, width: 5, height: 8 },
    { id: 103, type: "coin", positionX: 2600, positionY: 30, width: 8, height: 8 }
  ]
}

export default levelOne