import type { Level } from "./levelTypes"
import backgroundImage from "../assets/level2_preview.png"
import music from "../assets/Neon Run.mp3"

const levelTwo: Level = {
  backgroundImage,
  music,
  name: "7 Nation Army (2)",
  style: "neon-arcade",
  group: 1,
  obstacles: [
    // Wiederholung 1
    { id: 1, type: "spike", note: "E", string: "A", fret: 7, positionX: 100, positionY: 20, width: 5, height: 8 },
    { id: 2, type: "obstacle", note: "E", string: "A", fret: 7, positionX: 160, positionY: 20, width: 30, height: 8 },
    { id: 100, type: "coin", positionX: 185, positionY: 48, width: 8, height: 8 },
    { id: 3, type: "obstacle", note: "G", string: "A", fret: 10, positionX: 190, positionY: 28, width: 30, height: 8 },
    { id: 4, type: "obstacle", note: "E", string: "A", fret: 7, positionX: 220, positionY: 36, width: 30, height: 8 },
    { id: 5, type: "obstacle", note: "D", string: "A", fret: 5, positionX: 250, positionY: 44, width: 30, height: 8 },
    { id: 6, type: "obstacle", note: "C", string: "A", fret: 3, positionX: 280, positionY: 52, width: 15, height: 8 },
    { id: 7, type: "spike", note: "B", string: "A", fret: 2, positionX: 340, positionY: 20, width: 5, height: 8 },

    // Wiederholung 2
    { id: 8, type: "spike", note: "E", string: "A", fret: 7, positionX: 400, positionY: 20, width: 5, height: 8 },
    { id: 9, type: "obstacle", note: "E", string: "A", fret: 7, positionX: 460, positionY: 20, width: 30, height: 8 },
    { id: 10, type: "obstacle", note: "G", string: "A", fret: 10, positionX: 490, positionY: 28, width: 30, height: 8 },
    { id: 11, type: "obstacle", note: "E", string: "A", fret: 7, positionX: 520, positionY: 36, width: 30, height: 8 },
    { id: 12, type: "obstacle", note: "D", string: "A", fret: 5, positionX: 550, positionY: 44, width: 30, height: 8 },
    { id: 13, type: "obstacle", note: "C", string: "A", fret: 3, positionX: 580, positionY: 52, width: 15, height: 8 },
    { id: 101, type: "coin", positionX: 600, positionY: 70, width: 8, height: 8 },
    { id: 14, type: "spike", note: "B", string: "A", fret: 2, positionX: 640, positionY: 20, width: 5, height: 8 },

    // Wiederholung 3
    { id: 15, type: "spike", note: "E", string: "A", fret: 7, positionX: 700, positionY: 20, width: 5, height: 8 },
    { id: 16, type: "obstacle", note: "E", string: "A", fret: 7, positionX: 760, positionY: 20, width: 30, height: 8 },
    { id: 17, type: "obstacle", note: "G", string: "A", fret: 10, positionX: 790, positionY: 28, width: 30, height: 8 },
    { id: 18, type: "obstacle", note: "E", string: "A", fret: 7, positionX: 820, positionY: 36, width: 30, height: 8 },
    { id: 19, type: "obstacle", note: "D", string: "A", fret: 5, positionX: 850, positionY: 44, width: 30, height: 8 },
    { id: 20, type: "obstacle", note: "C", string: "A", fret: 3, positionX: 880, positionY: 52, width: 15, height: 8 },
    { id: 21, type: "spike", note: "B", string: "A", fret: 2, positionX: 940, positionY: 20, width: 5, height: 8 },
    { id: 103, type: "coin", positionX: 970, positionY: 40, width: 8, height: 8 },

    // Wiederholung 4
    { id: 22, type: "spike", note: "E", string: "A", fret: 7, positionX: 1000, positionY: 20, width: 5, height: 8 },
    { id: 23, type: "obstacle", note: "E", string: "A", fret: 7, positionX: 1060, positionY: 20, width: 30, height: 8 },
    { id: 24, type: "obstacle", note: "G", string: "A", fret: 10, positionX: 1090, positionY: 28, width: 30, height: 8 },
    { id: 25, type: "obstacle", note: "E", string: "A", fret: 7, positionX: 1120, positionY: 36, width: 30, height: 8 },
    { id: 26, type: "obstacle", note: "D", string: "A", fret: 5, positionX: 1150, positionY: 44, width: 30, height: 8 },
    { id: 27, type: "obstacle", note: "C", string: "A", fret: 3, positionX: 1180, positionY: 52, width: 15, height: 8 },
    { id: 28, type: "spike", note: "B", string: "A", fret: 2, positionX: 1240, positionY: 20, width: 5, height: 8 },
    { id: 104, type: "coin", positionX: 1270, positionY: 40, width: 8, height: 8 },

    // Wiederholung 5
    { id: 29, type: "spike", note: "E", string: "A", fret: 7, positionX: 1300, positionY: 20, width: 5, height: 8 },
    { id: 30, type: "obstacle", note: "E", string: "A", fret: 7, positionX: 1360, positionY: 20, width: 30, height: 8 },
    { id: 31, type: "obstacle", note: "G", string: "A", fret: 10, positionX: 1390, positionY: 28, width: 30, height: 8 },
    { id: 32, type: "obstacle", note: "E", string: "A", fret: 7, positionX: 1420, positionY: 36, width: 30, height: 8 },
    { id: 33, type: "obstacle", note: "D", string: "A", fret: 5, positionX: 1450, positionY: 44, width: 30, height: 8 },
    { id: 34, type: "obstacle", note: "C", string: "A", fret: 3, positionX: 1480, positionY: 52, width: 15, height: 8 },
    { id: 105, type: "coin", positionX: 1500, positionY: 80, width: 8, height: 8 },
    { id: 35, type: "spike", note: "B", string: "A", fret: 2, positionX: 1540, positionY: 20, width: 5, height: 8 },
  ]
}

export default levelTwo