import type { Level } from "./levelTypes"
import backgroundImage from "../assets/level6_preview.png"
import music from "../assets/Neon Run.mp3"

const levelSix: Level = {
  backgroundImage,
  music,
  name: "Country Roads(3)",
  style: "desert-theme",
  group: 2,
  obstacles: [
    // Wiederholung 1
    { id: 1, type: "crouch", chord: "G", positionX: 100, positionY: 30, width: 60, height: 8 },
    { id: 2, type: "crouch", chord: "Em", positionX: 180, positionY: 30, width: 60, height: 8 },
    { id: 3, type: "crouch", chord: "D", positionX: 260, positionY: 30, width: 60, height: 8 },
    { id: 4, type: "crouch", chord: "C", positionX: 340, positionY: 30, width: 30, height: 8 },
    { id: 5, type: "crouch", chord: "G", positionX: 380, positionY: 30, width: 120, height: 8 },
    { id: 6, type: "crouch", chord: "G", positionX: 520, positionY: 30, width: 60, height: 8 },
    { id: 7, type: "crouch", chord: "Em", positionX: 600, positionY: 30, width: 60, height: 8 },
    { id: 8, type: "crouch", chord: "D", positionX: 680, positionY: 30, width: 60, height: 8 },
    { id: 9, type: "crouch", chord: "C", positionX: 760, positionY: 30, width: 40, height: 8 },
    { id: 10, type: "crouch", chord: "G", positionX: 810, positionY: 30, width: 30, height: 8 },

    // Wiederholung 2
    { id: 11, type: "crouch", chord: "G", positionX: 860, positionY: 30, width: 60, height: 8 },
    { id: 12, type: "crouch", chord: "Em", positionX: 940, positionY: 30, width: 60, height: 8 },
    { id: 13, type: "crouch", chord: "D", positionX: 1020, positionY: 30, width: 60, height: 8 },
    { id: 14, type: "crouch", chord: "C", positionX: 1100, positionY: 30, width: 30, height: 8 },
    { id: 15, type: "crouch", chord: "G", positionX: 1140, positionY: 30, width: 120, height: 8 },
    { id: 16, type: "crouch", chord: "G", positionX: 1280, positionY: 30, width: 60, height: 8 },
    { id: 17, type: "crouch", chord: "Em", positionX: 1360, positionY: 30, width: 60, height: 8 },
    { id: 18, type: "crouch", chord: "D", positionX: 1440, positionY: 30, width: 60, height: 8 },
    { id: 19, type: "crouch", chord: "C", positionX: 1520, positionY: 30, width: 40, height: 8 },
    { id: 20, type: "crouch", chord: "G", positionX: 1570, positionY: 30, width: 30, height: 8 },

    // Wiederholung 3
    { id: 21, type: "crouch", chord: "G", positionX: 1620, positionY: 30, width: 60, height: 8 },
    { id: 22, type: "crouch", chord: "Em", positionX: 1700, positionY: 30, width: 60, height: 8 },
    { id: 23, type: "crouch", chord: "D", positionX: 1780, positionY: 30, width: 60, height: 8 },
    { id: 24, type: "crouch", chord: "C", positionX: 1860, positionY: 30, width: 30, height: 8 },
    { id: 25, type: "crouch", chord: "G", positionX: 1900, positionY: 30, width: 120, height: 8 },
    { id: 26, type: "crouch", chord: "G", positionX: 2040, positionY: 30, width: 60, height: 8 },
    { id: 27, type: "crouch", chord: "Em", positionX: 2120, positionY: 30, width: 60, height: 8 },
    { id: 28, type: "crouch", chord: "D", positionX: 2200, positionY: 30, width: 60, height: 8 },
    { id: 29, type: "crouch", chord: "C", positionX: 2280, positionY: 30, width: 40, height: 8 },
    { id: 30, type: "crouch", chord: "G", positionX: 2330, positionY: 30, width: 30, height: 8 },

    // Wiederholung 4
    { id: 31, type: "crouch", chord: "G", positionX: 2380, positionY: 30, width: 60, height: 8 },
    { id: 32, type: "crouch", chord: "Em", positionX: 2460, positionY: 30, width: 60, height: 8 },
    { id: 33, type: "crouch", chord: "D", positionX: 2540, positionY: 30, width: 60, height: 8 },
    { id: 34, type: "crouch", chord: "C", positionX: 2620, positionY: 30, width: 30, height: 8 },
    { id: 35, type: "crouch", chord: "G", positionX: 2660, positionY: 30, width: 120, height: 8 },
    { id: 36, type: "crouch", chord: "G", positionX: 2800, positionY: 30, width: 60, height: 8 },
    { id: 37, type: "crouch", chord: "Em", positionX: 2880, positionY: 30, width: 60, height: 8 },
    { id: 38, type: "crouch", chord: "D", positionX: 2960, positionY: 30, width: 60, height: 8 },
    { id: 39, type: "crouch", chord: "C", positionX: 3040, positionY: 30, width: 40, height: 8 },
    { id: 40, type: "crouch", chord: "G", positionX: 3090, positionY: 30, width: 30, height: 8 },

    // Wiederholung 5
    { id: 41, type: "crouch", chord: "G", positionX: 3140, positionY: 30, width: 60, height: 8 },
    { id: 42, type: "crouch", chord: "Em", positionX: 3220, positionY: 30, width: 60, height: 8 },
    { id: 43, type: "crouch", chord: "D", positionX: 3300, positionY: 30, width: 60, height: 8 },
    { id: 44, type: "crouch", chord: "C", positionX: 3380, positionY: 30, width: 30, height: 8 },
    { id: 45, type: "crouch", chord: "G", positionX: 3420, positionY: 30, width: 120, height: 8 },
    { id: 46, type: "crouch", chord: "G", positionX: 3560, positionY: 30, width: 60, height: 8 },
    { id: 47, type: "crouch", chord: "Em", positionX: 3640, positionY: 30, width: 60, height: 8 },
    { id: 48, type: "crouch", chord: "D", positionX: 3720, positionY: 30, width: 60, height: 8 },
    { id: 49, type: "crouch", chord: "C", positionX: 3800, positionY: 30, width: 40, height: 8 },
    { id: 50, type: "crouch", chord: "G", positionX: 3850, positionY: 30, width: 30, height: 8 },
  ]
}

export default levelSix