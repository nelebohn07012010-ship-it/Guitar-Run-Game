import type { Level } from "./levelTypes"
import backgroundImage from "../assets/arcade_bckgrnd_startscreen.png"
import music from "../assets/Neon Run.mp3"

const levelEight: Level = {
  backgroundImage,
  music,
  name: "Voltage Rush (lvl. 8)",
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
      note: "G",
      string: "Low E",
      fret: 3,
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
      note: "F",
      string: "D",
      fret: 3,
      positionX: 265,
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
      positionX: 360,
      positionY: 28,
      width: 100,
      height: 8,
    },

    {
      id: 6,
      type: "coin",
      positionX: 515,
      positionY: 45,
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
      positionX: 610,
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
      positionX: 665,
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
      positionX: 720,
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
      positionX: 775,
      positionY: 38,
      width: 5,
      height: 8,
    },

    {
      id: 11,
      type: "spike",
      note: "D",
      string: "G",
      fret: 7,
      positionX: 830,
      positionY: 24,
      width: 5,
      height: 8,
    },

    {
      id: 12,
      type: "crouch",
      note: "G",
      string: "D",
      fret: 5,
      positionX: 900,
      positionY: 34,
      width: 70,
      height: 8,
    },

    {
      id: 13,
      type: "spike",
      note: "D",
      string: "A",
      fret: 5,
      positionX: 1005,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 14,
      type: "spike",
      note: "G",
      string: "D",
      fret: 5,
      positionX: 1060,
      positionY: 36,
      width: 5,
      height: 8,
    },

    {
      id: 15,
      type: "coin",
      positionX: 1145,
      positionY: 47,
      width: 8,
      height: 8,
    },


    // =========================
    // FAST BURST
    // =========================

    {
      id: 16,
      type: "spike",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 1235,
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
      positionX: 1285,
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
      positionX: 1385,
      positionY: 38,
      width: 5,
      height: 8,
    },

    {
      id: 20,
      type: "spike",
      note: "D",
      string: "G",
      fret: 7,
      positionX: 1435,
      positionY: 24,
      width: 5,
      height: 8,
    },

    {
      id: 21,
      type: "obstacle",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 1515,
      positionY: 28,
      width: 90,
      height: 8,
    },

    {
      id: 22,
      type: "spike",
      note: "C",
      string: "A",
      fret: 3,
      positionX: 1630,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 23,
      type: "spike",
      note: "F",
      string: "D",
      fret: 3,
      positionX: 1685,
      positionY: 34,
      width: 5,
      height: 8,
    },

    {
      id: 24,
      type: "crouch",
      note: "C",
      string: "G",
      fret: 5,
      positionX: 1750,
      positionY: 36,
      width: 70,
      height: 8,
    },


    // =========================
    // RIFF B
    // =========================

    {
      id: 25,
      type: "spike",
      note: "A",
      string: "D",
      fret: 7,
      positionX: 1850,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 26,
      type: "spike",
      note: "G",
      string: "D",
      fret: 5,
      positionX: 1905,
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
      positionX: 1960,
      positionY: 22,
      width: 5,
      height: 8,
    },

    {
      id: 28,
      type: "spike",
      note: "A",
      string: "D",
      fret: 7,
      positionX: 2015,
      positionY: 38,
      width: 5,
      height: 8,
    },

    {
      id: 29,
      type: "spike",
      note: "C",
      string: "G",
      fret: 5,
      positionX: 2070,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 30,
      type: "crouch",
      note: "D",
      string: "A",
      fret: 5,
      positionX: 2140,
      positionY: 34,
      width: 75,
      height: 8,
    },

    {
      id: 31,
      type: "spike",
      note: "F",
      string: "D",
      fret: 3,
      positionX: 2245,
      positionY: 22,
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
      type: "spike",
      note: "G",
      string: "D",
      fret: 5,
      positionX: 2355,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 34,
      type: "obstacle",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 2435,
      positionY: 30,
      width: 105,
      height: 8,
    },

    {
      id: 35,
      type: "coin",
      positionX: 2590,
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
      string: "Low E",
      fret: 0,
      positionX: 2690,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 37,
      type: "spike",
      note: "G",
      string: "Low E",
      fret: 3,
      positionX: 2770,
      positionY: 32,
      width: 5,
      height: 8,
    },

    {
      id: 38,
      type: "obstacle",
      note: "D",
      string: "A",
      fret: 5,
      positionX: 2860,
      positionY: 28,
      width: 130,
      height: 8,
    },


    // =========================
    // FINALE – SCHNELLSTE PASSAGE
    // =========================

    {
      id: 39,
      type: "spike",
      note: "C",
      string: "A",
      fret: 3,
      positionX: 3020,
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
      positionX: 3070,
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
      positionX: 3120,
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
      positionX: 3170,
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
      positionX: 3220,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 44,
      type: "spike",
      note: "A",
      string: "D",
      fret: 7,
      positionX: 3270,
      positionY: 34,
      width: 5,
      height: 8,
    },

    {
      id: 45,
      type: "crouch",
      note: "C",
      string: "G",
      fret: 5,
      positionX: 3340,
      positionY: 32,
      width: 80,
      height: 8,
    },

    {
      id: 46,
      type: "spike",
      note: "D",
      string: "G",
      fret: 7,
      positionX: 3440,
      positionY: 22,
      width: 5,
      height: 8,
    },

    {
      id: 47,
      type: "spike",
      note: "G",
      string: "D",
      fret: 5,
      positionX: 3490,
      positionY: 36,
      width: 5,
      height: 8,
    },

    {
      id: 48,
      type: "coin",
      positionX: 3575,
      positionY: 45,
      width: 8,
      height: 8,
    },

  ]
}

export default levelEight