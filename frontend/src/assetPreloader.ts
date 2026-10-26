import homeButton from "./assets/home_button.png"
import platformImage from "./assets/arcade_platform.png"
import playButton from "./assets/play_button.png"
import playerImage from "./assets/player_img.png"
import rankingButton from "./assets/ranking_button.png"
import achievmentButton from "./assets/achievement_button.png"
import restartButton from "./assets/restar_button.png"
import settingsButton from "./assets/setting.png"
import spikeImage from "./assets/arcade_spike.jpeg"

import tutorialPreview from "./assets/tutorial_preview.png"
import level1Preview from "./assets/level1_preview.png"
import level2Preview from "./assets/level2_preview.png"
import level3Preview from "./assets/level3_preview.png"
import level4Preview from "./assets/level4_preview.png"
import level5Preview from "./assets/level5_preview.png"
import level6Preview from "./assets/level6_preview.png"
import level7Preview from "./assets/level7_preview.png"
import level8Preview from "./assets/level8_preview.png"
import level9Preview from "./assets/level9_preview.png"
import level10Preview from "./assets/level10_preview.png"
import level11Preview from "./assets/level11_preview.png"
import level12Preview from "./assets/level12_preview.png"


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
import desertStartBackground from "./assets/desert_background_startscreen.png"
import desertFloor from "./assets/desert_floor.png"
import desertSpike from "./assets/desert_spike.png"
import desertCrouch from "./assets/desert_crouch.png"
import desertPlatform from "./assets/desert_platform.png"

import snowBackgroound from "./assets/snow_background.png"
import snowStartBackground from "./assets/snow_background_starscreen.png"
import snowFloor from "./assets/snow_floor.png"
import snowSpike from "./assets/snow_spike.png"
import snowPlatform from "./assets/snow_platform.png"
import snowCrouch from "./assets/snow_crouch.png"

const imageAssets = [
  homeButton,
  platformImage,
  playButton,
  playerImage,
  rankingButton,
  achievmentButton,
  restartButton,
  settingsButton,
  spikeImage,
  tutorialPreview,
  level1Preview,
  level2Preview,
  level3Preview,
  level4Preview,
  level5Preview,
  level6Preview,
  level7Preview,
  level8Preview,
  level9Preview,
  level10Preview,
  level11Preview,
  level12Preview,
  arcadeBackground,
  desertBackground,
  arcadeStartBackground,
  desertStartBackground,
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
  desertPlatform,
  snowBackgroound,
  snowStartBackground,
  snowCrouch,
  snowFloor,
  snowPlatform,
  snowSpike,
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