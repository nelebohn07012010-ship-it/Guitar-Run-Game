import type { Level } from "./levelTypes"
import backgroundImage from "../assets/level12_preview.png"
import music from "../assets/Neon Run.mp3"

const levelTwelve: Level = {
  backgroundImage,
  music,
  speed: "fast",
  name: "Snow (5)",
  style: "snow-theme",
  difficulty: "Master",
  group: 3,
  obstacles: [

    { id: 1, type: "obstacle", note: "A", string: "A", fret: 6, positionX: 135, positionY: 20, width: 10, height: 8 },
    { id: 2, type: "obstacle", note: "D", string: "D", fret: 6, positionX: 150, positionY: 20, width: 10, height: 10 },
    { id: 3, type: "obstacle", note: "G", string: "G", fret: 4, positionX: 165, positionY: 20, width: 10, height: 12 },
    { id: 4, type: "obstacle", note: "D", string: "D", fret: 6, positionX: 180, positionY: 20, width: 10, height: 14 },
    { id: 5, type: "obstacle", note: "G", string: "G", fret: 4, positionX: 195, positionY: 20, width: 10, height: 16 },
    { id: 6, type: "obstacle", note: "G", string: "G", fret: 6, positionX: 210, positionY: 20, width: 10, height: 18 },
    { id: 7, type: "obstacle", note: "G", string: "G", fret: 4, positionX: 225, positionY: 25, width: 103, height: 15 },
    { id: 8, type: "spike", note: "D", string: "D", fret: 6, positionX: 240, positionY: 40, width: 5, height: 8 },
    { id: 9, type: "spike", note: "G", string: "G", fret: 4, positionX: 255, positionY: 40, width: 5, height: 8 },
    { id: 10, type: "spike", note: "A", string: "A", fret: 7, positionX: 270, positionY: 40, width: 5, height: 8 },
    { id: 11, type: "spike", note: "D", string: "D", fret: 6, positionX: 285, positionY: 40, width: 5, height: 8 },
    { id: 12, type: "spike", note: "G", string: "G", fret: 4, positionX: 300, positionY: 40, width: 5, height: 8 },
    { id: 13, type: "spike", note: "D", string: "D", fret: 6, positionX: 315, positionY: 40, width: 5, height: 8 },
    { id: 14, type: "obstacle", note: "G", string: "G", fret: 4, positionX: 330, positionY: 20, width: 10, height: 22 },
    { id: 15, type: "obstacle", note: "G", string: "G", fret: 6, positionX: 345, positionY: 20, width: 10, height: 24 },
    { id: 16, type: "obstacle", note: "G", string: "G", fret: 4, positionX: 360, positionY: 20, width: 10, height: 26 },
    { id: 17, type: "obstacle", note: "D", string: "D", fret: 6, positionX: 375, positionY: 20, width: 10, height: 28 },
    { id: 18, type: "obstacle", note: "G", string: "G", fret: 4, positionX: 390, positionY: 20, width: 10, height: 30 },

    { id: 19, type: "obstacle", note: "E", string: "Low E", fret: 7, positionX: 405, positionY: 20, width: 10, height: 32 },
    { id: 20, type: "obstacle", note: "A", string: "A", fret: 6, positionX: 420, positionY: 46, width: 103, height: 8 },
    { id: 21, type: "spike", note: "D", string: "D", fret: 4, positionX: 435, positionY: 54, width: 5, height: 8 },
    { id: 22, type: "spike", note: "A", string: "A", fret: 6, positionX: 450, positionY: 54, width: 5, height: 8 },
    { id: 23, type: "spike", note: "D", string: "D", fret: 4, positionX: 465, positionY: 54, width: 5, height: 8 },
    { id: 24, type: "spike", note: "D", string: "D", fret: 6, positionX: 480, positionY: 54, width: 5, height: 8 },
    { id: 25, type: "spike", note: "D", string: "D", fret: 4, positionX: 495, positionY: 54, width: 5, height: 8 },
    { id: 26, type: "spike", note: "A", string: "A", fret: 6, positionX: 510, positionY: 54, width: 5, height: 8 },
    { id: 27, type: "obstacle", note: "D", string: "D", fret: 4, positionX: 525, positionY: 20, width: 10, height: 56 },
    { id: 28, type: "obstacle", note: "A", string: "A", fret: 7, positionX: 540, positionY: 20, width: 5, height: 52 },
    { id: 29, type: "obstacle", note: "A", string: "A", fret: 9, positionX: 555, positionY: 20, width: 5, height: 48 },
    { id: 30, type: "obstacle", note: "D", string: "D", fret: 8, positionX: 570, positionY: 20, width: 5, height: 44 },
    { id: 31, type: "obstacle", note: "G", string: "G", fret: 6, positionX: 585, positionY: 20, width: 5, height: 40 },
    { id: 32, type: "obstacle", note: "D", string: "D", fret: 8, positionX: 600, positionY: 20, width: 5, height: 36 },
    { id: 33, type: "obstacle", note: "G", string: "G", fret: 6, positionX: 615, positionY: 20, width: 5, height: 32 },
    { id: 34, type: "obstacle", note: "G", string: "G", fret: 8, positionX: 630, positionY: 20, width: 5, height: 28 },
    { id: 35, type: "obstacle", note: "G", string: "G", fret: 6, positionX: 645, positionY: 20, width: 5, height: 24 },
    { id: 36, type: "obstacle", note: "D", string: "D", fret: 8, positionX: 660, positionY: 20, width: 5, height: 20 },
    { id: 37, type: "obstacle", note: "G", string: "G", fret: 6, positionX: 675, positionY: 20, width: 5, height: 16 },

    { id: 38, type: "obstacle", note: "A", string: "A", fret: 6, positionX: 690, positionY: 20, width: 5, height: 12 },

    { id: 39, type: "obstacle", note: "D", string: "D", fret: 6, positionX: 705, positionY: 20, width: 10, height: 8 },
    { id: 40, type: "obstacle", note: "G", string: "G", fret: 4, positionX: 720, positionY: 20, width: 10, height: 10 },
    { id: 41, type: "obstacle", note: "D", string: "D", fret: 6, positionX: 735, positionY: 20, width: 10, height: 12 },
    { id: 42, type: "obstacle", note: "G", string: "G", fret: 4, positionX: 750, positionY: 20, width: 10, height: 14 },
    { id: 43, type: "obstacle", note: "G", string: "G", fret: 6, positionX: 765, positionY: 20, width: 10, height: 16 },
    { id: 44, type: "obstacle", note: "G", string: "G", fret: 4, positionX: 780, positionY: 20, width: 10, height: 18 },
    { id: 45, type: "obstacle", note: "D", string: "D", fret: 6, positionX: 795, positionY: 25, width: 103, height: 15 },
    { id: 46, type: "spike", note: "G", string: "G", fret: 4, positionX: 810, positionY: 40, width: 5, height: 8 },
    { id: 47, type: "spike", note: "A", string: "A", fret: 7, positionX: 825, positionY: 40, width: 5, height: 8 },
    { id: 48, type: "spike", note: "D", string: "D", fret: 6, positionX: 840, positionY: 40, width: 5, height: 8 },
    { id: 49, type: "spike", note: "G", string: "G", fret: 4, positionX: 855, positionY: 40, width: 5, height: 8 },
    { id: 50, type: "spike", note: "D", string: "D", fret: 6, positionX: 870, positionY: 40, width: 5, height: 8 },
    { id: 51, type: "spike", note: "G", string: "G", fret: 4, positionX: 885, positionY: 40, width: 5, height: 8 },
    { id: 52, type: "obstacle", note: "G", string: "G", fret: 6, positionX: 900, positionY: 20, width: 10, height: 22 },
    { id: 53, type: "obstacle", note: "G", string: "G", fret: 4, positionX: 915, positionY: 20, width: 10, height: 24 },
    { id: 54, type: "obstacle", note: "D", string: "D", fret: 6, positionX: 930, positionY: 20, width: 10, height: 26 },
    { id: 55, type: "obstacle", note: "G", string: "G", fret: 4, positionX: 945, positionY: 20, width: 10, height: 28 },

    { id: 56, type: "obstacle", note: "E", string: "Low E", fret: 7, positionX: 960, positionY: 20, width: 10, height: 30 },

    { id: 57, type: "obstacle", note: "A", string: "A", fret: 6, positionX: 975, positionY: 20, width: 10, height: 32 },
    { id: 58, type: "obstacle", note: "D", string: "D", fret: 4, positionX: 990, positionY: 46, width: 103, height: 8 },
    { id: 59, type: "spike", note: "A", string: "A", fret: 6, positionX: 1005, positionY: 54, width: 5, height: 8 },
    { id: 60, type: "spike", note: "D", string: "D", fret: 4, positionX: 1020, positionY: 54, width: 5, height: 8 },
    { id: 61, type: "spike", note: "D", string: "D", fret: 6, positionX: 1035, positionY: 54, width: 5, height: 8 },
    { id: 62, type: "spike", note: "D", string: "D", fret: 4, positionX: 1050, positionY: 54, width: 5, height: 8 },
    { id: 63, type: "spike", note: "A", string: "A", fret: 6, positionX: 1065, positionY: 54, width: 5, height: 8 },

    { id: 64, type: "spike", note: "D", string: "D", fret: 4, positionX: 1080, positionY: 54, width: 5, height: 8 },

    { id: 65, type: "obstacle", note: "E", string: "Low E", fret: 6, positionX: 1095, positionY: 46, width: 103, height: 16 },
    { id: 66, type: "spike", note: "A", string: "A", fret: 4, positionX: 1110, positionY: 62, width: 5, height: 8 },
    { id: 67, type: "spike", note: "D", string: "D", fret: 4, positionX: 1125, positionY: 62, width: 5, height: 8 },
    { id: 68, type: "spike", note: "A", string: "A", fret: 4, positionX: 1140, positionY: 62, width: 5, height: 8 },
    { id: 69, type: "spike", note: "D", string: "D", fret: 4, positionX: 1155, positionY: 62, width: 5, height: 46 },
    { id: 70, type: "spike", note: "D", string: "D", fret: 6, positionX: 1170, positionY: 62, width: 5, height: 48 },
    { id: 71, type: "spike", note: "D", string: "D", fret: 4, positionX: 1185, positionY: 62, width: 5, height: 50 },
    { id: 72, type: "obstacle", note: "A", string: "A", fret: 4, positionX: 1200, positionY: 20, width: 5, height: 52 },
    { id: 73, type: "obstacle", note: "D", string: "D", fret: 4, positionX: 1215, positionY: 20, width: 5, height: 42 }
  ]
}

export default levelTwelve