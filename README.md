## 🎸 What is guitar Run?
Guitar run is a 2D jump and run game to learn guitar, it has 12 levels where you can learn three different songs or riffs. It has three different style themes which are currently used (arcade, snow and desert). There is also sound and background music, but unfortuately each level has the same background music. But the reason for that is that background music is only used when you play with keyboard control, which is also possible btw, but of course not that cool and not the main idea behind this game.

## 🎸 Why I Built Guitar Run
The idea of Guitar Run came up when a friend of mine and I had a sleepover and in the morning my brother and she started playing "Geometry Dash". I haven't played that game before and they wanted me to do this so I did. I noticed that the concept of this game restaring automatically when dying, makes you play again and again. I also noticed that you build great muscle memory along playing and your skills get better. At that time I was stuck learning guitar and then I though wait... this is exacly the concept I want for learning guitar - building muscle memory and can't stop continuing. 
Searching for a cool project I could do for stardance, I knew I want to make a Geometry Dash game you play with Guitar - and at that time the idea og Guitar Run was born!


## 🎮 How to Play
Guitar Run can be played in two different control modes:
## 🎸 Guitar Mode
In Guitar Mode, you control the player by playing the required notes on a real guitar.
Before starting the level, the game performs a short microphone calibration. Do not play any guitar notes while the calibration is running. During calibration, the game measures the current background noise level and uses it to determine which sounds should be treated as guitar input. Playing notes during this phase can cause them to be treated as background noise and may prevent the game from detecting them correctly afterwards.
For the best guitar detection, the guitar signal should be clearly louder than the surrounding background noise. So make sure you play loud enough, in a quiet room and avoid background noise as much as possible.

Once calibration is finished, play the notes required by the obstacles. The game detects the played frequency and checks whether it matches the expected string and fret.
## ⌨️ Arrow Key Mode
If you do not want to use a guitar, you can select Arrow Key Mode in the settings(the small weel in the right corner)

Controls:

Key
Action

Arrow Up
Jump

Arrow Down
Crouch


You will notice most of the levels are locked, but don't worry, they will automatically be unlocked when you finished the previous level. I sorted the levels into blocks. There are three of them and each one is about one song. The imortant thing: they are independend from each other so you can always play the first level of each block.

─── 

## 🌐 Live Version
Here you can experience Guitar Game yourself!
It will load very long in the beginning, so you have to be a little bit pacient
Live Demo: https://nelebohn07012010-ship-it.github.io/Guitar-Run-Game/

───
## 🚀 Running the Project Locally
That would make Guitar Game much faster, so if you want better experience use this.
You need npm and vite!

Clone the repository:
git clone https://github.com/nelebohn07012010-ship-it/Guitar-Run-Game.git
Enter the project:
cd Guitar-Run-Game/frontend
Install the dependencies:
npm install
Start the development server:
npm run dev
Vite will provide a local URL where the game can be opened in the browser.

───
## 🕹️ How the Game Works (that is not important for playing - just read if your interested)

**Landingscreen:
First we start with the landingscreen. When you click play, the site requests landscape and fullscreen mode. I implemented that because I want the game to be playable on phone. And of course it leads to the next site, the startscreen.

**Loading screen:

Before leading to the startscreen, the loading screen is displayed and at that time all the images are preloaded. I implemented this to create a smoother game experience becausr before I did that the images where loading very slowly while playing, which destroyes the howle game ecperience. The only issue is that the loading screen takes very long, but I did not find another way yet.
## Startscreen:
**level catalog:
The main part of the startscreen is the level catalog, where you select the levels, which previews are displayed on the smaller startarea and theme pictures on the howle startscreen, it looks very fancy.
**Ranking list:
I also wanted the player to track their progress so I created a ranking list, which displays his attempts with their scores and their date so you can see the process along time. 

**Achievments and Coins:
Then I needed a third button because an uneven number was necessary for my design. Thats why I created achievments. But therefore I needed some things to achieve so I started tracking attempts and added coins.

**Settings and control mode:
The idea of Guitar Run is of course playing guitar, but I wanted everyone to test my game so I added the keyboard control to the gameplay (I already used it for the developing amd testing). Therefore settings where needed to select the wanted control mode.

**Info message:
I added a info message, which tells the user that he can change the control in the settings, becausd it was not that obivious. The message logs only the first time your browser, because I think that is enough and other wise it would be enoying.

**Difficulty:
Then I have also a difficulty display. The difficulty is just as the preview picture a property each level has. This property is checked when rendering and depending on the difficulty the text of it has a different color. It has no effect om the real level difficulty - it is just to warn the player.

**Chord chatalog:
For levels that include chords I let a little note button appear at the left corner. If you click it a chord catalog opens, where I've drawn little images which show how to play each chord.

**Play button and level name:
In the center of the start screen there is the play button, which of course starts the level and above that on top of the startscreen there is the level name displayed, which is also a property of each level.

## Gamescreen:
**Obstacles:
If you started a level it will lead you to the gamescreen the gamescreen renders all level components and starts the obstacle animation, where all the obstacles for that level move to the left, so it looks like the player is moving to the right, but actually he is always at the same x position. All obstacles are definded as different objects, which are collected in one array which then plays through the level. With the property "type" the obstacle is turned to one of these five obstacle types: platform, crouch, spike, coin and text. They all behave differnetly and give the obstacle different look. Combinig all these and adding different x and y position and fitting with and hight, you stile your level. Of course you need all the logic in the background, but this must only be created once and then you can easily create levels as I described. For example the collision detection works by comparing the player possition the the possition the the currently active obstacle. I implemented a colision puffer to make a better game experience, which means the comparted size of the obstacles is smaller than the actuall visible size of them, so it is possible to touch the obstacles a little bit without dying.

**Calculating screen:
Before the level starts a calculating screen appears, at that time the noise floor is measured so the note detection gets cleaner and do not detect background noises as real notes.

**Note catalog:
Then on top of the gamescreen we have the note catalog. You can manually scroll throgh it, but it automatycally scrolls so that the active obstacle note is highlighted and nearly at the center, so you can just focus on playing the right notes at the right time.

**Pause menu: 
If you click anywhere on the game area the game pauses and the pausr menu is displayed. (the player can stil turn, which I though was first a bug, but it looks very funny so I did not "fixed" it). On the top of the pause menu you can se your level progress in %, which I think is important so you can check how far you got while playing. And then there is also a restart, home and continue button, which do exactly what you expect them to do.
**Attemps counter:
At the beginning of the gamescreen level there is an attemps counter above the player, which counts the attemps that means how often you die and restart until you turn back to the startscreen, than it resets. These attemps also count in your stats.
**Note detection:
The note detection uses your microphone and first a request is sendet through your browser to acess your microphone when starting a level. The note detecten collects all frequencies through the microphone and compares them to certain conditions. Is the frequency clearly louder than the noise floor(background noise)? Does it match the requiret frequencie(is it the right note)? And does it lasts long enough? If all these conditions are fullfilled the player eigther jumps or crouches, depending on the current active obstacle.

**Chord detection:
The chord detection works in general excatly the same but a chord contains multible notes so a set of notes has to be tracked, which is trickier, because you have to decide for a howle frequency pair if it fits another frequency pair. That's of course more prone to errors, so for level with chords it's even more important to play loud enough and in a quiet room.

## 🤖 AI Usage
I used AI openly as a development assistant during the creation of Guitar Run.
I used AI to help me with:
• understanding React and TypeScript
• learning programming concepts
• debugging errors
• analyzing technical problems
• understanding the Web Audio API
• developing gameplay systems
• discussing implementation approaches
• developing and refining UI ideas
• structuring parts of the project
• finding and fixing bugs
AI was not used as a replacement for my own testing or decision-making. I implemented changes, tested them in the actual game, evaluated the results and decided which solutions to keep or change.
The overall concept of Guitar Run, the game mechanics, the feature selection, the visual direction and the decisions about how the game should work were developed as part of my own project process.

───

