import type { Level } from "./levelTypes"
import backgroundImage from "../assets/arcade_bckgrnd_startscreen.png"
import music from "../assets/Neon Run.mp3"

const levelTen: Level = {
  backgroundImage,
  music,
  name: "Neon Fury (lvl. 10)",
  style: "neon-arcade",
  obstacles: [
    // INTRO
    { id: 1, type: "spike", note: "E", string: "Low E", fret: 0, positionX: 70, positionY: 20, width: 5, height: 8 },
    { id: 2, type: "spike", note: "G", string: "Low E", fret: 3, positionX: 135, positionY: 20, width: 5, height: 8 },
    { id: 3, type: "spike", note: "D", string: "A", fret: 5, positionX: 200, positionY: 20, width: 5, height: 8 },
    { id: 4, type: "spike", note: "G", string: "D", fret: 5, positionX: 265, positionY: 20, width: 5, height: 8 },
    { id: 5, type: "obstacle", note: "C", string: "G", fret: 5, positionX: 355, positionY: 20, width: 100, height: 8 },
    { id: 6, type: "coin", positionX: 510, positionY: 40, width: 8, height: 8 },

    // RIFF A – E → D → G
    { id: 7, type: "spike", note: "A", string: "Low E", fret: 5, positionX: 600, positionY: 20, width: 5, height: 8 },
    { id: 8, type: "spike", note: "F", string: "D", fret: 3, positionX: 655, positionY: 20, width: 5, height: 8 },
    { id: 9, type: "spike", note: "C", string: "G", fret: 5, positionX: 710, positionY: 20, width: 5, height: 8 },
    { id: 10, type: "spike", note: "D", string: "G", fret: 7, positionX: 760, positionY: 20, width: 5, height: 8 },
    { id: 11, type: "spike", note: "G", string: "D", fret: 5, positionX: 810, positionY: 20, width: 5, height: 8 },
    { id: 12, type: "crouch", note: "A", string: "Low E", fret: 5, positionX: 880, positionY: 30, width: 70, height: 8 },

    // STRING-SKIP BURST
    { id: 13, type: "spike", note: "E", string: "Low E", fret: 0, positionX: 985, positionY: 20, width: 5, height: 8 },
    { id: 14, type: "spike", note: "F", string: "D", fret: 3, positionX: 1035, positionY: 20, width: 5, height: 8 },
    { id: 15, type: "spike", note: "D", string: "G", fret: 7, positionX: 1085, positionY: 20, width: 5, height: 8 },
    { id: 16, type: "spike", note: "A", string: "D", fret: 7, positionX: 1135, positionY: 20, width: 5, height: 8 },
    { id: 17, type: "spike", note: "C", string: "A", fret: 3, positionX: 1185, positionY: 20, width: 5, height: 8 },
    { id: 18, type: "coin", positionX: 1270, positionY: 40, width: 8, height: 8 },

    // RIFF B
    { id: 19, type: "spike", note: "G", string: "Low E", fret: 3, positionX: 1360, positionY: 20, width: 5, height: 8 },
    { id: 20, type: "spike", note: "D", string: "A", fret: 5, positionX: 1410, positionY: 20, width: 5, height: 8 },
    { id: 21, type: "spike", note: "A", string: "D", fret: 7, positionX: 1460, positionY: 20, width: 5, height: 8 },
    { id: 22, type: "spike", note: "C", string: "G", fret: 5, positionX: 1510, positionY: 20, width: 5, height: 8 },
    { id: 23, type: "spike", note: "G", string: "D", fret: 5, positionX: 1560, positionY: 20, width: 5, height: 8 },
    { id: 24, type: "obstacle", note: "A", string: "Low E", fret: 5, positionX: 1640, positionY: 20, width: 100, height: 8 },

    // BREAK
    { id: 25, type: "spike", note: "D", string: "A", fret: 5, positionX: 1760, positionY: 20, width: 5, height: 8 },
    { id: 26, type: "crouch", note: "C", string: "G", fret: 5, positionX: 1830, positionY: 30, width: 75, height: 8 },
    { id: 27, type: "spike", note: "A", string: "D", fret: 7, positionX: 1930, positionY: 20, width: 5, height: 8 },
    { id: 28, type: "coin", positionX: 2010, positionY: 40, width: 8, height: 8 },

    // SPEED BURST 1
    { id: 29, type: "spike", note: "A", string: "Low E", fret: 5, positionX: 2095, positionY: 20, width: 5, height: 8 },
    { id: 30, type: "spike", note: "C", string: "A", fret: 3, positionX: 2143, positionY: 20, width: 5, height: 8 },
    { id: 31, type: "spike", note: "G", string: "D", fret: 5, positionX: 2191, positionY: 20, width: 5, height: 8 },
    { id: 32, type: "spike", note: "D", string: "G", fret: 7, positionX: 2239, positionY: 20, width: 5, height: 8 },
    { id: 33, type: "spike", note: "A", string: "D", fret: 7, positionX: 2287, positionY: 20, width: 5, height: 8 },
    { id: 34, type: "spike", note: "C", string: "G", fret: 5, positionX: 2335, positionY: 20, width: 5, height: 8 },
    { id: 35, type: "crouch", note: "D", string: "A", fret: 5, positionX: 2410, positionY: 30, width: 80, height: 8 },

    // MITTELTEIL
    { id: 36, type: "obstacle", note: "G", string: "D", fret: 5, positionX: 2530, positionY: 20, width: 120, height: 8 },
    { id: 37, type: "coin", positionX: 2700, positionY: 40, width: 8, height: 8 },

    // SPEED BURST 2
    { id: 38, type: "spike", note: "E", string: "Low E", fret: 0, positionX: 2790, positionY: 20, width: 5, height: 8 },
    { id: 39, type: "spike", note: "F", string: "D", fret: 3, positionX: 2840, positionY: 20, width: 5, height: 8 },
    { id: 40, type: "spike", note: "C", string: "G", fret: 5, positionX: 2890, positionY: 20, width: 5, height: 8 },
    { id: 41, type: "spike", note: "D", string: "G", fret: 7, positionX: 2940, positionY: 20, width: 5, height: 8 },
    { id: 42, type: "spike", note: "A", string: "D", fret: 7, positionX: 2990, positionY: 20, width: 5, height: 8 },
    { id: 43, type: "spike", note: "C", string: "A", fret: 3, positionX: 3040, positionY: 20, width: 5, height: 8 },

    // FINALE
    { id: 44, type: "spike", note: "G", string: "Low E", fret: 3, positionX: 3120, positionY: 20, width: 5, height: 8 },
    { id: 45, type: "spike", note: "D", string: "A", fret: 5, positionX: 3170, positionY: 20, width: 5, height: 8 },
    { id: 46, type: "spike", note: "G", string: "D", fret: 5, positionX: 3220, positionY: 20, width: 5, height: 8 },
    { id: 47, type: "spike", note: "D", string: "G", fret: 7, positionX: 3270, positionY: 20, width: 5, height: 8 },
    { id: 48, type: "spike", note: "A", string: "D", fret: 7, positionX: 3320, positionY: 20, width: 5, height: 8 },
    { id: 49, type: "spike", note: "C", string: "G", fret: 5, positionX: 3370, positionY: 20, width: 5, height: 8 },
    { id: 50, type: "crouch", note: "G", string: "D", fret: 5, positionX: 3450, positionY: 30, width: 85, height: 8 },
    { id: 51, type: "coin", positionX: 3600, positionY: 40, width: 8, height: 8 },
  ]
}

export default levelTen