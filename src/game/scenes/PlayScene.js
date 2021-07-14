import { Scene } from 'phaser'

export default class PlayScene extends Scene {
  constructor () {
    super("PlayScene")
  }

  create () {
    this.add.image(0, 0, 'bg').setOrigin(0)
    this.createTiles()
  }

  createTiles() {
    this.initTiles()
    this.addTiles()
  }

  initTiles(){
    this.tiles = []

    this.cols = 9
    this.rows = 9
    const { width, height } = this.textures.get("tile1").getSourceImage()
    const tilesWidth = (width * this.cols)
    const tilesHeight = (height * this.cols)
    const topOffset = (this.sys.game.config.height - tilesHeight) / 2
    const leftOffset = (this.sys.game.config.width - tilesWidth) / 2

    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        this.tiles.push({
          x: (col * width) + leftOffset,
          y: (row * height) + topOffset,
          tile: this.getRandomTile()
        })
      }
    }
  }

  addTiles() {
    this.tiles.forEach(tile => {
      this.add.image(tile.x, tile.y, tile.tile).setOrigin(0)
    })
  }

  getRandomTile() {
    return 'tile' + this.getRandomNum(1, 5)
  }

  getRandomNum(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1))
  }
}
