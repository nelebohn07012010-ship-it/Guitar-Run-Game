import type { Level } from "./levelTypes"
import backgroundImage from "../assets/arcade_bckgrnd_startscreen.png"
import music from "../assets/Neon Run.mp3"

const levelThree: Level = {
  backgroundImage,
  music,
  name: "Burning Drive (lvl. 3)",
  style: "neon-arcade",
  obstacles: [

    // =========================
    // INTRO
    // =========================

    {
      id: 1,
      type: "spike",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 70,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 2,
      type: "spike",
      note: "C",
      string: "A",
      fret: 3,
      positionX: 145,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 3,
      type: "spike",
      note: "D",
      string: "A",
      fret: 5,
      positionX: 220,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 4,
      type: "obstacle",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 330,
      positionY: 20,
      width: 90,
      height: 8,
    },

    {
      id: 5,
      type: "coin",
      positionX: 475,
      positionY: 40,
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
      string: "Low E",
      fret: 5,
      positionX: 570,
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
      positionX: 635,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 8,
      type: "spike",
      note: "D",
      string: "A",
      fret: 5,
      positionX: 700,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 9,
      type: "crouch",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 790,
      positionY: 30,
      width: 65,
      height: 8,
    },

    {
      id: 10,
      type: "spike",
      note: "C",
      string: "A",
      fret: 3,
      positionX: 900,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 11,
      type: "spike",
      note: "E",
      string: "A",
      fret: 7,
      positionX: 965,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 12,
      type: "coin",
      positionX: 1045,
      positionY: 40,
      width: 8,
      height: 8,
    },


    // =========================
    // RIFF B – MEHR STRING-WECHSEL
    // =========================

    {
      id: 13,
      type: "spike",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 1135,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 14,
      type: "spike",
      note: "C",
      string: "A",
      fret: 3,
      positionX: 1195,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 15,
      type: "spike",
      note: "E",
      string: "A",
      fret: 7,
      positionX: 1255,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 16,
      type: "obstacle",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 1340,
      positionY: 20,
      width: 80,
      height: 8,
    },

    {
      id: 17,
      type: "spike",
      note: "D",
      string: "A",
      fret: 5,
      positionX: 1460,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 18,
      type: "crouch",
      note: "C",
      string: "A",
      fret: 3,
      positionX: 1530,
      positionY: 30,
      width: 75,
      height: 8,
    },

    {
      id: 19,
      type: "spike",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 1640,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 20,
      type: "spike",
      note: "E",
      string: "A",
      fret: 7,
      positionX: 1705,
      positionY: 20,
      width: 5,
      height: 8,
    },


    // =========================
    // STEIGERUNG
    // =========================

    {
      id: 21,
      type: "spike",
      note: "D",
      string: "A",
      fret: 5,
      positionX: 1770,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 22,
      type: "spike",
      note: "E",
      string: "A",
      fret: 7,
      positionX: 1825,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 23,
      type: "spike",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 1885,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 24,
      type: "crouch",
      note: "C",
      string: "A",
      fret: 3,
      positionX: 1960,
      positionY: 30,
      width: 70,
      height: 8,
    },

    {
      id: 25,
      type: "spike",
      note: "D",
      string: "A",
      fret: 5,
      positionX: 2060,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 26,
      type: "spike",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 2120,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 27,
      type: "obstacle",
      note: "E",
      string: "A",
      fret: 7,
      positionX: 2200,
      positionY: 20,
      width: 100,
      height: 8,
    },

    {
      id: 28,
      type: "coin",
      positionX: 2360,
      positionY: 40,
      width: 8,
      height: 8,
    },


    // =========================
    // BREAK
    // =========================

    {
      id: 29,
      type: "spike",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 2450,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 30,
      type: "obstacle",
      note: "D",
      string: "A",
      fret: 5,
      positionX: 2540,
      positionY: 20,
      width: 120,
      height: 8,
    },


    // =========================
    // FINALE
    // =========================

    {
      id: 31,
      type: "spike",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 2690,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 32,
      type: "spike",
      note: "C",
      string: "A",
      fret: 3,
      positionX: 2745,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 33,
      type: "spike",
      note: "D",
      string: "A",
      fret: 5,
      positionX: 2805,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 34,
      type: "crouch",
      note: "E",
      string: "A",
      fret: 7,
      positionX: 2880,
      positionY: 30,
      width: 80,
      height: 8,
    },

    {
      id: 35,
      type: "spike",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 2985,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 36,
      type: "spike",
      note: "C",
      string: "A",
      fret: 3,
      positionX: 3045,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 37,
      type: "spike",
      note: "E",
      string: "A",
      fret: 7,
      positionX: 3105,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 38,
      type: "obstacle",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 3190,
      positionY: 20,
      width: 90,
      height: 8,
    },

    {
      id: 39,
      type: "spike",
      note: "D",
      string: "A",
      fret: 5,
      positionX: 3310,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 40,
      type: "coin",
      positionX: 3380,
      positionY: 30,
      width: 8,
      height: 8,
    },

  ]
}

export default levelThree