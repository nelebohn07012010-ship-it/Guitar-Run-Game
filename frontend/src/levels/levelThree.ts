import type { Level } from "./levelTypes"
import backgroundImage from "../assets/level3_preview.png"
import music from "../assets/Neon Run.mp3"

const levelThree: Level = {
  backgroundImage,
  music,
  speed: "fast",
  name: "7 Nation Army (3)",
  style: "neon-arcade",
  group: 1,
  obstacles: [
    // Wiederholung 1
    { id: 1, type: "obstacle", note: "E", string: "A", fret: 7, positionX: 100, positionY: 20, width: 30, height: 8 },
    { id: 2, type: "obstacle", note: "E", string: "A", fret: 7, positionX: 130, positionY: 20, width: 10, height: 16 },
    { id: 3, type: "obstacle", note: "G", string: "A", fret: 10, positionX: 145, positionY: 20, width: 10, height: 24 },
    { id: 4, type: "obstacle", note: "E", string: "A", fret: 7, positionX: 160, positionY: 20, width: 10, height: 32 },
    { id: 5, type: "obstacle", note: "D", string: "A", fret: 5, positionX: 175, positionY: 20, width: 10, height: 40 },
    { id: 6, type: "obstacle", note: "C", string: "A", fret: 3, positionX: 190, positionY: 20, width: 5, height: 48 },
    { id: 7, type: "spike", note: "B", string: "A", fret: 2, positionX: 220, positionY: 20, width: 5, height: 8 },

    // Wiederholung 2 — Abstand 30 px
    { id: 8, type: "obstacle", note: "E", string: "A", fret: 7, positionX: 255, positionY: 20, width: 30, height: 8 },
    { id: 9, type: "obstacle", note: "E", string: "A", fret: 7, positionX: 285, positionY: 20, width: 10, height: 16 },
    { id: 10, type: "obstacle", note: "G", string: "A", fret: 10, positionX: 300, positionY: 20, width: 10, height: 24 },
    { id: 11, type: "obstacle", note: "E", string: "A", fret: 7, positionX: 315, positionY: 20, width: 10, height: 32 },
    { id: 12, type: "obstacle", note: "D", string: "A", fret: 5, positionX: 330, positionY: 20, width: 10, height: 40 },
    { id: 13, type: "obstacle", note: "C", string: "A", fret: 3, positionX: 345, positionY: 20, width: 5, height: 48 },
    { id: 14, type: "spike", note: "B", string: "A", fret: 2, positionX: 375, positionY: 20, width: 5, height: 8 },

    // Wiederholung 3 — Abstand 30 px
    { id: 15, type: "obstacle", note: "E", string: "A", fret: 7, positionX: 410, positionY: 20, width: 30, height: 8 },
    { id: 16, type: "obstacle", note: "E", string: "A", fret: 7, positionX: 440, positionY: 20, width: 10, height: 16 },
    { id: 17, type: "obstacle", note: "G", string: "A", fret: 10, positionX: 455, positionY: 20, width: 10, height: 24 },
    { id: 18, type: "obstacle", note: "E", string: "A", fret: 7, positionX: 470, positionY: 20, width: 10, height: 32 },
    { id: 19, type: "obstacle", note: "D", string: "A", fret: 5, positionX: 485, positionY: 20, width: 10, height: 40 },
    { id: 20, type: "obstacle", note: "C", string: "A", fret: 3, positionX: 500, positionY: 20, width: 5, height: 48 },
    { id: 21, type: "spike", note: "B", string: "A", fret: 2, positionX: 530, positionY: 20, width: 5, height: 8 },

    // Wiederholung 4 — Abstand 30 px
    { id: 22, type: "obstacle", note: "E", string: "A", fret: 7, positionX: 565, positionY: 20, width: 30, height: 8 },
    { id: 23, type: "obstacle", note: "E", string: "A", fret: 7, positionX: 595, positionY: 20, width: 10, height: 16 },
    { id: 24, type: "obstacle", note: "G", string: "A", fret: 10, positionX: 610, positionY: 20, width: 10, height: 24 },
    { id: 25, type: "obstacle", note: "E", string: "A", fret: 7, positionX: 625, positionY: 20, width: 10, height: 32 },
    { id: 26, type: "obstacle", note: "D", string: "A", fret: 5, positionX: 640, positionY: 20, width: 10, height: 40 },
    { id: 27, type: "obstacle", note: "C", string: "A", fret: 3, positionX: 655, positionY: 20, width: 5, height: 48 },
    { id: 28, type: "spike", note: "B", string: "A", fret: 2, positionX: 685, positionY: 20, width: 5, height: 8 },

    // Wiederholung 5 — Abstand 30 px
    { id: 29, type: "obstacle", note: "E", string: "A", fret: 7, positionX: 720, positionY: 20, width: 30, height: 8 },
    { id: 30, type: "obstacle", note: "E", string: "A", fret: 7, positionX: 750, positionY: 20, width: 10, height: 16 },
    { id: 31, type: "obstacle", note: "G", string: "A", fret: 10, positionX: 765, positionY: 20, width: 10, height: 24 },
    { id: 32, type: "obstacle", note: "E", string: "A", fret: 7, positionX: 780, positionY: 20, width: 10, height: 32 },
    { id: 33, type: "obstacle", note: "D", string: "A", fret: 5, positionX: 795, positionY: 20, width: 10, height: 40 },
    { id: 34, type: "obstacle", note: "C", string: "A", fret: 3, positionX: 810, positionY: 20, width: 5, height: 48 },
    { id: 35, type: "spike", note: "B", string: "A", fret: 2, positionX: 840, positionY: 20, width: 5, height: 8 },
  ]
}

export default levelThree