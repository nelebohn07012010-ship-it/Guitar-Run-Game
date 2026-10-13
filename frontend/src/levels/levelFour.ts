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
      string: "Low E",
      fret: 0,
      positionX: 70,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 2,
      type: "obstacle",
      note: "G",
      string: "Low E",
      fret: 3,
      positionX: 140,
      positionY: 20,
      width: 60,
      height: 8,
    },

    {
      id: 3,
      type: "obstacle",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 210,
      positionY: 28,
      width: 90,
      height: 8,
    },

    {
      id: 4,
      type: "obstacle",
      note: "C",
      string: "A",
      fret: 3,
      positionX: 310,
      positionY: 36,
      width: 90,
      height: 8,
    },

    {
      id: 5,
      type: "coin",
      positionX: 450,
      positionY: 40,
      width: 8,
      height: 8,
    },


    // =========================
    // RIFF A
    // =========================

    {
      id: 6,
      type: "crouch",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 545,
      positionY: 20,
      width: 40,
      height: 8,
    },

    {
      id: 7,
      type: "spike",
      note: "C",
      string: "A",
      fret: 3,
      positionX: 610,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 8,
      type: "obstacle",
      note: "D",
      string: "A",
      fret: 5,
      positionX: 675,
      positionY: 20,
      width: 125,
      height: 8,
    },

    {
      id: 9,
      type: "spike",
      note: "E",
      string: "A",
      fret: 7,
      positionX: 735,
      positionY: 28,
      width: 5,
      height: 8,
    },

    {
      id: 10,
      type: "obstacle",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 810,
      positionY: 28,
      width: 40,
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
      positionY: 40,
      width: 8,
      height: 8,
    },


    // =========================
    // RIFF B – ERSTER D-SAITE-WECHSEL
    // =========================

    {
      id: 13,
      type: "obstacle",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 1100,
      positionY: 20,
      width: 40,
      height: 8,
    },

    {
      id: 14,
      type: "obstacle",
      note: "D",
      string: "A",
      fret: 5,
      positionX: 1160,
      positionY: 28,
      width: 50,
      height: 8,
    },

    {
      id: 15,
      type: "obstacle",
      note: "F",
      string: "D",
      fret: 3,
      positionX: 1220,
      positionY: 36,
      width: 130,
      height: 8,
    },

    {
      id: 16,
      type: "spike",
      note: "G",
      string: "D",
      fret: 5,
      positionX: 1280,
      positionY: 44,
      width: 5,
      height: 8,
    },

    {
      id: 17,
      type: "obstacle",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 1360,
      positionY: 44,
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
      positionY: 30,
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
      positionY: 20,
      width: 5,
      height: 8,
    },


    // =========================
    // STEIGERUNG
    // =========================

    {
      id: 21,
      type: "obstacle",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 1710,
      positionY: 20,
      width: 45,
      height: 8,
    },

    {
      id: 22,
      type: "obstacle",
      note: "C",
      string: "A",
      fret: 3,
      positionX: 1765,
      positionY: 28,
      width: 45,
      height: 8,
    },

    {
      id: 23,
      type: "obstacle",
      note: "F",
      string: "D",
      fret: 3,
      positionX: 1820,
      positionY: 36,
      width: 110,
      height: 8,
    },

    {
      id: 24,
      type: "spike",
      note: "G",
      string: "D",
      fret: 5,
      positionX: 1875,
      positionY: 44,
      width: 5,
      height: 8,
    },

    {
      id: 25,
      type: "obstacle",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 1940,
      positionY: 44,
      width: 60,
      height: 8,
    },

    {
      id: 26,
      type: "obstacle",
      note: "D",
      string: "A",
      fret: 5,
      positionX: 2040,
      positionY: 20,
      width: 180,
      height: 8,
    },

    {
      id: 27,
      type: "spike",
      note: "E",
      string: "A",
      fret: 7,
      positionX: 2095,
      positionY: 28,
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
      positionY: 28,
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
      positionY: 28,
      width: 95,
      height: 8,
    },

    {
      id: 30,
      type: "coin",
      positionX: 2000,
      positionY: 58,
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
      string: "Low E",
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
      string: "Low E",
      fret: 3,
      positionX: 2540,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 33,
      type: "obstacle",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 2620,
      positionY: 20,
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
      type: "obstacle",
      note: "D",
      string: "A",
      fret: 5,
      positionX: 2835,
      positionY: 20,
      width: 45,
      height: 8,
    },

    {
      id: 36,
      type: "obstacle",
      note: "F",
      string: "D",
      fret: 3,
      positionX: 2890,
      positionY: 28,
      width: 120,
      height: 8,
    },

    {
      id: 37,
      type: "spike",
      note: "G",
      string: "D",
      fret: 5,
      positionX: 2945,
      positionY: 36,
      width: 5,
      height: 8,
    },

    {
      id: 38,
      type: "obstacle",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 3020,
      positionY: 36,
      width: 90,
      height: 8,
    },

    {
      id: 39,
      type: "obstacle",
      note: "C",
      string: "A",
      fret: 3,
      positionX: 3120,
      positionY: 44,
      width: 100,
      height: 8,
    },

    {
      id: 40,
      type: "spike",
      note: "E",
      string: "A",
      fret: 7,
      positionX: 3175,
      positionY: 52,
      width: 5,
      height: 8,
    },

    {
      id: 41,
      type: "obstacle",
      note: "G",
      string: "D",
      fret: 5,
      positionX: 3230,
      positionY: 52,
      width: 40,
      height: 8,
    },

    {
      id: 42,
      type: "obstacle",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 3290,
      positionY: 36,
      width: 90,
      height: 8,
    },

    {
      id: 43,
      type: "coin",
      positionX: 3390,
      positionY: 36,
      width: 8,
      height: 8,
    },

  ]
}

export default levelFour