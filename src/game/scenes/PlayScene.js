import { Scene } from 'phaser'

export default class PlayScene extends Scene {
  constructor () {
    super("PlayScene")
  }

  create () {
    console.log('bg');
    this.add.image(0, 0, 'bg').setOrigin(0)
  }

  update () {
  }
}
