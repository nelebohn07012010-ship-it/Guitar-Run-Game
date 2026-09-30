import type { Level } from "./levelTypes"
import backgroundImage from "../assets/arcade_bckgrnd_startscreen.png"
import music from "../assets/Neon Run.mp3"

const levelFour: Level = {
  backgroundImage,
  music,
  name: "Steel Runner (lvl. 4)",
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
      positionX: 140,
      positionY: 30,
      width: 5,
      height: 8,
    },

    {
      id: 3,
      type: "spike",
      note: "A",
      string: "Tiefe E",
      fret: 5,
      positionX: 210,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 4,
      type: "obstacle",
      note: "C",
      string: "A",
      fret: 3,
      positionX: 310,
      positionY: 28,
      width: 90,
      height: 8,
    },

    {
      id: 5,
      type: "coin",
      positionX: 450,
      positionY: 45,
      width: 8,
      height: 8,
    },


    // =========================
    // RIFF A
    // =========================

    {
      id: 6,
      type: "spike",
      note: "A",
      string: "Tiefe E",
      fret: 5,
      positionX: 545,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 7,
      type: "spike",
      note: "C",
      string: "A",
      fret: 3,
      positionX: 610,
      positionY: 34,
      width: 5,
      height: 8,
    },

    {
      id: 8,
      type: "spike",
      note: "D",
      string: "A",
      fret: 5,
      positionX: 675,
      positionY: 22,
      width: 5,
      height: 8,
    },

    {
      id: 9,
      type: "spike",
      note: "E",
      string: "A",
      fret: 7,
      positionX: 735,
      positionY: 38,
      width: 5,
      height: 8,
    },

    {
      id: 10,
      type: "crouch",
      note: "A",
      string: "Tiefe E",
      fret: 5,
      positionX: 810,
      positionY: 32,
      width: 70,
      height: 8,
    },

    {
      id: 11,
      type: "spike",
      note: "D",
      string: "A",
      fret: 5,
      positionX: 930,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 12,
      type: "coin",
      positionX: 1015,
      positionY: 46,
      width: 8,
      height: 8,
    },


    // =========================
    // RIFF B – ERSTER D-SAITE-WECHSEL
    // =========================

    {
      id: 13,
      type: "spike",
      note: "A",
      string: "Tiefe E",
      fret: 5,
      positionX: 1100,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 14,
      type: "spike",
      note: "D",
      string: "A",
      fret: 5,
      positionX: 1160,
      positionY: 32,
      width: 5,
      height: 8,
    },

    {
      id: 15,
      type: "spike",
      note: "F",
      string: "D",
      fret: 3,
      positionX: 1220,
      positionY: 22,
      width: 5,
      height: 8,
    },

    {
      id: 16,
      type: "spike",
      note: "G",
      string: "D",
      fret: 5,
      positionX: 1280,
      positionY: 38,
      width: 5,
      height: 8,
    },

    {
      id: 17,
      type: "obstacle",
      note: "A",
      string: "Tiefe E",
      fret: 5,
      positionX: 1360,
      positionY: 28,
      width: 85,
      height: 8,
    },

    {
      id: 18,
      type: "spike",
      note: "C",
      string: "A",
      fret: 3,
      positionX: 1480,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 19,
      type: "crouch",
      note: "D",
      string: "A",
      fret: 5,
      positionX: 1545,
      positionY: 36,
      width: 75,
      height: 8,
    },

    {
      id: 20,
      type: "spike",
      note: "G",
      string: "D",
      fret: 5,
      positionX: 1650,
      positionY: 25,
      width: 5,
      height: 8,
    },


    // =========================
    // STEIGERUNG
    // =========================

    {
      id: 21,
      type: "spike",
      note: "A",
      string: "Tiefe E",
      fret: 5,
      positionX: 1710,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 22,
      type: "spike",
      note: "C",
      string: "A",
      fret: 3,
      positionX: 1765,
      positionY: 32,
      width: 5,
      height: 8,
    },

    {
      id: 23,
      type: "spike",
      note: "F",
      string: "D",
      fret: 3,
      positionX: 1820,
      positionY: 22,
      width: 5,
      height: 8,
    },

    {
      id: 24,
      type: "spike",
      note: "G",
      string: "D",
      fret: 5,
      positionX: 1875,
      positionY: 38,
      width: 5,
      height: 8,
    },

    {
      id: 25,
      type: "crouch",
      note: "A",
      string: "Tiefe E",
      fret: 5,
      positionX: 1940,
      positionY: 30,
      width: 65,
      height: 8,
    },

    {
      id: 26,
      type: "spike",
      note: "D",
      string: "A",
      fret: 5,
      positionX: 2040,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 27,
      type: "spike",
      note: "E",
      string: "A",
      fret: 7,
      positionX: 2095,
      positionY: 34,
      width: 5,
      height: 8,
    },

    {
      id: 28,
      type: "spike",
      note: "A",
      string: "D",
      fret: 7,
      positionX: 2150,
      positionY: 22,
      width: 5,
      height: 8,
    },

    {
      id: 29,
      type: "obstacle",
      note: "G",
      string: "D",
      fret: 5,
      positionX: 2230,
      positionY: 32,
      width: 95,
      height: 8,
    },

    {
      id: 30,
      type: "coin",
      positionX: 2380,
      positionY: 46,
      width: 8,
      height: 8,
    },


    // =========================
    // BREAK
    // =========================

    {
      id: 31,
      type: "spike",
      note: "E",
      string: "Tiefe E",
      fret: 0,
      positionX: 2470,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 32,
      type: "spike",
      note: "G",
      string: "Tiefe E",
      fret: 3,
      positionX: 2540,
      positionY: 32,
      width: 5,
      height: 8,
    },

    {
      id: 33,
      type: "obstacle",
      note: "A",
      string: "Tiefe E",
      fret: 5,
      positionX: 2620,
      positionY: 28,
      width: 115,
      height: 8,
    },


    // =========================
    // FINALE
    // =========================

    {
      id: 34,
      type: "spike",
      note: "C",
      string: "A",
      fret: 3,
      positionX: 2780,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 35,
      type: "spike",
      note: "D",
      string: "A",
      fret: 5,
      positionX: 2835,
      positionY: 32,
      width: 5,
      height: 8,
    },

    {
      id: 36,
      type: "spike",
      note: "F",
      string: "D",
      fret: 3,
      positionX: 2890,
      positionY: 22,
      width: 5,
      height: 8,
    },

    {
      id: 37,
      type: "spike",
      note: "G",
      string: "D",
      fret: 5,
      positionX: 2945,
      positionY: 38,
      width: 5,
      height: 8,
    },

    {
      id: 38,
      type: "crouch",
      note: "A",
      string: "Tiefe E",
      fret: 5,
      positionX: 3020,
      positionY: 32,
      width: 80,
      height: 8,
    },

    {
      id: 39,
      type: "spike",
      note: "C",
      string: "A",
      fret: 3,
      positionX: 3120,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 40,
      type: "spike",
      note: "E",
      string: "A",
      fret: 7,
      positionX: 3175,
      positionY: 34,
      width: 5,
      height: 8,
    },

    {
      id: 41,
      type: "spike",
      note: "G",
      string: "D",
      fret: 5,
      positionX: 3230,
      positionY: 22,
      width: 5,
      height: 8,
    },

    {
      id: 42,
      type: "obstacle",
      note: "A",
      string: "Tiefe E",
      fret: 5,
      positionX: 3290,
      positionY: 30,
      width: 90,
      height: 8,
    },

    {
      id: 43,
      type: "coin",
      positionX: 3420,
      positionY: 45,
      width: 8,
      height: 8,
    },

  ]
}

export default levelFour