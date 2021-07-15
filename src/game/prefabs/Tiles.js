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

    for (let row = 0; row < this.rows; row++) {
      positions.push([])
      for (let col = 0; col < this.cols; col++) {
        positions[row].push(this.getPositionByIndexes(row, col))
      }
    }

    return positions
  }

  getPositionByIndexes(row, col) {
    const { width, height } = this.scene.textures.get("tile1").getSourceImage()
    const tilesWidth = width * this.cols
    const tilesHeight = height * this.rows
    const topOffset = (this.scene.sys.game.config.height - tilesHeight) / 2 + (height / 2)
    const leftOffset = (this.scene.sys.game.config.width - tilesWidth) / 2 + (width / 2)

    return {
      x: (col * width) + leftOffset,
      y: (row * height) + topOffset
    }
  }

  removeAroundSimilarTiles(tile) {
    const tiles = this.getAroundSimilarTiles(tile)

    if (tiles.length > 1) {
      tiles.forEach((tile, i) => {
        tile.kill().then(() => {
          if(tiles.length === (i + 1)) {
            this.addTiles()
          }
        })
      })
    }
  }

  addTiles() {
    // ряды Y, для дальнейшей работы
    let rows = []
    this.getChildren().forEach(tile => {
      if (!rows[tile.col]) rows[tile.col] = []
      rows[tile.col].push(tile)
    })

    // в каждом ряду
    rows.forEach(row => {
      let mustMove = false

      // отмечаем сразу неактивные тайлы
      row.forEach(tile => {
        if (!tile.active) {
          mustMove = true
          // сдвигаем тайл вверх, потом, анимируя, спустим его
          tile.y = -222
          tile.row = -tile.row - 1
          tile.restart()
        }
      })

      // сортируем итый ряд, чтобы можно было потом добавить индексы как значение для ряда
      row.sort((a, b) => a.row - b.row)

      row.forEach((tile, rowIndex) => {
        if (mustMove) {
          // собственно в row указываем соответсвующий индекс тайла, относительно которой спустим тайл
          tile.row = rowIndex
          const y = this.getPositionByIndexes(tile.row, tile.col).y
          if (y != tile.y) {
            // анимируем тайлы
            tile.moveY(y)
          }
        }
      })

    })

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
