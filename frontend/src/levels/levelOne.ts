import type { Level } from "./levelTypes"
import backgroundImage from "../assets/arcade_bckgrnd_startscreen.png"
import music from "../assets/Neon Run.mp3"

const levelOne: Level = {
  backgroundImage,
  music,
  name: "First Strike (Lvl.1)",
  style: "neon-arcade",
  obstacles: [

    // =========================
    // INTRO
    // =========================

    {
      id: 1,
      type: "spike",
      note: "G",
      string: "Low E",
      fret: 3,
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
      positionX: 150,
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
      positionX: 230,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 4,
      type: "obstacle",
      note: "G",
      string: "Low E",
      fret: 3,
      positionX: 360,
      positionY: 20,
      width: 100,
      height: 8,
    },

    {
      id: 5,
      type: "coin",
      positionX: 500,
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
      note: "G",
      string: "Low E",
      fret: 3,
      positionX: 600,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 7,
      type: "spike",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 670,
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
      positionX: 740,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 9,
      type: "crouch",
      note: "G",
      string: "Low E",
      fret: 3,
      positionX: 840,
      positionY: 30,
      width: 70,
      height: 8,
    },

    {
      id: 10,
      type: "spike",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 950,
      positionY: 20,
      width: 5,
      height: 8,
    },


    // =========================
    // RIFF B
    // =========================

    {
      id: 11,
      type: "spike",
      note: "C",
      string: "A",
      fret: 3,
      positionX: 1020,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 12,
      type: "obstacle",
      note: "G",
      string: "Low E",
      fret: 3,
      positionX: 1120,
      positionY: 20,
      width: 110,
      height: 8,
    },

    {
      id: 13,
      type: "coin",
      positionX: 1270,
      positionY: 40,
      width: 8,
      height: 8,
    },

    {
      id: 14,
      type: "spike",
      note: "G",
      string: "Low E",
      fret: 3,
      positionX: 1350,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 15,
      type: "spike",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 1420,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 16,
      type: "crouch",
      note: "C",
      string: "A",
      fret: 3,
      positionX: 1510,
      positionY: 30,
      width: 80,
      height: 8,
    },


    // =========================
    // STEIGERUNG
    // =========================

    {
      id: 17,
      type: "spike",
      note: "G",
      string: "Low E",
      fret: 3,
      positionX: 1620,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 18,
      type: "spike",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 1680,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 19,
      type: "spike",
      note: "C",
      string: "A",
      fret: 3,
      positionX: 1740,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 20,
      type: "obstacle",
      note: "G",
      string: "Low E",
      fret: 3,
      positionX: 1830,
      positionY: 20,
      width: 90,
      height: 8,
    },

    {
      id: 21,
      type: "spike",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 1960,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 22,
      type: "crouch",
      note: "C",
      string: "A",
      fret: 3,
      positionX: 2030,
      positionY: 30,
      width: 70,
      height: 8,
    },

    {
      id: 23,
      type: "spike",
      note: "G",
      string: "Low E",
      fret: 3,
      positionX: 2140,
      positionY: 20,
      width: 5,
      height: 8,
    },


    // =========================
    // BREAK
    // =========================

    {
      id: 24,
      type: "obstacle",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 2270,
      positionY: 20,
      width: 140,
      height: 8,
    },

    {
      id: 25,
      type: "coin",
      positionX: 2470,
      positionY: 40,
      width: 8,
      height: 8,
    },


    // =========================
    // FINALE
    // =========================

    {
      id: 26,
      type: "spike",
      note: "G",
      string: "Low E",
      fret: 3,
      positionX: 2550,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 27,
      type: "spike",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 2610,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 28,
      type: "spike",
      note: "C",
      string: "A",
      fret: 3,
      positionX: 2670,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 29,
      type: "crouch",
      note: "G",
      string: "Low E",
      fret: 3,
      positionX: 2760,
      positionY: 30,
      width: 90,
      height: 8,
    },

    {
      id: 30,
      type: "spike",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 2880,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 31,
      type: "spike",
      note: "C",
      string: "A",
      fret: 3,
      positionX: 2940,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 32,
      type: "obstacle",
      note: "G",
      string: "Low E",
      fret: 3,
      positionX: 3020,
      positionY: 20,
      width: 100,
      height: 8,
    },

    {
      id: 33,
      type: "spike",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 3150,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 34,
      type: "spike",
      note: "C",
      string: "A",
      fret: 3,
      positionX: 3220,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 35,
      type: "coin",
      positionX: 3290,
      positionY: 30,
      width: 8,
      height: 8,
    },

  ]
}

export default levelOne