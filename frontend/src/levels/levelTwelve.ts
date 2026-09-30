import type { Level } from "./levelTypes"
import backgroundImage from "../assets/arcade_bckgrnd_startscreen.png"
import music from "../assets/Neon Run.mp3"

const levelTwelve: Level = {
  backgroundImage,
  music,
  name: "Final Overload (lvl. 12)",
  style: "neon-arcade",
  obstacles: [
    // =====================================================
    // INTRO – ruhig beginnen
    // =====================================================
    { id: 1, type: "spike", note: "E", string: "Tiefe E", fret: 0, positionX: 70, positionY: 20, width: 5, height: 8 },
    { id: 2, type: "spike", note: "G", string: "Tiefe E", fret: 3, positionX: 135, positionY: 30, width: 5, height: 8 },
    { id: 3, type: "spike", note: "C", string: "A", fret: 3, positionX: 200, positionY: 22, width: 5, height: 8 },
    { id: 4, type: "spike", note: "F", string: "D", fret: 3, positionX: 265, positionY: 35, width: 5, height: 8 },
    { id: 5, type: "obstacle", note: "G", string: "D", fret: 5, positionX: 355, positionY: 28, width: 105, height: 8 },
    { id: 6, type: "coin", positionX: 520, positionY: 46, width: 8, height: 8 },

    // =====================================================
    // RIFF A – steigender String-Wechsel
    // =====================================================
    { id: 7, type: "spike", note: "A", string: "Tiefe E", fret: 5, positionX: 610, positionY: 20, width: 5, height: 8 },
    { id: 8, type: "spike", note: "D", string: "A", fret: 5, positionX: 665, positionY: 34, width: 5, height: 8 },
    { id: 9, type: "spike", note: "G", string: "D", fret: 5, positionX: 720, positionY: 22, width: 5, height: 8 },
    { id: 10, type: "spike", note: "D", string: "G", fret: 7, positionX: 775, positionY: 38, width: 5, height: 8 },
    { id: 11, type: "spike", note: "A", string: "D", fret: 7, positionX: 830, positionY: 20, width: 5, height: 8 },
    { id: 12, type: "spike", note: "C", string: "G", fret: 5, positionX: 885, positionY: 34, width: 5, height: 8 },
    { id: 13, type: "crouch", note: "G", string: "D", fret: 5, positionX: 955, positionY: 32, width: 75, height: 8 },

    // =====================================================
    // SPEED BURST 1
    // =====================================================
    { id: 14, type: "spike", note: "E", string: "Tiefe E", fret: 0, positionX: 1060, positionY: 20, width: 5, height: 8 },
    { id: 15, type: "spike", note: "C", string: "A", fret: 3, positionX: 1110, positionY: 34, width: 5, height: 8 },
    { id: 16, type: "spike", note: "F", string: "D", fret: 3, positionX: 1160, positionY: 22, width: 5, height: 8 },
    { id: 17, type: "spike", note: "C", string: "G", fret: 5, positionX: 1210, positionY: 38, width: 5, height: 8 },
    { id: 18, type: "spike", note: "D", string: "G", fret: 7, positionX: 1260, positionY: 20, width: 5, height: 8 },
    { id: 19, type: "spike", note: "A", string: "D", fret: 7, positionX: 1310, positionY: 34, width: 5, height: 8 },
    { id: 20, type: "coin", positionX: 1390, positionY: 47, width: 8, height: 8 },

    // =====================================================
    // STRING-SKIPPING
    // =====================================================
    { id: 21, type: "spike", note: "G", string: "Tiefe E", fret: 3, positionX: 1480, positionY: 20, width: 5, height: 8 },
    { id: 22, type: "spike", note: "F", string: "D", fret: 3, positionX: 1530, positionY: 36, width: 5, height: 8 },
    { id: 23, type: "spike", note: "D", string: "G", fret: 7, positionX: 1580, positionY: 22, width: 5, height: 8 },
    { id: 24, type: "spike", note: "C", string: "A", fret: 3, positionX: 1630, positionY: 38, width: 5, height: 8 },
    { id: 25, type: "spike", note: "G", string: "D", fret: 5, positionX: 1680, positionY: 20, width: 5, height: 8 },
    { id: 26, type: "obstacle", note: "A", string: "Tiefe E", fret: 5, positionX: 1760, positionY: 28, width: 100, height: 8 },

    // =====================================================
    // ERHOLUNG
    // =====================================================
    { id: 27, type: "spike", note: "D", string: "A", fret: 5, positionX: 1890, positionY: 20, width: 5, height: 8 },
    { id: 28, type: "crouch", note: "C", string: "G", fret: 5, positionX: 1960, positionY: 36, width: 80, height: 8 },
    { id: 29, type: "coin", positionX: 2070, positionY: 46, width: 8, height: 8 },

    // =====================================================
    // SPEED BURST 2 – enger
    // =====================================================
    { id: 30, type: "spike", note: "A", string: "Tiefe E", fret: 5, positionX: 2150, positionY: 20, width: 5, height: 8 },
    { id: 31, type: "spike", note: "C", string: "A", fret: 3, positionX: 2198, positionY: 34, width: 5, height: 8 },
    { id: 32, type: "spike", note: "G", string: "D", fret: 5, positionX: 2246, positionY: 22, width: 5, height: 8 },
    { id: 33, type: "spike", note: "D", string: "G", fret: 7, positionX: 2294, positionY: 38, width: 5, height: 8 },
    { id: 34, type: "spike", note: "A", string: "D", fret: 7, positionX: 2342, positionY: 20, width: 5, height: 8 },
    { id: 35, type: "spike", note: "C", string: "G", fret: 5, positionX: 2390, positionY: 34, width: 5, height: 8 },
    { id: 36, type: "spike", note: "F", string: "D", fret: 3, positionX: 2438, positionY: 22, width: 5, height: 8 },
    { id: 37, type: "crouch", note: "A", string: "Tiefe E", fret: 5, positionX: 2510, positionY: 32, width: 85, height: 8 },

    // =====================================================
    // MITTELTEIL
    // =====================================================
    { id: 38, type: "obstacle", note: "C", string: "A", fret: 3, positionX: 2640, positionY: 28, width: 130, height: 8 },
    { id: 39, type: "spike", note: "G", string: "D", fret: 5, positionX: 2820, positionY: 20, width: 5, height: 8 },
    { id: 40, type: "coin", positionX: 2900, positionY: 46, width: 8, height: 8 },

    // =====================================================
    // FINAL RUN – langer String-Wechsel
    // =====================================================
    { id: 41, type: "spike", note: "E", string: "Tiefe E", fret: 0, positionX: 2990, positionY: 20, width: 5, height: 8 },
    { id: 42, type: "spike", note: "D", string: "A", fret: 5, positionX: 3040, positionY: 34, width: 5, height: 8 },
    { id: 43, type: "spike", note: "G", string: "D", fret: 5, positionX: 3090, positionY: 22, width: 5, height: 8 },
    { id: 44, type: "spike", note: "D", string: "G", fret: 7, positionX: 3140, positionY: 38, width: 5, height: 8 },
    { id: 45, type: "spike", note: "A", string: "D", fret: 7, positionX: 3190, positionY: 20, width: 5, height: 8 },
    { id: 46, type: "spike", note: "C", string: "G", fret: 5, positionX: 3240, positionY: 34, width: 5, height: 8 },

    // =====================================================
    // ENDGAME BURST
    // =====================================================
    { id: 47, type: "spike", note: "F", string: "D", fret: 3, positionX: 3290, positionY: 22, width: 5, height: 8 },
    { id: 48, type: "spike", note: "C", string: "A", fret: 3, positionX: 3340, positionY: 38, width: 5, height: 8 },
    { id: 49, type: "spike", note: "G", string: "D", fret: 5, positionX: 3390, positionY: 20, width: 5, height: 8 },
    { id: 50, type: "spike", note: "D", string: "G", fret: 7, positionX: 3440, positionY: 34, width: 5, height: 8 },
    { id: 51, type: "spike", note: "A", string: "D", fret: 7, positionX: 3490, positionY: 22, width: 5, height: 8 },
    { id: 52, type: "spike", note: "C", string: "G", fret: 5, positionX: 3540, positionY: 38, width: 5, height: 8 },
    { id: 53, type: "crouch", note: "G", string: "D", fret: 5, positionX: 3610, positionY: 32, width: 90, height: 8 },
    { id: 54, type: "spike", note: "A", string: "Tiefe E", fret: 5, positionX: 3670, positionY: 20, width: 5, height: 8 },
    { id: 55, type: "coin", positionX: 3700, positionY: 45, width: 8, height: 8 },
  ]
}

export default levelTwelve