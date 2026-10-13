import type { Level } from "./levelTypes"
import backgroundImage from "../assets/arcade_bckgrnd_startscreen.png"
import music from "../assets/Neon Run.mp3"

const levelTwo: Level = {
  backgroundImage,
  music,
  name: "Smoke Rising (lvl. 2)",
  style: "neon-arcade",
  obstacles: [

    // =========================
    // INTRO
    // =========================

    {
      id: 1,
      type: "obstacle",
      note: "G",
      string: "Low E",
      fret: 3,
      positionX: 70,
      positionY: 20,
      width: 70,
      height: 8,
    },
    {
      id: 2,
      type: "obstacle",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 150,
      positionY: 28,
      width: 70,
      height: 8,
    },
    {
      id: 3,
      type: "obstacle",
      note: "C",
      string: "A",
      fret: 3,
      positionX: 230,
      positionY: 36,
      width: 400,
      height: 8,
    },

    {
      id: 4,
      type: "spike",
      note: "G",
      string: "Low E",
      fret: 3,
      positionX: 360,
      positionY: 44,
      width: 5,
      height: 8,
    },

    {
      id: 5,
      type: "spike",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 500,
      positionY: 44,
      width: 5,
      height: 8,
    },
    {
      id: 6,
      type: "spike",
      note: "C",
      string: "A",
      fret: 3,
      positionX: 580,
      positionY: 44,
      width: 5,
      height: 8,
    },

    {
      id: 7,
      type: "coin",
      positionX: 660,
      positionY: 40,
      width: 8,
      height: 8,
    },

    // =========================
    // RIFF A
    // =========================

    {
      id: 8,
      type: "crouch",
      note: "G",
      string: "Low E",
      fret: 3,
      positionX: 760,
      positionY: 30,
      width: 40,
      height: 8,
    },
    {
      id: 9,
      type: "spike",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 830,
      positionY: 20,
      width: 5,
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
      type: "obstacle",
      note: "G",
      string: "Low E",
      fret: 3,
      positionX: 1000,
      positionY: 20,
      width: 100,
      height: 8,
    },

    {
      id: 12,
      type: "obstacle",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 1110,
      positionY: 28,
      width: 200,
      height: 8,
    },

    {
      id: 13,
      type: "obstacle",
      note: "C",
      string: "A",
      fret: 3,
      positionX: 1190,
      positionY: 36,
      width: 20,
      height: 8,
    },

    {
      id: 14,
      type: "coin",
      positionX: 1220,
      positionY: 40,
      width: 8,
      height: 8,
    },

    // =========================
    // RIFF B
    // =========================

    {
      id: 15,
      type: "spike",
      note: "G",
      string: "Low E",
      fret: 3,
      positionX: 1400,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 16,
      type: "spike",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 1470,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 17,
      type: "spike",
      note: "C",
      string: "A",
      fret: 3,
      positionX: 1540,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 18,
      type: "obstacle",
      note: "G",
      string: "Low E",
      fret: 3,
      positionX: 1640,
      positionY: 20,
      width: 190,
      height: 8,
    },

    {
      id: 19,
      type: "spike",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 1760,
      positionY: 28,
      width: 5,
      height: 8,
    },

    {
      id: 20,
      type: "obstacle",
      note: "C",
      string: "A",
      fret: 3,
      positionX: 1840,
      positionY: 28,
      width: 400,
      height: 8,
    },

    // =========================
    // ERSTE STEIGERUNG
    // =========================

    {
      id: 21,
      type: "spike",
      note: "G",
      string: "Low E",
      fret: 3,
      positionX: 1990,
      positionY: 36,
      width: 5,
      height: 8,
    },

    {
      id: 22,
      type: "spike",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 2050,
      positionY: 36,
      width: 5,
      height: 8,
    },

    {
      id: 23,
      type: "spike",
      note: "C",
      string: "A",
      fret: 3,
      positionX: 2110,
      positionY: 36,
      width: 5,
      height: 8,
    },

    {
      id: 24,
      type: "spike",
      note: "G",
      string: "Low E",
      fret: 3,
      positionX: 2190,
      positionY: 36,
      width: 5,
      height: 8,
    },

    {
      id: 25,
      type: "crouch",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 2270,
      positionY: 30,
      width: 90,
      height: 8,
    },

    {
      id: 26,
      type: "spike",
      note: "C",
      string: "A",
      fret: 3,
      positionX: 2390,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 27,
      type: "coin",
      positionX: 2390,
      positionY: 40,
      width: 8,
      height: 8,
    },

    // =========================
    // RUHIGER BREAK
    // =========================

    {
      id: 28,
      type: "obstacle",
      note: "G",
      string: "Low E",
      fret: 3,
      positionX: 2620,
      positionY: 20,
      width: 150,
      height: 8,
    },

    {
      id: 29,
      type: "coin",
      positionX: 2790,
      positionY: 50,
      width: 8,
      height: 8,
    },

    // =========================
    // MITTELTEIL
    // =========================

    {
      id: 30,
      type: "spike",
      note: "G",
      string: "Low E",
      fret: 3,
      positionX: 2900,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 31,
      type: "spike",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 2960,
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
      positionX: 3020,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 33,
      type: "crouch",
      note: "G",
      string: "Low E",
      fret: 3,
      positionX: 3100,
      positionY: 30,
      width: 70,
      height: 8,
    },

    {
      id: 34,
      type: "spike",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 3200,
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
      positionX: 3270,
      positionY: 20,
      width: 100,
      height: 8,
    },

    {
      id: 36,
      type: "spike",
      note: "G",
      string: "Low E",
      fret: 3,
      positionX: 3410,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 37,
      type: "spike",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 3470,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 38,
      type: "spike",
      note: "C",
      string: "A",
      fret: 3,
      positionX: 3530,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 39,
      type: "coin",
      positionX: 3610,
      positionY: 40,
      width: 8,
      height: 8,
    },

    // =========================
    // DICHTER ROCK-ABSCHNITT
    // =========================

    {
      id: 40,
      type: "obstacle",
      note: "G",
      string: "Low E",
      fret: 3,
      positionX: 3690,
      positionY: 20,
      width: 110,
      height: 8,
    },

    {
      id: 41,
      type: "spike",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 3745,
      positionY: 28,
      width: 5,
      height: 8,
    },

    {
      id: 42,
      type: "obstacle",
      note: "C",
      string: "A",
      fret: 3,
      positionX: 3810,
      positionY: 28,
      width: 80,
      height: 8,
    },

    {
      id: 43,
      type: "obstacle",
      note: "G",
      string: "Low E",
      fret: 3,
      positionX: 3900,
      positionY: 36,
      width: 110,
      height: 8,
    },

    {
      id: 44,
      type: "spike",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 3955,
      positionY: 44,
      width: 5,
      height: 8,
    },

    {
      id: 45,
      type: "obstacle",
      note: "C",
      string: "A",
      fret: 3,
      positionX: 4020,
      positionY: 44,
      width: 180,
      height: 8,
    },

    {
      id: 46,
      type: "spike",
      note: "G",
      string: "Low E",
      fret: 3,
      positionX: 4150,
      positionY: 52,
      width: 5,
      height: 8,
    },

    {
      id: 47,
      type: "obstacle",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 4210,
      positionY: 52,
      width: 65,
      height: 8,
    },

    {
      id: 48,
      type: "spike",
      note: "C",
      string: "A",
      fret: 3,
      positionX: 4270,
      positionY: 60,
      width: 5,
      height: 8,
    },

    // =========================
    // BREAK VOR DEM FINALE
    // =========================

    {
      id: 49,
      type: "obstacle",
      note: "G",
      string: "Low E",
      fret: 3,
      positionX: 4410,
      positionY: 20,
      width: 200,
      height: 8,
    },

    {
      id: 50,
      type: "coin",
      positionX: 4620,
      positionY: 40,
      width: 8,
      height: 8,
    },

    // =========================
    // FINALE
    // =========================

    {
      id: 51,
      type: "spike",
      note: "G",
      string: "Low E",
      fret: 3,
      positionX: 4720,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 52,
      type: "obstacle",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 4780,
      positionY: 20,
      width: 50,
      height: 8,
    },

    {
      id: 53,
      type: "obstacle",
      note: "C",
      string: "A",
      fret: 3,
      positionX: 4840,
      positionY: 28,
      width: 70,
      height: 8,
    },

    {
      id: 54,
      type: "obstacle",
      note: "G",
      string: "Low E",
      fret: 3,
      positionX: 4920,
      positionY: 36,
      width: 100,
      height: 8,
    },

    {
      id: 55,
      type: "obstacle",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 5030,
      positionY: 44,
      width: 290,
      height: 8,
    },

    {
      id: 56,
      type: "spike",
      note: "C",
      string: "A",
      fret: 3,
      positionX: 5090,
      positionY: 52,
      width: 5,
      height: 8,
    },

    {
      id: 57,
      type: "spike",
      note: "G",
      string: "Low E",
      fret: 3,
      positionX: 5170,
      positionY: 52,
      width: 5,
      height: 8,
    },

    {
      id: 58,
      type: "obstacle",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 5320,
      positionY: 52,
      width: 120,
      height: 8,
    },

    {
      id: 59,
      type: "spike",
      note: "C",
      string: "A",
      fret: 3,
      positionX: 5380,
      positionY: 60,
      width: 5,
      height: 8,
    },

    {
      id: 60,
      type: "obstacle",
      note: "G",
      string: "Low E",
      fret: 3,
      positionX: 5460,
      positionY: 46,
      width: 180,
      height: 8,
    },

    {
      id: 61,
      type: "spike",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 5590,
      positionY: 52,
      width: 5,
      height: 8,
    },

    {
      id: 62,
      type: "obstacle",
      note: "C",
      string: "A",
      fret: 3,
      positionX: 5650,
      positionY: 46,
      width: 200,
      height: 8,
    },

    {
      id: 63,
      type: "spike",
      note: "G",
      string: "Low E",
      fret: 3,
      positionX: 5710,
      positionY: 52,
      width: 5,
      height: 8,
    },

    {
      id: 64,
      type: "spike",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 5800,
      positionY: 52,
      width: 5,
      height: 8,
    },

    {
      id: 65,
      type: "coin",
      positionX: 5860,
      positionY: 50,
      width: 8,
      height: 8,
    },

    // =========================
    // LEVEL ENDE
    // =========================

    {
      id: 66,
      type: "spike",
      note: "G",
      string: "Low E",
      fret: 3,
      positionX: 6080,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 67,
      type: "spike",
      note: "A",
      string: "Low E",
      fret: 5,
      positionX: 6170,
      positionY: 20,
      width: 5,
      height: 8,
    },

    {
      id: 68,
      type: "crouch",
      note: "G",
      string: "Low E",
      fret: 3,
      positionX: 6280,
      positionY: 30,
      width: 180,
      height: 8,
    },

    {
      id: 69,
      type: "coin",
      positionX: 6470,
      positionY: 30,
      width: 8,
      height: 8,
    },

  ]
}

export default levelTwo