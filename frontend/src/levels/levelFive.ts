import type { Level } from "./levelTypes"
import backgroundImage from "../assets/arcade_bckgrnd_startscreen.png"
import music from "../assets/Neon Run.mp3"

const levelFive: Level = {
  backgroundImage,
  music,
  name: "Riff Burner (lvl. 5)",
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
      positionY: 20,
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
      positionY: 20,
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
      positionY: 20,
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
      positionY: 20,
      width: 90,
      height: 8,
    },

    {
      id: 6,
      type: "coin",
      positionX: 505,
      positionY: 40,
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
      positionY: 20,
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
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 11,
      type: "crouch",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 840,
      positionY: 30,
      width: 70,
      height: 8,
    },

    {
      id: 12,
      type: "spike",
      note: "D",
      string: "A",
      fret: 5,
      positionX: 945,
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
      positionX: 1005,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 14,
      type: "coin",
      positionX: 1090,
      positionY: 40,
      width: 8,
      height: 8,
    },


    // =========================
    // RIFF B – STRING CROSSING
    // =========================

    {
      id: 15,
      type: "spike",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 1180,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 16,
      type: "spike",
      note: "D",
      string: "A",
      fret: 5,
      positionX: 1235,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 17,
      type: "spike",
      note: "G",
      string: "D",
      fret: 5,
      positionX: 1290,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 18,
      type: "spike",
      note: "A",
      string: "D",
      fret: 7,
      positionX: 1345,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 19,
      type: "obstacle",
      note: "C",
      string: "A",
      fret: 3,
      positionX: 1425,
      positionY: 20,
      width: 85,
      height: 8,
    },

    {
      id: 20,
      type: "spike",
      note: "E",
      string: "A",
      fret: 7,
      positionX: 1540,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 21,
      type: "crouch",
      note: "G",
      string: "D",
      fret: 5,
      positionX: 1600,
      positionY: 30,
      width: 65,
      height: 8,
    },

    {
      id: 22,
      type: "spike",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 1705,
      positionY: 20,
      width: 5,
      height: 8,
    },


    // =========================
    // STEIGERUNG
    // =========================

    {
      id: 23,
      type: "spike",
      note: "C",
      string: "A",
      fret: 3,
      positionX: 1760,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 24,
      type: "spike",
      note: "F",
      string: "D",
      fret: 3,
      positionX: 1815,
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
      positionX: 1870,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 26,
      type: "spike",
      note: "A",
      string: "D",
      fret: 7,
      positionX: 1925,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 27,
      type: "crouch",
      note: "C",
      string: "A",
      fret: 3,
      positionX: 1990,
      positionY: 30,
      width: 70,
      height: 8,
    },

    {
      id: 28,
      type: "spike",
      note: "D",
      string: "A",
      fret: 5,
      positionX: 2085,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 29,
      type: "spike",
      note: "F",
      string: "D",
      fret: 3,
      positionX: 2140,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 30,
      type: "spike",
      note: "A",
      string: "D",
      fret: 7,
      positionX: 2195,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 31,
      type: "obstacle",
      note: "G",
      string: "D",
      fret: 5,
      positionX: 2275,
      positionY: 20,
      width: 100,
      height: 8,
    },

    {
      id: 32,
      type: "coin",
      positionX: 2425,
      positionY: 40,
      width: 8,
      height: 8,
    },


    // =========================
    // BREAK
    // =========================

    {
      id: 33,
      type: "spike",
      note: "E",
      string: "Low E",
      fret: 0,
      positionX: 2520,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 34,
      type: "spike",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 2590,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 35,
      type: "obstacle",
      note: "C",
      string: "A",
      fret: 3,
      positionX: 2680,
      positionY: 20,
      width: 120,
      height: 8,
    },


    // =========================
    // FINALE
    // =========================

    {
      id: 36,
      type: "spike",
      note: "D",
      string: "A",
      fret: 5,
      positionX: 2840,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 37,
      type: "spike",
      note: "F",
      string: "D",
      fret: 3,
      positionX: 2895,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 38,
      type: "spike",
      note: "G",
      string: "D",
      fret: 5,
      positionX: 2950,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 39,
      type: "spike",
      note: "A",
      string: "D",
      fret: 7,
      positionX: 3005,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 40,
      type: "crouch",
      note: "C",
      string: "A",
      fret: 3,
      positionX: 3080,
      positionY: 30,
      width: 80,
      height: 8,
    },

    {
      id: 41,
      type: "spike",
      note: "E",
      string: "A",
      fret: 7,
      positionX: 3185,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 42,
      type: "spike",
      note: "G",
      string: "D",
      fret: 5,
      positionX: 3240,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 43,
      type: "spike",
      note: "A",
      string: "D",
      fret: 7,
      positionX: 3295,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 44,
      type: "obstacle",
      note: "E",
      string: "Low E",
      fret: 0,
      positionX: 3375,
      positionY: 20,
      width: 95,
      height: 8,
    },

    {
      id: 45,
      type: "coin",
      positionX: 3520,
      positionY: 40,
      width: 8,
      height: 8,
    },

  ]
}

export default levelFive