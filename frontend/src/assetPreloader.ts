import homeButton from "./assets/home_button.png"
import platformImage from "./assets/arcade_platform.png"
import playButton from "./assets/play_button.png"
import playerImage from "./assets/player_img.png"
import rankingButton from "./assets/ranking_button.png"
import restartButton from "./assets/restar_button.png"
import settingsButton from "./assets/setting.png"
import spikeImage from "./assets/arcade_spike.jpeg"
import tutorialPreview from "./assets/tutorial_preview.png"

import arcadeBackground from "./assets/arcade_backgrnd.png"
import arcadeStartBackground from "./assets/arcade_bckgrnd_startscreen.png"
import arcadeFloor from "./assets/arcade_floor.png"
import continueButton from "./assets/continue_button.png"
import crouchImage from "./assets/arcade_crouch.png"
import heroImage from "./assets/hero.png"

import fragment1 from "./assets/fragment_1.png"
import fragment2 from "./assets/fragment_2.png"
import fragment3 from "./assets/fragment_3.png"

import desertBackground from "./assets/desert_background.png"
import desertFloor from "./assets/desert_floor.png"
import desertSpike from "./assets/desert_spike.png"
import desertCrouch from "./assets/desert_crouch.png"
import desertPlatform from "./assets/desert_platform.png"

const imageAssets = [
  homeButton,
  platformImage,
  playButton,
  playerImage,
  rankingButton,
  restartButton,
  settingsButton,
  spikeImage,
  tutorialPreview,
  arcadeBackground,
  arcadeStartBackground,
  arcadeFloor,
  continueButton,
  crouchImage,
  heroImage,
  fragment1,
  fragment2,
  fragment3,
  desertBackground,
  desertFloor,
  desertSpike,
  desertCrouch,
  desertPlatform
]

export const preloadAssets = async () => {
  await Promise.all(
    imageAssets.map(src => {
      return new Promise<void>((resolve, reject) => {
        const image = new Image()

        image.onload = async () => {
          try {
            await image.decode()
          } catch {
            // Browser unterstützt decode eventuell nicht
          }

          resolve()
        }

        image.onerror = () => {
          reject(new Error(`Asset konnte nicht geladen werden: ${src}`))
        }

        image.src = src
      })
    })
  )
}