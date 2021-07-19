import Phaser from 'phaser'
import BootScene from '@/game/scenes/BootScene'
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
    scene: [BootScene, GameScene]
  })
}

export default launch
export { launch }
