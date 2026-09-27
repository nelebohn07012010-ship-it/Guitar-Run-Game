import type { Level } from "./levelTypes";
import backgroundImage from "../assets/tutorial_preview.png"
import music from "../assets/Arcade Tutorial.mp3"

const tutorialArr: Level = {
  music,
  backgroundImage,
  name: "Tutorial (Arrows)",
  style: "neon-arcade",
  obstacles: [
    {
      id: 1,
      type: "text",
      positionX: 100,
      positionY: 60,
      width: 20,
      height: 10,
      text: "WELCOME!"
    },
    {
      id: 2,
      type: "text",
      positionX: 120,
      positionY: 50,
      width: 60,
      height: 10,
      text: "SO YOU WANNA LEARN HOW TO PLAY THIS GAME..."
    },
    {
      id: 3,
      type: "text",
      positionX: 175,
      positionY: 35,
      width: 30,
      height: 10,
      text: "IT'S ACTUALLY VERY EASY"
    },
    {
      id: 4,
      type: "text",
      positionX: 250,
      positionY: 50,
      width: 50,
      height: 10,
      text: "I BET YOU WOULDN'T EVEN NEED THIS TUTORIAL"
    },
    {
      id: 5,
      type: "text",
      positionX: 350,
      positionY: 60,
      width: 30,
      height: 10,
      text: "FIRST THE VERY BASICS:"
    },
    {
      id: 6,
      type: "text",
      positionX: 430,
      positionY: 60,
      width: 40,
      height: 10,
      text: "CLICK ON THE SCREEN TO PAUSE THE GAME!"
    },
    {
      id: 7,
      type: "text",
      positionX: 450,
      positionY: 0,
      width: 15,
      height: 10,
      text: "RESTART"
    },
    {
      id: 8,
      type: "text",
      positionX: 470,
      positionY: 0,
      width: 15,
      height: 10,
      text: "CONTINUE"
    },
    {
      id: 9,
      type: "text",
      positionX: 490,
      positionY: 0,
      width: 25,
      height: 10,
      text: "BACK TO HOMESCREEN"
    },
    {
      id: 10,
      type: "text",
      positionX: 550,
      positionY: 60,
      width: 150,
      height: 10,
      text: "BTW IF YOU WANT TO PLAY USING GUITAR YOU HAVE TO CHANGE THAT IN THE SETTINGS AT THE HOME SCREEN"
    },
    {
      id: 11,
      type: "text",
      positionX: 695,
      positionY: 50,
      width: 60,
      height: 10,
      text: "YOU SHOULD KNOW HOW TO GET THERE!"
    },
    {
      id: 12,
      type: "text",
      positionX: 770,
      positionY: 60,
      width: 60,
      height: 10,
      text: "OKAY... NOW THE INTERESSTING PART:"
    },
    {
      id: 13,
      type: "text",
      positionX: 840,
      positionY: 60,
      width: 50,
      height: 10,
      text: "I WILL GIVE YOU YOUR FIRST OBSTACLE"
    },
    {
      id: 14,
      type: "text",
      positionX: 900,
      positionY: 70,
      width: 110,
      height: 10,
      text: "PLEASE PAUSE THE GAME IF YOU SEE AN OBSTACLE TO READ THE INSTRUCTIONS!!!"
    },
    {
      id: 16,
      type: "spike",
      positionX: 1100,
      positionY: 20,
      width: 5,
      height: 8,
      note: "E",
      string: "Tiefe E",
      fret: 0,
    },
    {
      id: 17,
      type: "text",
      positionX: 1060,
      positionY: 90,
      width: 70,
      height: 10,
      text: "PRESS ARROW UP TO JUMP!"
    },
    {
      id: 18,
      type: "text",
      positionX: 1060,
      positionY: 0,
      width: 50,
      height: 10,
      text: "IF YOU HIT THE SPIKE YOU DIE!"
    },
    {
      id: 19,
      type: "text",
      positionX: 1200,
      positionY: 60,
      width: 20,
      height: 10,
      text: "OKAY NEXT ONE..."
    },
    {
      id: 20,
      type: "text",
      positionX: 1280,
      positionY: 50,
      width: 20,
      height: 10,
      text: "IT'S A PLATFORM!!"
    },
    {
      id: 21,
      type: "obstacle",
      note: "C#",
      string: "A",
      fret: 4,
      positionX: 1350,
      positionY: 20,
      width: 20,
      height: 8,
    },
    {
      id: 22,
      type: "text",
      positionX: 1330,
      positionY: 90,
      width: 70,
      height: 10,
      text: "YOU CAN IGNORE THE NOTE CARD BTW"
    },
    {
      id: 23,
      type: "text",
      positionX: 1330,
      positionY: 0,
      width: 50,
      height: 10,
      text: "YOU CAN LAND ON THE PLATFORM"
    },
    {
      id: 24,
      type: "text",
      positionX: 1420,
      positionY: 60,
      width: 30,
      height: 10,
      text: "YESS! ALLREADY THE LAST ONE:"
    },
    {
      id: 25,
      type: "crouch",
      note: "E",
      string: "Tiefe E",
      fret: 0,
      positionX: 1500,
      positionY: 30,
      width: 10,
      height: 5,
    }, {
      id: 26,
      type: "text",
      positionX: 1505,
      positionY: 90,
      width: 20,
      height: 10,
      text: "ARROW DOWN!"
    }, {
      id: 27,
      type: "text",
      positionX: 1480,
      positionY: 0,
      width: 50,
      height: 10,
      text: "DON'T TOUCH THE CROUCH OBSTACLE!"
    },
    {
      id: 28,
      type: "text",
      positionX: 1580,
      positionY: 70,
      width: 30,
      height: 10,
      text: "YAAAAYYYYYYY, YOU WON!!!"
    },
    {
      id: 29,
      type: "text",
      positionX: 1630,
      positionY: 70,
      width: 30,
      height: 10,
      text: "OR WHATEVER YOU DID..."
    },
    {
      id: 30,
      type: "text",
      positionX: 1660,
      positionY: 70,
      width: 30,
      height: 10,
      text: "CONGRATULATIONS!!"
    },
    {
      id: 31,
      type: "text",
      positionX: 1700,
      positionY: 60,
      width: 30,
      height: 10,
      text: "AHHH WAITT!"
    },
    {
      id: 32,
      type: "text",
      positionX: 1740,
      positionY: 60,
      width: 70,
      height: 10,
      text: "THERE IS STILL SOMETHING I WANTED TO SHOW YOU!"
    },
    {
      id: 33,
      type: "text",
      positionX: 1820,
      positionY: 70,
      width: 30,
      height: 10,
      text: "IT'S A COIN!"
    },
    {
      id: 34,
      type: "text",
      positionX: 1860,
      positionY: 60,
      width: 70,
      height: 10,
      text: "IF YOU COLLECT IT YOU'RE REALLY COOL!"
    },
    {
      id: 35,
      type: "coin",
      positionX: 1930,
      positionY: 20,
      width: 10,
      height: 10,
    },
    {
      id: 36,
      type: "text",
      positionX: 1950,
      positionY: 60,
      width: 50,
      height: 10,
      text: "OKAY NOW WE'RE ACTUALLY FINISHED!"
    },
    {
      id: 37,
      type: "text",
      positionX: 2000,
      positionY: 70,
      width: 30,
      height: 10,
      text: "YAYYYYYYYYYY!!!!"
    }


  ]
}

export default tutorialArr