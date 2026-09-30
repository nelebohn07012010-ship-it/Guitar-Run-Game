import type { Level } from "./levelTypes"
import backgroundImage from "../assets/arcade_bckgrnd_startscreen.png"
import music from "../assets/Neon Run.mp3"

const levelSix: Level = {
  backgroundImage,
  music,
  name: "Iron Pulse (lvl. 6)",
  style: "neon-arcade",
  obstacles: [

    // =========================
    // INTRO
    // =========================

    {
      id: 1,
      type: "spike",
      note: "E",
      string: "Low E",
      fret: 0,
      positionX: 70,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 2,
      type: "spike",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 135,
      positionY: 30,
      width: 5,
      height: 8,
    },

    {
      id: 3,
      type: "spike",
      note: "C",
      string: "A",
      fret: 3,
      positionX: 200,
      positionY: 22,
      width: 5,
      height: 8,
    },

    {
      id: 4,
      type: "spike",
      note: "D",
      string: "A",
      fret: 5,
      positionX: 265,
      positionY: 35,
      width: 5,
      height: 8,
    },

    {
      id: 5,
      type: "obstacle",
      note: "F",
      string: "D",
      fret: 3,
      positionX: 360,
      positionY: 28,
      width: 100,
      height: 8,
    },

    {
      id: 6,
      type: "coin",
      positionX: 510,
      positionY: 46,
      width: 8,
      height: 8,
    },


    // =========================
    // RIFF A
    // =========================

    {
      id: 7,
      type: "spike",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 600,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 8,
      type: "spike",
      note: "C",
      string: "A",
      fret: 3,
      positionX: 655,
      positionY: 32,
      width: 5,
      height: 8,
    },

    {
      id: 9,
      type: "spike",
      note: "F",
      string: "D",
      fret: 3,
      positionX: 710,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 10,
      type: "spike",
      note: "G",
      string: "D",
      fret: 5,
      positionX: 765,
      positionY: 36,
      width: 5,
      height: 8,
    },

    {
      id: 11,
      type: "crouch",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 835,
      positionY: 32,
      width: 70,
      height: 8,
    },

    {
      id: 12,
      type: "spike",
      note: "D",
      string: "A",
      fret: 5,
      positionX: 940,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 13,
      type: "spike",
      note: "G",
      string: "D",
      fret: 5,
      positionX: 995,
      positionY: 35,
      width: 5,
      height: 8,
    },

    {
      id: 14,
      type: "spike",
      note: "A",
      string: "D",
      fret: 7,
      positionX: 1050,
      positionY: 22,
      width: 5,
      height: 8,
    },

    {
      id: 15,
      type: "coin",
      positionX: 1135,
      positionY: 47,
      width: 8,
      height: 8,
    },


    // =========================
    // RIFF B – G-SAITE
    // =========================

    {
      id: 16,
      type: "spike",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 1225,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 17,
      type: "spike",
      note: "D",
      string: "A",
      fret: 5,
      positionX: 1280,
      positionY: 34,
      width: 5,
      height: 8,
    },

    {
      id: 18,
      type: "spike",
      note: "G",
      string: "D",
      fret: 5,
      positionX: 1335,
      positionY: 22,
      width: 5,
      height: 8,
    },

    {
      id: 19,
      type: "spike",
      note: "C",
      string: "G",
      fret: 5,
      positionX: 1390,
      positionY: 38,
      width: 5,
      height: 8,
    },

    {
      id: 20,
      type: "obstacle",
      note: "D",
      string: "A",
      fret: 5,
      positionX: 1475,
      positionY: 28,
      width: 90,
      height: 8,
    },

    {
      id: 21,
      type: "spike",
      note: "E",
      string: "A",
      fret: 7,
      positionX: 1590,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 22,
      type: "crouch",
      note: "G",
      string: "D",
      fret: 5,
      positionX: 1645,
      positionY: 35,
      width: 70,
      height: 8,
    },

    {
      id: 23,
      type: "spike",
      note: "C",
      string: "G",
      fret: 5,
      positionX: 1750,
      positionY: 22,
      width: 5,
      height: 8,
    },


    // =========================
    // STEIGERUNG
    // =========================

    {
      id: 24,
      type: "spike",
      note: "A",
      string: "D",
      fret: 7,
      positionX: 1805,
      positionY: 38,
      width: 5,
      height: 8,
    },

    {
      id: 25,
      type: "spike",
      note: "G",
      string: "D",
      fret: 5,
      positionX: 1860,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 26,
      type: "spike",
      note: "C",
      string: "G",
      fret: 5,
      positionX: 1915,
      positionY: 34,
      width: 5,
      height: 8,
    },

    {
      id: 27,
      type: "spike",
      note: "D",
      string: "G",
      fret: 7,
      positionX: 1970,
      positionY: 22,
      width: 5,
      height: 8,
    },

    {
      id: 28,
      type: "crouch",
      note: "A",
      string: "A",
      fret: 0,
      positionX: 2035,
      positionY: 36,
      width: 75,
      height: 8,
    },

    {
      id: 29,
      type: "spike",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 2135,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 30,
      type: "spike",
      note: "C",
      string: "A",
      fret: 3,
      positionX: 2190,
      positionY: 32,
      width: 5,
      height: 8,
    },

    {
      id: 31,
      type: "spike",
      note: "F",
      string: "D",
      fret: 3,
      positionX: 2245,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 32,
      type: "spike",
      note: "C",
      string: "G",
      fret: 5,
      positionX: 2300,
      positionY: 38,
      width: 5,
      height: 8,
    },

    {
      id: 33,
      type: "obstacle",
      note: "G",
      string: "D",
      fret: 5,
      positionX: 2380,
      positionY: 28,
      width: 100,
      height: 8,
    },

    {
      id: 34,
      type: "coin",
      positionX: 2535,
      positionY: 46,
      width: 8,
      height: 8,
    },


    // =========================
    // BREAK
    // =========================

    {
      id: 35,
      type: "spike",
      note: "E",
      string: "Low E",
      fret: 0,
      positionX: 2630,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 36,
      type: "spike",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 2705,
      positionY: 32,
      width: 5,
      height: 8,
    },

    {
      id: 37,
      type: "obstacle",
      note: "D",
      string: "A",
      fret: 5,
      positionX: 2790,
      positionY: 28,
      width: 125,
      height: 8,
    },


    // =========================
    // FINALE
    // =========================

    {
      id: 38,
      type: "spike",
      note: "C",
      string: "A",
      fret: 3,
      positionX: 2950,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 39,
      type: "spike",
      note: "F",
      string: "D",
      fret: 3,
      positionX: 3005,
      positionY: 34,
      width: 5,
      height: 8,
    },

    {
      id: 40,
      type: "spike",
      note: "G",
      string: "D",
      fret: 5,
      positionX: 3060,
      positionY: 22,
      width: 5,
      height: 8,
    },

    {
      id: 41,
      type: "spike",
      note: "C",
      string: "G",
      fret: 5,
      positionX: 3115,
      positionY: 38,
      width: 5,
      height: 8,
    },

    {
      id: 42,
      type: "crouch",
      note: "A",
      string: "D",
      fret: 7,
      positionX: 3185,
      positionY: 32,
      width: 80,
      height: 8,
    },

    {
      id: 43,
      type: "spike",
      note: "D",
      string: "A",
      fret: 5,
      positionX: 3290,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 44,
      type: "spike",
      note: "G",
      string: "D",
      fret: 5,
      positionX: 3345,
      positionY: 34,
      width: 5,
      height: 8,
    },

    {
      id: 45,
      type: "spike",
      note: "D",
      string: "G",
      fret: 7,
      positionX: 3400,
      positionY: 22,
      width: 5,
      height: 8,
    },

    {
      id: 46,
      type: "coin",
      positionX: 3490,
      positionY: 45,
      width: 8,
      height: 8,
    },

  ]
}

export default levelSix