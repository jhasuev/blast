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
  }

  onTileClicked(pointer, tile) {
    this.tiles.removeAroundSimilarTiles(tile).then(tiles => {
      eventEmitter.emit("addScore", tiles.count)
    })
  }
}
