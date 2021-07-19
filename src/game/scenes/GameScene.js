import { Scene } from 'phaser'
import Tiles from "../prefabs/Tiles"
import eventEmitter from "@/eventEmitter"
import config from "@/config"

export default class GameScene extends Scene {
  constructor () {
    super("GameScene")
  }

  create () {
    this.add.image(0, 0, 'bg').setOrigin(0)
    this.tiles = new Tiles(this)
    this.tiles.createTiles()
    this.input.on("gameobjectdown", this.onTileClicked, this)
    this.timer = config.timer
  }

  onTileClicked(pointer, tile) {
    if (!tile.canClick()) return null

    this.tiles.removeAroundSimilarTiles(tile)
    .then(tiles => {
      eventEmitter.emit("vue:addScore", tiles.count)
    })
  }

  update(time, dt) {
    this.timer = Math.max(this.timer - dt, 0)
    eventEmitter.emit("vue:updateTimer", this.timer)

    if(this.timer == 0) {
      this.stopGame()
    }
  }

  stopGame() {
    this.scene.start("StartScene", { stoped: true })
    eventEmitter.emit("vue:gameover")
  }
}
