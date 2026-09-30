import type { Level } from "./levelTypes"
import backgroundImage from "../assets/arcade_bckgrnd_startscreen.png"
import music from "../assets/Neon Run.mp3"

const levelNine: Level = {
  backgroundImage,
  music,
  name: "Razor Storm (lvl. 9)",
  style: "neon-arcade",
  obstacles: [
    // INTRO – kontrolliert
    { id: 1, type: "spike", note: "E", string: "Tiefe E", fret: 0, positionX: 70, positionY: 20, width: 5, height: 8 },
    { id: 2, type: "spike", note: "G", string: "Tiefe E", fret: 3, positionX: 130, positionY: 30, width: 5, height: 8 },
    { id: 3, type: "spike", note: "C", string: "A", fret: 3, positionX: 195, positionY: 22, width: 5, height: 8 },
    { id: 4, type: "spike", note: "F", string: "D", fret: 3, positionX: 260, positionY: 35, width: 5, height: 8 },
    { id: 5, type: "obstacle", note: "G", string: "D", fret: 5, positionX: 350, positionY: 28, width: 100, height: 8 },
    { id: 6, type: "coin", positionX: 505, positionY: 46, width: 8, height: 8 },

    // RIFF A – schneller String-Wechsel
    { id: 7, type: "spike", note: "A", string: "Tiefe E", fret: 5, positionX: 600, positionY: 20, width: 5, height: 8 },
    { id: 8, type: "spike", note: "D", string: "A", fret: 5, positionX: 655, positionY: 32, width: 5, height: 8 },
    { id: 9, type: "spike", note: "G", string: "D", fret: 5, positionX: 710, positionY: 20, width: 5, height: 8 },
    { id: 10, type: "spike", note: "C", string: "G", fret: 5, positionX: 760, positionY: 38, width: 5, height: 8 },
    { id: 11, type: "spike", note: "D", string: "G", fret: 7, positionX: 810, positionY: 24, width: 5, height: 8 },
    { id: 12, type: "crouch", note: "G", string: "D", fret: 5, positionX: 875, positionY: 34, width: 70, height: 8 },

    // RIFF B – größerer Saitensprung
    { id: 13, type: "spike", note: "E", string: "Tiefe E", fret: 0, positionX: 980, positionY: 20, width: 5, height: 8 },
    { id: 14, type: "spike", note: "F", string: "D", fret: 3, positionX: 1030, positionY: 34, width: 5, height: 8 },
    { id: 15, type: "spike", note: "C", string: "G", fret: 5, positionX: 1080, positionY: 22, width: 5, height: 8 },
    { id: 16, type: "spike", note: "A", string: "D", fret: 7, positionX: 1130, positionY: 38, width: 5, height: 8 },
    { id: 17, type: "spike", note: "G", string: "D", fret: 5, positionX: 1180, positionY: 20, width: 5, height: 8 },
    { id: 18, type: "coin", positionX: 1260, positionY: 47, width: 8, height: 8 },

    // SPEED BURST 1
    { id: 19, type: "spike", note: "A", string: "Tiefe E", fret: 5, positionX: 1350, positionY: 20, width: 5, height: 8 },
    { id: 20, type: "spike", note: "C", string: "A", fret: 3, positionX: 1398, positionY: 32, width: 5, height: 8 },
    { id: 21, type: "spike", note: "F", string: "D", fret: 3, positionX: 1446, positionY: 20, width: 5, height: 8 },
    { id: 22, type: "spike", note: "C", string: "G", fret: 5, positionX: 1494, positionY: 38, width: 5, height: 8 },
    { id: 23, type: "spike", note: "D", string: "G", fret: 7, positionX: 1542, positionY: 24, width: 5, height: 8 },
    { id: 24, type: "obstacle", note: "A", string: "Tiefe E", fret: 5, positionX: 1625, positionY: 30, width: 95, height: 8 },

    // MITTELTEIL – etwas Luft
    { id: 25, type: "spike", note: "D", string: "A", fret: 5, positionX: 1740, positionY: 20, width: 5, height: 8 },
    { id: 26, type: "spike", note: "G", string: "D", fret: 5, positionX: 1810, positionY: 34, width: 5, height: 8 },
    { id: 27, type: "crouch", note: "C", string: "G", fret: 5, positionX: 1880, positionY: 36, width: 75, height: 8 },
    { id: 28, type: "spike", note: "A", string: "D", fret: 7, positionX: 1980, positionY: 22, width: 5, height: 8 },
    { id: 29, type: "spike", note: "E", string: "A", fret: 7, positionX: 2040, positionY: 38, width: 5, height: 8 },
    { id: 30, type: "coin", positionX: 2120, positionY: 46, width: 8, height: 8 },

    // SPEED BURST 2 – noch enger
    { id: 31, type: "spike", note: "G", string: "Tiefe E", fret: 3, positionX: 2205, positionY: 20, width: 5, height: 8 },
    { id: 32, type: "spike", note: "C", string: "A", fret: 3, positionX: 2255, positionY: 32, width: 5, height: 8 },
    { id: 33, type: "spike", note: "G", string: "D", fret: 5, positionX: 2305, positionY: 20, width: 5, height: 8 },
    { id: 34, type: "spike", note: "D", string: "G", fret: 7, positionX: 2355, positionY: 36, width: 5, height: 8 },
    { id: 35, type: "spike", note: "A", string: "D", fret: 7, positionX: 2405, positionY: 22, width: 5, height: 8 },
    { id: 36, type: "spike", note: "C", string: "G", fret: 5, positionX: 2455, positionY: 38, width: 5, height: 8 },
    { id: 37, type: "crouch", note: "D", string: "A", fret: 5, positionX: 2530, positionY: 34, width: 80, height: 8 },

    // BREAK
    { id: 38, type: "obstacle", note: "A", string: "Tiefe E", fret: 5, positionX: 2660, positionY: 28, width: 130, height: 8 },
    { id: 39, type: "coin", positionX: 2850, positionY: 46, width: 8, height: 8 },

    // FINALE – anspruchsvollste Passage
    { id: 40, type: "spike", note: "E", string: "Tiefe E", fret: 0, positionX: 2940, positionY: 20, width: 5, height: 8 },
    { id: 41, type: "spike", note: "D", string: "A", fret: 5, positionX: 2990, positionY: 34, width: 5, height: 8 },
    { id: 42, type: "spike", note: "G", string: "D", fret: 5, positionX: 3040, positionY: 22, width: 5, height: 8 },
    { id: 43, type: "spike", note: "D", string: "G", fret: 7, positionX: 3090, positionY: 38, width: 5, height: 8 },
    { id: 44, type: "spike", note: "A", string: "D", fret: 7, positionX: 3140, positionY: 20, width: 5, height: 8 },
    { id: 45, type: "spike", note: "C", string: "G", fret: 5, positionX: 3190, positionY: 34, width: 5, height: 8 },
    { id: 46, type: "spike", note: "F", string: "D", fret: 3, positionX: 3240, positionY: 22, width: 5, height: 8 },
    { id: 47, type: "spike", note: "C", string: "A", fret: 3, positionX: 3290, positionY: 38, width: 5, height: 8 },
    { id: 48, type: "crouch", note: "G", string: "D", fret: 5, positionX: 3360, positionY: 32, width: 80, height: 8 },
    { id: 49, type: "spike", note: "A", string: "Tiefe E", fret: 5, positionX: 3460, positionY: 20, width: 5, height: 8 },
    { id: 50, type: "coin", positionX: 3550, positionY: 45, width: 8, height: 8 },
  ]
}

export default levelNine