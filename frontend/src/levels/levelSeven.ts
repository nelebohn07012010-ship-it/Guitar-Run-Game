import type { Level } from "./levelTypes"
import backgroundImage from "../assets/arcade_bckgrnd_startscreen.png"
import music from "../assets/Neon Run.mp3"

const levelSeven: Level = {
  backgroundImage,
  music,
  name: "Thunder run (lvl. 7)",
  style: "neon-arcade",
  obstacles: [

    // =========================
    // INTRO
    // =========================

    {
      id: 1,
      type: "spike",
      note: "E",
      string: "Tiefe E",
      fret: 0,
      positionX: 70,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 2,
      type: "spike",
      note: "G",
      string: "Tiefe E",
      fret: 3,
      positionX: 130,
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
      positionX: 190,
      positionY: 22,
      width: 5,
      height: 8,
    },

    {
      id: 4,
      type: "spike",
      note: "F",
      string: "D",
      fret: 3,
      positionX: 250,
      positionY: 35,
      width: 5,
      height: 8,
    },

    {
      id: 5,
      type: "obstacle",
      note: "G",
      string: "D",
      fret: 5,
      positionX: 340,
      positionY: 28,
      width: 95,
      height: 8,
    },

    {
      id: 6,
      type: "coin",
      positionX: 490,
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
      string: "Tiefe E",
      fret: 5,
      positionX: 580,
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
      positionX: 635,
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
      positionX: 690,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 10,
      type: "spike",
      note: "C",
      string: "G",
      fret: 5,
      positionX: 745,
      positionY: 38,
      width: 5,
      height: 8,
    },

    {
      id: 11,
      type: "crouch",
      note: "G",
      string: "D",
      fret: 5,
      positionX: 815,
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
      positionX: 920,
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
      positionX: 975,
      positionY: 34,
      width: 5,
      height: 8,
    },

    {
      id: 14,
      type: "spike",
      note: "C",
      string: "G",
      fret: 5,
      positionX: 1030,
      positionY: 22,
      width: 5,
      height: 8,
    },

    {
      id: 15,
      type: "coin",
      positionX: 1115,
      positionY: 47,
      width: 8,
      height: 8,
    },


    // =========================
    // RIFF B – SCHNELLE KETTE
    // =========================

    {
      id: 16,
      type: "spike",
      note: "A",
      string: "Tiefe E",
      fret: 5,
      positionX: 1205,
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
      positionX: 1255,
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
      positionX: 1305,
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
      positionX: 1355,
      positionY: 38,
      width: 5,
      height: 8,
    },

    {
      id: 20,
      type: "obstacle",
      note: "A",
      string: "Tiefe E",
      fret: 5,
      positionX: 1435,
      positionY: 28,
      width: 85,
      height: 8,
    },

    {
      id: 21,
      type: "spike",
      note: "C",
      string: "A",
      fret: 3,
      positionX: 1550,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 22,
      type: "spike",
      note: "F",
      string: "D",
      fret: 3,
      positionX: 1600,
      positionY: 34,
      width: 5,
      height: 8,
    },

    {
      id: 23,
      type: "crouch",
      note: "C",
      string: "G",
      fret: 5,
      positionX: 1665,
      positionY: 36,
      width: 65,
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
      positionX: 1760,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 25,
      type: "spike",
      note: "G",
      string: "D",
      fret: 5,
      positionX: 1810,
      positionY: 34,
      width: 5,
      height: 8,
    },

    {
      id: 26,
      type: "spike",
      note: "D",
      string: "G",
      fret: 7,
      positionX: 1860,
      positionY: 22,
      width: 5,
      height: 8,
    },

    {
      id: 27,
      type: "spike",
      note: "E",
      string: "A",
      fret: 7,
      positionX: 1910,
      positionY: 38,
      width: 5,
      height: 8,
    },

    {
      id: 28,
      type: "spike",
      note: "A",
      string: "Tiefe E",
      fret: 5,
      positionX: 1960,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 29,
      type: "crouch",
      note: "D",
      string: "A",
      fret: 5,
      positionX: 2025,
      positionY: 34,
      width: 70,
      height: 8,
    },

    {
      id: 30,
      type: "spike",
      note: "F",
      string: "D",
      fret: 3,
      positionX: 2120,
      positionY: 22,
      width: 5,
      height: 8,
    },

    {
      id: 31,
      type: "spike",
      note: "C",
      string: "G",
      fret: 5,
      positionX: 2170,
      positionY: 38,
      width: 5,
      height: 8,
    },

    {
      id: 32,
      type: "spike",
      note: "G",
      string: "D",
      fret: 5,
      positionX: 2220,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 33,
      type: "spike",
      note: "D",
      string: "G",
      fret: 7,
      positionX: 2270,
      positionY: 34,
      width: 5,
      height: 8,
    },

    {
      id: 34,
      type: "obstacle",
      note: "A",
      string: "Tiefe E",
      fret: 5,
      positionX: 2350,
      positionY: 28,
      width: 105,
      height: 8,
    },

    {
      id: 35,
      type: "coin",
      positionX: 2505,
      positionY: 46,
      width: 8,
      height: 8,
    },


    // =========================
    // BREAK
    // =========================

    {
      id: 36,
      type: "spike",
      note: "E",
      string: "Tiefe E",
      fret: 0,
      positionX: 2600,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 37,
      type: "spike",
      note: "G",
      string: "Tiefe E",
      fret: 3,
      positionX: 2670,
      positionY: 32,
      width: 5,
      height: 8,
    },

    {
      id: 38,
      type: "obstacle",
      note: "C",
      string: "A",
      fret: 3,
      positionX: 2755,
      positionY: 28,
      width: 125,
      height: 8,
    },


    // =========================
    // FINALE
    // =========================

    {
      id: 39,
      type: "spike",
      note: "D",
      string: "A",
      fret: 5,
      positionX: 2915,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 40,
      type: "spike",
      note: "F",
      string: "D",
      fret: 3,
      positionX: 2965,
      positionY: 34,
      width: 5,
      height: 8,
    },

    {
      id: 41,
      type: "spike",
      note: "C",
      string: "G",
      fret: 5,
      positionX: 3015,
      positionY: 22,
      width: 5,
      height: 8,
    },

    {
      id: 42,
      type: "spike",
      note: "G",
      string: "D",
      fret: 5,
      positionX: 3065,
      positionY: 38,
      width: 5,
      height: 8,
    },

    {
      id: 43,
      type: "spike",
      note: "D",
      string: "G",
      fret: 7,
      positionX: 3115,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 44,
      type: "crouch",
      note: "A",
      string: "D",
      fret: 7,
      positionX: 3180,
      positionY: 34,
      width: 80,
      height: 8,
    },

    {
      id: 45,
      type: "spike",
      note: "C",
      string: "G",
      fret: 5,
      positionX: 3280,
      positionY: 22,
      width: 5,
      height: 8,
    },

    {
      id: 46,
      type: "spike",
      note: "G",
      string: "D",
      fret: 5,
      positionX: 3330,
      positionY: 36,
      width: 5,
      height: 8,
    },

    {
      id: 47,
      type: "spike",
      note: "A",
      string: "D",
      fret: 7,
      positionX: 3380,
      positionY: 24,
      width: 5,
      height: 8,
    },

    {
      id: 48,
      type: "coin",
      positionX: 3480,
      positionY: 45,
      width: 8,
      height: 8,
    },

  ]
}

export default levelSeven