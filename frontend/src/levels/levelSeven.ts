import type { Level } from "./levelTypes"
import backgroundImage from "../assets/level7_preview.png"
import music from "../assets/Neon Run.mp3"

const levelSeven: Level = {
  backgroundImage,
  music,
  name: "Country Roads (4)",
  style: "desert-theme",
  group: 2,
  obstacles: [
    // Verse 1
    { id: 1, type: "crouch", chord: "G", positionX: 100, positionY: 30, width: 60, height: 8 },
    { id: 2, type: "crouch", chord: "Em", positionX: 180, positionY: 30, width: 60, height: 8 },
    { id: 3, type: "crouch", chord: "D", positionX: 260, positionY: 30, width: 60, height: 8 },
    { id: 4, type: "crouch", chord: "C", positionX: 340, positionY: 30, width: 30, height: 8 },
    { id: 5, type: "crouch", chord: "G", positionX: 385, positionY: 30, width: 120, height: 8 },
    { id: 6, type: "crouch", chord: "G", positionX: 525, positionY: 30, width: 60, height: 8 },
    { id: 7, type: "crouch", chord: "Em", positionX: 605, positionY: 30, width: 60, height: 8 },
    { id: 8, type: "crouch", chord: "D", positionX: 685, positionY: 30, width: 60, height: 8 },
    { id: 9, type: "crouch", chord: "C", positionX: 765, positionY: 30, width: 40, height: 8 },
    { id: 10, type: "crouch", chord: "G", positionX: 820, positionY: 30, width: 30, height: 8 },

    // Chorus 1
    { id: 11, type: "crouch", chord: "G", positionX: 870, positionY: 30, width: 110, height: 8 },
    { id: 12, type: "crouch", chord: "D", positionX: 1000, positionY: 30, width: 80, height: 8 },
    { id: 13, type: "crouch", chord: "Em", positionX: 1100, positionY: 30, width: 80, height: 8 },
    { id: 14, type: "crouch", chord: "C", positionX: 1200, positionY: 30, width: 80, height: 8 },
    { id: 15, type: "crouch", chord: "G", positionX: 1300, positionY: 30, width: 80, height: 8 },
    { id: 16, type: "crouch", chord: "D", positionX: 1400, positionY: 30, width: 80, height: 8 },
    { id: 17, type: "crouch", chord: "C", positionX: 1500, positionY: 30, width: 80, height: 8 },
    { id: 18, type: "crouch", chord: "G", positionX: 1600, positionY: 30, width: 80, height: 8 },

    // Verse 2
    { id: 19, type: "crouch", chord: "G", positionX: 1700, positionY: 30, width: 60, height: 8 },
    { id: 20, type: "crouch", chord: "Em", positionX: 1780, positionY: 30, width: 60, height: 8 },
    { id: 21, type: "crouch", chord: "D", positionX: 1860, positionY: 30, width: 60, height: 8 },
    { id: 22, type: "crouch", chord: "C", positionX: 1940, positionY: 30, width: 30, height: 8 },
    { id: 23, type: "crouch", chord: "G", positionX: 1985, positionY: 30, width: 120, height: 8 },
    { id: 24, type: "crouch", chord: "G", positionX: 2125, positionY: 30, width: 60, height: 8 },
    { id: 25, type: "crouch", chord: "Em", positionX: 2205, positionY: 30, width: 60, height: 8 },
    { id: 26, type: "crouch", chord: "D", positionX: 2285, positionY: 30, width: 60, height: 8 },
    { id: 27, type: "crouch", chord: "C", positionX: 2365, positionY: 30, width: 40, height: 8 },
    { id: 28, type: "crouch", chord: "G", positionX: 2420, positionY: 30, width: 30, height: 8 },

    // Chorus 2
    { id: 29, type: "crouch", chord: "G", positionX: 2470, positionY: 30, width: 110, height: 8 },
    { id: 30, type: "crouch", chord: "D", positionX: 2600, positionY: 30, width: 80, height: 8 },
    { id: 31, type: "crouch", chord: "Em", positionX: 2700, positionY: 30, width: 80, height: 8 },
    { id: 32, type: "crouch", chord: "C", positionX: 2800, positionY: 30, width: 80, height: 8 },
    { id: 33, type: "crouch", chord: "G", positionX: 2900, positionY: 30, width: 80, height: 8 },
    { id: 34, type: "crouch", chord: "D", positionX: 3000, positionY: 30, width: 80, height: 8 },
    { id: 35, type: "crouch", chord: "C", positionX: 3100, positionY: 30, width: 80, height: 8 },
    { id: 36, type: "crouch", chord: "G", positionX: 3200, positionY: 30, width: 80, height: 8 },

    // Bridge – vorläufige Akkordfolge
    { id: 37, type: "crouch", chord: "Em", positionX: 3300, positionY: 30, width: 60, height: 8 },
    { id: 38, type: "crouch", chord: "D", positionX: 3380, positionY: 30, width: 60, height: 8 },
    { id: 39, type: "crouch", chord: "G", positionX: 3460, positionY: 30, width: 60, height: 8 },
    { id: 40, type: "crouch", chord: "C", positionX: 3540, positionY: 30, width: 60, height: 8 },
    { id: 41, type: "crouch", chord: "G", positionX: 3620, positionY: 30, width: 60, height: 8 },
    { id: 42, type: "crouch", chord: "D", positionX: 3700, positionY: 30, width: 60, height: 8 },
    { id: 43, type: "crouch", chord: "Em", positionX: 3780, positionY: 30, width: 60, height: 8 },
    { id: 44, type: "crouch", chord: "F", positionX: 3860, positionY: 30, width: 60, height: 8 },
    { id: 45, type: "crouch", chord: "C", positionX: 3940, positionY: 30, width: 60, height: 8 },
    { id: 46, type: "crouch", chord: "G", positionX: 4020, positionY: 30, width: 60, height: 8 },
    { id: 47, type: "crouch", chord: "D", positionX: 4100, positionY: 30, width: 60, height: 8 },

    // Chorus 3
    { id: 48, type: "crouch", chord: "G", positionX: 4180, positionY: 30, width: 110, height: 8 },
    { id: 49, type: "crouch", chord: "D", positionX: 4310, positionY: 30, width: 80, height: 8 },
    { id: 50, type: "crouch", chord: "Em", positionX: 4410, positionY: 30, width: 80, height: 8 },
    { id: 51, type: "crouch", chord: "C", positionX: 4510, positionY: 30, width: 80, height: 8 },
    { id: 52, type: "crouch", chord: "G", positionX: 4610, positionY: 30, width: 80, height: 8 },
    { id: 53, type: "crouch", chord: "D", positionX: 4710, positionY: 30, width: 80, height: 8 },
    { id: 54, type: "crouch", chord: "C", positionX: 4810, positionY: 30, width: 80, height: 8 },
    { id: 55, type: "crouch", chord: "G", positionX: 4910, positionY: 30, width: 80, height: 8 },

    // Chorus 4
    { id: 56, type: "crouch", chord: "G", positionX: 5010, positionY: 30, width: 110, height: 8 },
    { id: 57, type: "crouch", chord: "D", positionX: 5140, positionY: 30, width: 80, height: 8 },
    { id: 58, type: "crouch", chord: "Em", positionX: 5240, positionY: 30, width: 80, height: 8 },
    { id: 59, type: "crouch", chord: "C", positionX: 5340, positionY: 30, width: 80, height: 8 },
    { id: 60, type: "crouch", chord: "G", positionX: 5440, positionY: 30, width: 80, height: 8 },
    { id: 61, type: "crouch", chord: "D", positionX: 5540, positionY: 30, width: 80, height: 8 },
    { id: 62, type: "crouch", chord: "C", positionX: 5640, positionY: 30, width: 80, height: 8 },
    { id: 63, type: "crouch", chord: "G", positionX: 5740, positionY: 30, width: 80, height: 8 },

    // Outro – vorläufig
    { id: 64, type: "crouch", chord: "G", positionX: 5840, positionY: 30, width: 60, height: 8 },
    { id: 65, type: "crouch", chord: "D", positionX: 5920, positionY: 30, width: 60, height: 8 },
    { id: 66, type: "crouch", chord: "C", positionX: 6000, positionY: 30, width: 60, height: 8 },
    { id: 67, type: "crouch", chord: "G", positionX: 6080, positionY: 30, width: 120, height: 8 }
  ]
}

export default levelSeven