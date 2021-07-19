import { Scene } from 'phaser'
import eventEmitter from "@/eventEmitter"
import router from "@/router"

import bg from '@/game/assets/bg.png'
import tile1 from '@/game/assets/tiles/1.png'
import tile2 from '@/game/assets/tiles/2.png'
import tile3 from '@/game/assets/tiles/3.png'
import tile4 from '@/game/assets/tiles/4.png'
import tile5 from '@/game/assets/tiles/5.png'

export default class BootScene extends Scene {
  constructor () {
    super("BootScene")
  }

  preload () {
    this.load.image('bg', bg)
    this.load.image('tile1', tile1)
    this.load.image('tile2', tile2)
    this.load.image('tile3', tile3)
    this.load.image('tile4', tile4)
    this.load.image('tile5', tile5)
  }

  create(state) {
    if (state.stoped) return null

    eventEmitter.on("phaser:startGame", () => this.scene.start('GameScene'))
    if(router.currentRoute._value.name == 'game') {
      this.scene.start('GameScene')
    }
  }
}
