import Phaser from "phaser"
import Tile from "./Tile"

export default class Tiles extends Phaser.Physics.Arcade.Group {
  constructor(scene) {
    super(scene.physics.world, scene)
    this.scene = scene
    this.cols = 9
    this.rows = 9
  }

  createTiles() {
    this.positions = this.getTilesPositions()

    this.positions.forEach((row, rowIndex) => {
      row.forEach((tile, colIndex) => {
        this.add(Tile.generate({
          rowIndex,
          colIndex,
          ...tile,
          scene: this.scene
        }))
      })
    })
  }

  getTilesPositions() {
    let positions = []

    const { width, height } = this.scene.textures.get("tile1").getSourceImage()
    const tilesWidth = width * this.cols
    const tilesHeight = height * this.rows
    const topOffset = (this.scene.sys.game.config.height - tilesHeight) / 2 + (height / 2)
    const leftOffset = (this.scene.sys.game.config.width - tilesWidth) / 2 + (width / 2)

    for (let row = 0; row < this.rows; row++) {
      positions.push([])
      for (let col = 0; col < this.cols; col++) {
        positions[row].push({
          x: (col * width) + leftOffset,
          y: (row * height) + topOffset
        })
      }
    }

    return positions
  }

  removeAroundSimilarTiles(tile) {
    const tiles = this.getAroundSimilarTiles(tile)

    if (tiles.length > 1) {
      tiles.forEach((tile, i) => {
        tile.kill().then(() => {
          if(tiles.length === (i + 1)) {
            console.log('killed');
          }
        })
      })
    }
  }

  getAroundSimilarTiles(tile) {
    const tiles = [ tile ]

    for (let i = 0; i < tiles.length; i++) {
      const tile = tiles[i]
      const { row, col } = tile

      const aroundTiles = [
        this.getTile(row, col - 1),
        this.getTile(row, col + 1),
        this.getTile(row - 1, col),
        this.getTile(row + 1, col)
      ]

      aroundTiles.forEach(aroundTile => {
        if (aroundTile?.tile == tile.tile && !tiles.includes(aroundTile)) {
          tiles.push(aroundTile)
        }
      })
    }

    return tiles
  }

  getTile(row, col) {
    return this.getChildren().find(tile => tile.row === row && tile.col === col)
  }
}
