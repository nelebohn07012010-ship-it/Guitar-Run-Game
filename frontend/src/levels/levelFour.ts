import type { Level } from "./levelTypes"
import backgroundImage from "../assets/level4_preview.png"
import music from "../assets/Neon Run.mp3"

const levelFour: Level = {
  backgroundImage,
  music,
  name: "Country Roads (1)",
  style: "desert-theme",
  difficulty: "Advanced Beginner",
  group: 2,
  obstacles: [
    // Verse 1
    { id: 1, type: "spike", chord: "G", positionX: 100, positionY: 20, width: 5, height: 8 },
    { id: 2, type: "obstacle", chord: "Em", positionX: 250, positionY: 20, width: 140, height: 8 },
    { id: 100, type: "coin", positionX: 300, positionY: 48, width: 8, height: 8 },
    { id: 3, type: "obstacle", chord: "D", positionX: 400, positionY: 28, width: 140, height: 8 },
    { id: 4, type: "obstacle", chord: "C", positionX: 550, positionY: 20, width: 180, height: 8 },
    { id: 5, type: "crouch", chord: "G", positionX: 700, positionY: 38, width: 30, height: 8 },

    // Chorus
    { id: 6, type: "obstacle", chord: "G", positionX: 850, positionY: 20, width: 590, height: 8 },
    { id: 7, type: "spike", chord: "D", positionX: 1000, positionY: 28, width: 5, height: 8 },
    { id: 8, type: "spike", chord: "Em", positionX: 1150, positionY: 28, width: 5, height: 8 },
    { id: 9, type: "spike", chord: "C", positionX: 1300, positionY: 28, width: 5, height: 8 },
    { id: 10, type: "obstacle", chord: "G", positionX: 1450, positionY: 28, width: 140, height: 8 },
    { id: 11, type: "obstacle", chord: "D", positionX: 1600, positionY: 36, width: 140, height: 8 },
    { id: 12, type: "obstacle", chord: "C", positionX: 1750, positionY: 44, width: 170, height: 8 },
    { id: 101, type: "coin", positionX: 1775, positionY: 70, width: 8, height: 8 },
    { id: 13, type: "crouch", chord: "G", positionX: 1900, positionY: 62, width: 20, height: 8 },

    // Verse 2
    { id: 14, type: "spike", chord: "G", positionX: 2050, positionY: 20, width: 5, height: 8 },
    { id: 102, type: "coin", positionX: 2055, positionY: 40, width: 8, height: 8 },
    { id: 15, type: "obstacle", chord: "Em", positionX: 2200, positionY: 20, width: 140, height: 8 },
    { id: 16, type: "obstacle", chord: "D", positionX: 2350, positionY: 28, width: 140, height: 8 },
    { id: 17, type: "obstacle", chord: "C", positionX: 2500, positionY: 20, width: 180, height: 8 },
    { id: 18, type: "crouch", chord: "G", positionX: 2650, positionY: 38, width: 20, height: 8 },

    // Chorus
    { id: 19, type: "obstacle", chord: "G", positionX: 2800, positionY: 20, width: 590, height: 8 },
    { id: 20, type: "spike", chord: "D", positionX: 2950, positionY: 28, width: 5, height: 8 },
    { id: 21, type: "spike", chord: "Em", positionX: 3100, positionY: 28, width: 5, height: 8 },
    { id: 22, type: "spike", chord: "C", positionX: 3250, positionY: 28, width: 5, height: 8 },
    { id: 23, type: "obstacle", chord: "G", positionX: 3400, positionY: 28, width: 140, height: 8 },
    { id: 103, type: "coin", positionX: 3450, positionY: 52, width: 8, height: 8 },
    { id: 24, type: "obstacle", chord: "D", positionX: 3550, positionY: 36, width: 140, height: 8 },
    { id: 25, type: "obstacle", chord: "C", positionX: 3700, positionY: 44, width: 170, height: 8 },
    { id: 26, type: "crouch", chord: "G", positionX: 3850, positionY: 62, width: 20, height: 8 },

    // Bridge
    { id: 27, type: "obstacle", chord: "Em", positionX: 4000, positionY: 20, width: 140, height: 8 },
    { id: 104, type: "coin", positionX: 4050, positionY: 48, width: 8, height: 8 },
    { id: 28, type: "obstacle", chord: "D", positionX: 4150, positionY: 28, width: 140, height: 8 },
    { id: 29, type: "obstacle", chord: "G", positionX: 4300, positionY: 36, width: 140, height: 8 },
    { id: 30, type: "obstacle", chord: "C", positionX: 4450, positionY: 44, width: 140, height: 8 },
    { id: 31, type: "obstacle", chord: "G", positionX: 4600, positionY: 52, width: 580, height: 8 },
    { id: 32, type: "spike", chord: "D", positionX: 4750, positionY: 60, width: 5, height: 8 },
    { id: 33, type: "spike", chord: "Em", positionX: 4900, positionY: 60, width: 5, height: 8 },
    { id: 105, type: "coin", positionX: 4905, positionY: 88, width: 8, height: 8 },
    { id: 34, type: "crouch", chord: "F", positionX: 5050, positionY: 70, width: 20, height: 8 },
    { id: 35, type: "obstacle", chord: "C", positionX: 5200, positionY: 52, width: 130, height: 8 },
    { id: 36, type: "obstacle", chord: "G", positionX: 5350, positionY: 44, width: 165, height: 8 },
    { id: 37, type: "spike", chord: "D", positionX: 5500, positionY: 52, width: 5, height: 8 },

    // Final Chorus – Durchlauf 1
    { id: 38, type: "obstacle", chord: "G", positionX: 5650, positionY: 20, width: 590, height: 8 },
    { id: 39, type: "spike", chord: "D", positionX: 5800, positionY: 28, width: 5, height: 8 },
    { id: 40, type: "spike", chord: "Em", positionX: 5950, positionY: 28, width: 5, height: 8 },
    { id: 106, type: "coin", positionX: 5955, positionY: 56, width: 8, height: 8 },
    { id: 41, type: "spike", chord: "C", positionX: 6100, positionY: 28, width: 5, height: 8 },
    { id: 42, type: "obstacle", chord: "G", positionX: 6250, positionY: 28, width: 140, height: 8 },
    { id: 43, type: "obstacle", chord: "D", positionX: 6400, positionY: 36, width: 140, height: 8 },
    { id: 44, type: "obstacle", chord: "C", positionX: 6550, positionY: 44, width: 170, height: 8 },
    { id: 45, type: "crouch", chord: "G", positionX: 6700, positionY: 62, width: 20, height: 8 },

    // Final Chorus – Durchlauf 2
    { id: 46, type: "obstacle", chord: "G", positionX: 6850, positionY: 20, width: 590, height: 8 },
    { id: 47, type: "spike", chord: "D", positionX: 7000, positionY: 28, width: 5, height: 8 },
    { id: 48, type: "spike", chord: "Em", positionX: 7150, positionY: 28, width: 5, height: 8 },
    { id: 49, type: "spike", chord: "C", positionX: 7300, positionY: 28, width: 5, height: 8 },
    { id: 50, type: "obstacle", chord: "G", positionX: 7450, positionY: 28, width: 140, height: 8 },
    { id: 51, type: "obstacle", chord: "D", positionX: 7600, positionY: 36, width: 140, height: 8 },
    { id: 107, type: "coin", positionX: 7650, positionY: 64, width: 8, height: 8 },
    { id: 52, type: "obstacle", chord: "C", positionX: 7750, positionY: 44, width: 170, height: 8 },
    { id: 53, type: "crouch", chord: "G", positionX: 7900, positionY: 62, width: 20, height: 8 },

    // Outro
    { id: 54, type: "obstacle", chord: "G", positionX: 8050, positionY: 20, width: 140, height: 8 },
    { id: 55, type: "obstacle", chord: "D", positionX: 8200, positionY: 28, width: 140, height: 8 },
    { id: 56, type: "obstacle", chord: "C", positionX: 8350, positionY: 36, width: 160, height: 8 },
    { id: 108, type: "coin", positionX: 8345, positionY: 64, width: 8, height: 8 },
    { id: 57, type: "spike", chord: "G", positionX: 8500, positionY: 44, width: 5, height: 8 },
  ]
}

export default levelFour