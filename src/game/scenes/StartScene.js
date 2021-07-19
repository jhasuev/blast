import { Scene } from 'phaser'
import eventEmitter from "@/eventEmitter"
import router from "@/router"

export default class StartScene extends Scene {
  constructor() {
    super("StartScene")
  }

  create(state) {
    if (state.stoped) return null

    eventEmitter.on("phaser:startGame", () => this.scene.start('GameScene'))
    if (router.currentRoute._value.name == 'game') {
      this.scene.start('GameScene')
    }
  }
}
