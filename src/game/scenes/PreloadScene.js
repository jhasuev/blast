import LoadingBar from "../classes/LoadingBar"
import { Scene } from 'phaser'
import tile1 from '@/game/assets/tiles/1.png'
import tile2 from '@/game/assets/tiles/2.png'
import tile3 from '@/game/assets/tiles/3.png'
import tile4 from '@/game/assets/tiles/4.png'
import tile5 from '@/game/assets/tiles/5.png'

export default class PreloadScene extends Scene {
  constructor() {
    super("PreloadScene")
  }

  preload() {
    this.add.image(0, 0, 'bg').setOrigin(0)
    this.LoadingBar = new LoadingBar(this)

    this.load.image('tile1', tile1)
    this.load.image('tile2', tile2)
    this.load.image('tile3', tile3)
    this.load.image('tile4', tile4)
    this.load.image('tile5', tile5)
  }

  create() {
    this.scene.start("StartScene")
  }
}