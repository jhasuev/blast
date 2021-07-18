import { Scene } from 'phaser'
import Tiles from "../prefabs/Tiles"
import eventEmitter from "@/eventEmitter"

export default class PlayScene extends Scene {
  constructor () {
    super("PlayScene")
  }

  create () {
    this.add.image(0, 0, 'bg').setOrigin(0)
    this.tiles = new Tiles(this)
    this.tiles.createTiles()
    this.input.on("gameobjectdown", this.onTileClicked, this)
    this.canClick = true
    
    eventEmitter.on("phaser:stopGaming", () => {
      this.scene.start("BootScene", { stoped: true })
    })
  }

  onTileClicked(pointer, tile) {
    if (!this.canClick) return null
    this.canClick = false

    this.tiles.removeAroundSimilarTiles(tile)
    .then(tiles => {
      eventEmitter.emit("vue:addScore", tiles.count)
    })
    .catch(() => {
      this.canClick = true
    })
  }

  update(time, dt) {
    eventEmitter.emit("vue:updateTimer", dt)
  }
}
