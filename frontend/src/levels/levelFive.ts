import type { Level } from "./levelTypes"
import backgroundImage from "../assets/level5_preview.png"
import music from "../assets/Neon Run.mp3"

const levelFive: Level = {
  backgroundImage,
  music,
  name: "Country Roads(2)",
  difficulty: "Intermediate",
  style: "desert-theme",
  group: 2,
  obstacles: [
    // Wiederholung 1
    { id: 1, type: "crouch", chord: "G", positionX: 100, positionY: 30, width: 110, height: 8 },
    { id: 2, type: "crouch", chord: "D", positionX: 230, positionY: 30, width: 80, height: 8 },
    { id: 3, type: "crouch", chord: "Em", positionX: 330, positionY: 30, width: 80, height: 8 },
    { id: 4, type: "crouch", chord: "C", positionX: 430, positionY: 30, width: 80, height: 8 },
    { id: 100, type: "coin", positionX: 515, positionY: 25, width: 8, height: 8 },
    { id: 5, type: "crouch", chord: "G", positionX: 530, positionY: 30, width: 80, height: 8 },
    { id: 6, type: "crouch", chord: "D", positionX: 630, positionY: 30, width: 80, height: 8 },
    { id: 7, type: "crouch", chord: "C", positionX: 730, positionY: 30, width: 80, height: 8 },
    { id: 8, type: "crouch", chord: "G", positionX: 830, positionY: 30, width: 80, height: 8 },

    // Wiederholung 2
    { id: 9, type: "crouch", chord: "G", positionX: 930, positionY: 30, width: 110, height: 8 },
    { id: 10, type: "crouch", chord: "D", positionX: 1060, positionY: 30, width: 80, height: 8 },
    { id: 11, type: "crouch", chord: "Em", positionX: 1160, positionY: 30, width: 80, height: 8 },
    { id: 12, type: "crouch", chord: "C", positionX: 1260, positionY: 30, width: 80, height: 8 },
    { id: 13, type: "crouch", chord: "G", positionX: 1360, positionY: 30, width: 80, height: 8 },
    { id: 14, type: "crouch", chord: "D", positionX: 1460, positionY: 30, width: 80, height: 8 },
    { id: 15, type: "crouch", chord: "C", positionX: 1560, positionY: 30, width: 80, height: 8 },
    { id: 16, type: "crouch", chord: "G", positionX: 1660, positionY: 30, width: 80, height: 8 },
    { id: 101, type: "coin", positionX: 1745, positionY: 25, width: 8, height: 8 },

    // Wiederholung 3
    { id: 17, type: "crouch", chord: "G", positionX: 1760, positionY: 30, width: 110, height: 8 },
    { id: 18, type: "crouch", chord: "D", positionX: 1890, positionY: 30, width: 80, height: 8 },
    { id: 19, type: "crouch", chord: "Em", positionX: 1990, positionY: 30, width: 80, height: 8 },
    { id: 20, type: "crouch", chord: "C", positionX: 2090, positionY: 30, width: 80, height: 8 },
    { id: 102, type: "coin", positionX: 2175, positionY: 25, width: 8, height: 8 },
    { id: 21, type: "crouch", chord: "G", positionX: 2190, positionY: 30, width: 80, height: 8 },
    { id: 22, type: "crouch", chord: "D", positionX: 2290, positionY: 30, width: 80, height: 8 },
    { id: 23, type: "crouch", chord: "C", positionX: 2390, positionY: 30, width: 80, height: 8 },
    { id: 24, type: "crouch", chord: "G", positionX: 2490, positionY: 30, width: 80, height: 8 },

    // Wiederholung 4
    { id: 25, type: "crouch", chord: "G", positionX: 2590, positionY: 30, width: 110, height: 8 },
    { id: 103, type: "coin", positionX: 1705, positionY: 25, width: 8, height: 8 },
    { id: 26, type: "crouch", chord: "D", positionX: 2720, positionY: 30, width: 80, height: 8 },
    { id: 27, type: "crouch", chord: "Em", positionX: 2820, positionY: 30, width: 80, height: 8 },
    { id: 28, type: "crouch", chord: "C", positionX: 2920, positionY: 30, width: 80, height: 8 },
    { id: 29, type: "crouch", chord: "G", positionX: 3020, positionY: 30, width: 80, height: 8 },
    { id: 30, type: "crouch", chord: "D", positionX: 3120, positionY: 30, width: 80, height: 8 },
    { id: 31, type: "crouch", chord: "C", positionX: 3220, positionY: 30, width: 80, height: 8 },
    { id: 32, type: "crouch", chord: "G", positionX: 3320, positionY: 30, width: 80, height: 8 },

    // Wiederholung 5
    { id: 33, type: "crouch", chord: "G", positionX: 3420, positionY: 30, width: 110, height: 8 },
    { id: 34, type: "crouch", chord: "D", positionX: 3550, positionY: 30, width: 80, height: 8 },
    { id: 35, type: "crouch", chord: "Em", positionX: 3650, positionY: 30, width: 80, height: 8 },
    { id: 36, type: "crouch", chord: "C", positionX: 3750, positionY: 30, width: 80, height: 8 },
    { id: 37, type: "crouch", chord: "G", positionX: 3850, positionY: 30, width: 80, height: 8 },
    { id: 38, type: "crouch", chord: "D", positionX: 3950, positionY: 30, width: 80, height: 8 },
    { id: 39, type: "crouch", chord: "C", positionX: 4050, positionY: 30, width: 80, height: 8 },
    { id: 104, type: "coin", positionX: 4135, positionY: 25, width: 8, height: 8 },
    { id: 40, type: "crouch", chord: "G", positionX: 4150, positionY: 30, width: 80, height: 8 },
  ]
}

export default levelFive