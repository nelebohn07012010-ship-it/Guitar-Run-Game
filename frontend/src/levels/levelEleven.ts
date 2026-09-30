import type { Level } from "./levelTypes"
import backgroundImage from "../assets/arcade_bckgrnd_startscreen.png"
import music from "../assets/Neon Run.mp3"

const levelEleven: Level = {
  backgroundImage,
  music,
  name: "Overdrive Inferno (lvl. 11)",
  style: "neon-arcade",
  obstacles: [
    // INTRO
    { id: 1, type: "spike", note: "E", string: "Tiefe E", fret: 0, positionX: 70, positionY: 20, width: 5, height: 8 },
    { id: 2, type: "spike", note: "A", string: "Tiefe E", fret: 5, positionX: 130, positionY: 30, width: 5, height: 8 },
    { id: 3, type: "spike", note: "C", string: "A", fret: 3, positionX: 190, positionY: 22, width: 5, height: 8 },
    { id: 4, type: "spike", note: "F", string: "D", fret: 3, positionX: 250, positionY: 35, width: 5, height: 8 },
    { id: 5, type: "obstacle", note: "G", string: "D", fret: 5, positionX: 340, positionY: 28, width: 105, height: 8 },
    { id: 6, type: "coin", positionX: 500, positionY: 46, width: 8, height: 8 },

    // RIFF A
    { id: 7, type: "spike", note: "G", string: "Tiefe E", fret: 3, positionX: 590, positionY: 20, width: 5, height: 8 },
    { id: 8, type: "spike", note: "D", string: "A", fret: 5, positionX: 645, positionY: 34, width: 5, height: 8 },
    { id: 9, type: "spike", note: "G", string: "D", fret: 5, positionX: 700, positionY: 22, width: 5, height: 8 },
    { id: 10, type: "spike", note: "D", string: "G", fret: 7, positionX: 755, positionY: 38, width: 5, height: 8 },
    { id: 11, type: "spike", note: "A", string: "D", fret: 7, positionX: 810, positionY: 20, width: 5, height: 8 },
    { id: 12, type: "spike", note: "C", string: "G", fret: 5, positionX: 865, positionY: 34, width: 5, height: 8 },
    { id: 13, type: "crouch", note: "G", string: "D", fret: 5, positionX: 935, positionY: 32, width: 75, height: 8 },

    // STRING-SKIP KETTE
    { id: 14, type: "spike", note: "E", string: "Tiefe E", fret: 0, positionX: 1040, positionY: 20, width: 5, height: 8 },
    { id: 15, type: "spike", note: "F", string: "D", fret: 3, positionX: 1090, positionY: 34, width: 5, height: 8 },
    { id: 16, type: "spike", note: "D", string: "G", fret: 7, positionX: 1140, positionY: 22, width: 5, height: 8 },
    { id: 17, type: "spike", note: "C", string: "A", fret: 3, positionX: 1190, positionY: 38, width: 5, height: 8 },
    { id: 18, type: "spike", note: "G", string: "D", fret: 5, positionX: 1240, positionY: 20, width: 5, height: 8 },
    { id: 19, type: "spike", note: "A", string: "D", fret: 7, positionX: 1290, positionY: 34, width: 5, height: 8 },
    { id: 20, type: "coin", positionX: 1370, positionY: 47, width: 8, height: 8 },

    // SPEED BURST 1
    { id: 21, type: "spike", note: "A", string: "Tiefe E", fret: 5, positionX: 1450, positionY: 20, width: 5, height: 8 },
    { id: 22, type: "spike", note: "C", string: "A", fret: 3, positionX: 1498, positionY: 32, width: 5, height: 8 },
    { id: 23, type: "spike", note: "F", string: "D", fret: 3, positionX: 1546, positionY: 20, width: 5, height: 8 },
    { id: 24, type: "spike", note: "C", string: "G", fret: 5, positionX: 1594, positionY: 38, width: 5, height: 8 },
    { id: 25, type: "spike", note: "D", string: "G", fret: 7, positionX: 1642, positionY: 24, width: 5, height: 8 },
    { id: 26, type: "spike", note: "A", string: "D", fret: 7, positionX: 1690, positionY: 36, width: 5, height: 8 },
    { id: 27, type: "obstacle", note: "G", string: "D", fret: 5, positionX: 1770, positionY: 28, width: 100, height: 8 },

    // BREAK
    { id: 28, type: "spike", note: "D", string: "A", fret: 5, positionX: 1890, positionY: 20, width: 5, height: 8 },
    { id: 29, type: "crouch", note: "C", string: "G", fret: 5, positionX: 1960, positionY: 36, width: 80, height: 8 },
    { id: 30, type: "coin", positionX: 2050, positionY: 46, width: 8, height: 8 },

    // SPEED BURST 2
    { id: 31, type: "spike", note: "E", string: "Tiefe E", fret: 0, positionX: 2130, positionY: 20, width: 5, height: 8 },
    { id: 32, type: "spike", note: "D", string: "A", fret: 5, positionX: 2180, positionY: 34, width: 5, height: 8 },
    { id: 33, type: "spike", note: "G", string: "D", fret: 5, positionX: 2230, positionY: 22, width: 5, height: 8 },
    { id: 34, type: "spike", note: "D", string: "G", fret: 7, positionX: 2280, positionY: 38, width: 5, height: 8 },
    { id: 35, type: "spike", note: "A", string: "D", fret: 7, positionX: 2330, positionY: 20, width: 5, height: 8 },
    { id: 36, type: "spike", note: "C", string: "G", fret: 5, positionX: 2380, positionY: 34, width: 5, height: 8 },
    { id: 37, type: "spike", note: "F", string: "D", fret: 3, positionX: 2430, positionY: 22, width: 5, height: 8 },
    { id: 38, type: "crouch", note: "A", string: "Tiefe E", fret: 5, positionX: 2500, positionY: 32, width: 80, height: 8 },

    // MITTELTEIL
    { id: 39, type: "obstacle", note: "C", string: "A", fret: 3, positionX: 2630, positionY: 28, width: 130, height: 8 },
    { id: 40, type: "coin", positionX: 2820, positionY: 46, width: 8, height: 8 },

    // FINALE ANLAUF
    { id: 41, type: "spike", note: "G", string: "Tiefe E", fret: 3, positionX: 2910, positionY: 20, width: 5, height: 8 },
    { id: 42, type: "spike", note: "D", string: "A", fret: 5, positionX: 2960, positionY: 34, width: 5, height: 8 },
    { id: 43, type: "spike", note: "G", string: "D", fret: 5, positionX: 3010, positionY: 22, width: 5, height: 8 },
    { id: 44, type: "spike", note: "D", string: "G", fret: 7, positionX: 3060, positionY: 38, width: 5, height: 8 },
    { id: 45, type: "spike", note: "A", string: "D", fret: 7, positionX: 3110, positionY: 20, width: 5, height: 8 },
    { id: 46, type: "spike", note: "C", string: "G", fret: 5, positionX: 3160, positionY: 34, width: 5, height: 8 },

    // END-BURST
    { id: 47, type: "spike", note: "F", string: "D", fret: 3, positionX: 3210, positionY: 22, width: 5, height: 8 },
    { id: 48, type: "spike", note: "C", string: "A", fret: 3, positionX: 3260, positionY: 38, width: 5, height: 8 },
    { id: 49, type: "spike", note: "G", string: "D", fret: 5, positionX: 3310, positionY: 20, width: 5, height: 8 },
    { id: 50, type: "spike", note: "D", string: "G", fret: 7, positionX: 3360, positionY: 34, width: 5, height: 8 },
    { id: 51, type: "crouch", note: "A", string: "D", fret: 7, positionX: 3440, positionY: 32, width: 85, height: 8 },
    { id: 52, type: "coin", positionX: 3650, positionY: 45, width: 8, height: 8 },
  ]
}

export default levelEleven