# 🎸 Guitar Run

**Guitar Run** is a rhythm-based 2D platformer that turns a real guitar into a game controller.

The idea behind the game is to combine **learning guitar, rhythm and classic arcade gameplay** into one experience.

Instead of only pressing buttons on a keyboard, the player can actually play notes on a guitar. The game listens to the guitar through the microphone and checks whether the played note matches the note required by the level.

The goal is simple:

**Play the right notes. Avoid the obstacles. Complete the level. Improve your guitar skills.**

---

## 🎸 Why I Built Guitar Run

I am learning to play guitar myself, and one of the things I find most difficult is building **muscle memory**.

Learning a new chord, note or movement is not necessarily difficult because you don't understand it. The difficult part is repeating it often enough until your fingers start doing it automatically. And honestly, that process can sometimes feel frustrating and repetitive.

At the same time, I noticed something while watching my little brother play **Geometry Dash**.

He could play the same level over and over again, fail countless times, and still want to try again. Even though he often didn't make it very far, the game kept him engaged. By repeating the same patterns, he was naturally building **muscle memory, timing and a sense of rhythm** without it feeling like traditional practice.

That made me think:

**What if I could use the same principle for learning guitar?**

Instead of practicing the same notes or movements over and over in a traditional exercise, I wanted to turn them into something the player actually wants to repeat.

That idea became **Guitar Run**.

The game is designed around the same kind of rewarding repetition: you try, you fail, you learn the pattern, and you immediately want to try again. With every attempt, the goal is not only to get further in the level, but also to become more familiar with the guitar notes and the movements needed to play them.

My goal was to make guitar practice feel less like a chore and more like a game you want to keep playing.

**I wanted to take the addictive repetition and rhythm of a game like Geometry Dash and use that principle to make learning guitar more engaging.**

---

## 🕹️ How the Game Works

Guitar Run combines a traditional 2D platformer with guitar note detection.

During a level, the player encounters different obstacles. Some obstacles are connected to a specific guitar string and fret.

When the player reaches one of these obstacles, the game listens to the microphone input and analyzes the played frequency.

The detected frequency is then compared with the expected guitar note.

If the correct note is played at the right moment, the player can continue.

If the note is wrong, the run fails and the player has to try again.

---

## 🎮 How to Play

Guitar Run can be played in two different control modes:

### 🎸 Guitar Mode

In Guitar Mode, you control the player by playing the required notes on a real guitar.

Before starting the level, the game performs a short microphone calibration. **Do not play any guitar notes while the calibration is running.** During calibration, the game measures the current background noise level and uses it to determine which sounds should be treated as guitar input. Playing notes during this phase can cause them to be treated as background noise and may prevent the game from detecting them correctly afterwards.

For the best guitar detection, the guitar signal should be clearly louder than the surrounding background noise.

- 🎸 **Acoustic guitar:** Play in a quiet room and avoid background noise as much as possible.
- 🎸 **Electric guitar:** Use an amplifier and set the volume high enough for the microphone to clearly pick up the guitar.
- 🔇 Avoid playing other sounds or instruments near the microphone.
- 🎙️ Make sure the browser has permission to access your microphone.

Once calibration is finished, play the notes required by the obstacles. The game detects the played frequency and checks whether it matches the expected string and fret.

### ⌨️ Arrow Key Mode

If you do not want to use a guitar, you can select Arrow Key Mode in the settings.

Controls:

| Key | Action |
|---|---|
| `Arrow Up` | Jump |
| `Arrow Down` | Crouch |

The control mode can be changed at any time from the **Settings** menu on the Start Screen.

---

## ✨ Features

- 🎸 Real guitar input through a microphone
- 🎵 Real-time frequency analysis
- 🎮 Guitar Mode
- ⌨️ Arrow Key Mode
- 🏃 2D platformer gameplay
- 🚧 Multiple obstacle types
- 🪙 Collectible coins
- 📊 Level progress tracking
- 🔢 Attempt counter
- 🏆 Local leaderboard
- 📅 Progress history
- ⚙️ Control settings
- 🎨 Animated arcade-style visuals
- 🗂️ Multiple levels

---

## 🪙 Coins & Progress

Coins can be collected throughout a level.

The game tracks:

- level progress
- collected coins
- total available coins
- number of attempts

When returning to the home screen, the current result can be saved locally.

A new result is only added to the leaderboard if it improves at least one previous best value for that level:

- higher progress
- more coins
- fewer attempts

This creates a small personal progression history rather than only storing the latest run.

---

## 🏆 Leaderboard

The leaderboard belongs to the currently selected level.

When browsing the level selection screen, only statistics for the currently displayed level are shown.

Results are sorted by:

1. highest progress
2. most coins
3. fewest attempts

Each saved improvement contains:

- level
- date
- progress
- coins
- attempts

The statistics are stored locally in the browser using `localStorage`.

---

## 🛠️ Built With

- **React**
- **TypeScript**
- **Vite**
- **Web Audio API**
- **HTML**
- **CSS**

The game runs directly in the browser and does not require a separate backend.

---

## 🤖 AI Usage

AI was used openly as a development assistant during the creation of Guitar Run.

I used AI to help me with:

- understanding React and TypeScript
- learning programming concepts
- debugging errors
- analyzing technical problems
- understanding the Web Audio API
- developing gameplay systems
- discussing implementation approaches
- developing and refining UI ideas
- structuring parts of the project
- finding and fixing bugs

AI was not used as a replacement for my own testing or decision-making.

The project was developed iteratively: I implemented changes, tested them in the actual game, evaluated the results and decided which solutions to keep or change.

The overall concept of Guitar Run, the game mechanics, the feature selection, the visual direction and the decisions about how the game should work were developed as part of my own project process.

I am intentionally documenting the use of AI because transparency about how the project was created is important to me.

---

## 🚀 Running the Project Locally

Clone the repository:

```bash
git clone https://github.com/nelebohn07012010-ship-it/Guitar-Run-Game.git
```

Enter the project:

```bash
cd Guitar-Run-Game/frontend
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will provide a local URL where the game can be opened in the browser.

---

## 🌐 Live Version

A browser-playable version of Guitar Run will be published using GitHub Pages.

**Live Demo: https://nelebohn07012010-ship-it.github.io/Guitar-Run-Game/**

---

## 🎯 Project Goal

Guitar Run started as an experiment:

**Can playing a real guitar become part of controlling a game?**

The project combines something I enjoy — guitar — with something I wanted to learn more about — game development.

The goal is to make guitar practice feel less like repetitive exercise and more like playing a game.

**Play the note. Beat the obstacle. Keep running. 🎸🔥**