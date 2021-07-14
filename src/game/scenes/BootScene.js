import { Scene } from 'phaser'
import bg from '@/game/assets/bg.png'

export default class BootScene extends Scene {
  constructor () {
    super("BootScene")
  }

  preload () {
    this.load.image('bg', bg)
  }

  create () {
    this.scene.start('PlayScene')
  }
}
