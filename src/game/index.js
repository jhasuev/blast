import Phaser from 'phaser'
import BootScene from '@/game/scenes/BootScene'
import PreloadScene from '@/game/scenes/PreloadScene'
import StartScene from '@/game/scenes/StartScene'
import GameScene from '@/game/scenes/GameScene'

function launch(containerId) {
  return new Phaser.Game({
    type: Phaser.AUTO,
    width: 1635,
    height: 1819,
    transparent: true,
    parent: containerId,
    physics: {
      default: 'arcade',
      arcade: {
        debug: false
      }
    },
    scene: [BootScene, PreloadScene, StartScene, GameScene]
  })
}

export default launch
export { launch }
