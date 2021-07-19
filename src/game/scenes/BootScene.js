import { Scene } from 'phaser'
import bg from '@/game/assets/bg.png'
import eventEmitter from "@/eventEmitter"
import router from "@/router"

export default class BootScene extends Scene {
  constructor () {
    super("BootScene")
  }

  preload() {
    this.load.image('bg', bg)
    this.canStartPreload = false

    eventEmitter.on("phaser:startGame", () => {
      this.canStartPreload = true
    })
    if (router.currentRoute._value.name == 'game') {
      this.canStartPreload = true
    }
  }

  update() {
    if (this.canStartPreload) {
      this.scene.start("PreloadScene")
    }
  }
}
