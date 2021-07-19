import Phaser from 'phaser'

export default class Tile extends Phaser.GameObjects.Sprite {
  constructor(params) {
    super(params.scene, 0, 0, params.tile);
    this.scene = params.scene
    this.tile = params.tile
    this.row = params.rowIndex
    this.col = params.colIndex
    this.isMoving = false
    this.isKilling = false

    this.setPosition(params.x, params.y)

    this.scene.add.existing(this)
    this.scene.physics.add.existing(this)
    this.body.enable = true
    this.setInteractive()
  }

  static generatedData(params = {}) {
    return {
      ...params,
      tile: 'tile' + Phaser.Math.Between(1, 5)
    }
  }

  static generate(params = {}) {
    const tile = new this(Tile.generatedData({ ...params, y: 0 }))
    tile.moveY(params.y)
    return tile
  }

  kill() {
    this.isKilling = true
    return new Promise(resolve => {
      this.scene.tweens.add({
        targets: this,
        ease: "Linear",
        duration: 100,
        scale: 0,
        onComplete: () =>{
          this.setScale(1)
          this.setAlive(false)
          resolve()
          this.isKilling = false
        }
      })
    })
  }

  moveY(y) {
    this.isMoving = true
    this.scene.tweens.add({
      y,
      targets: this,
      ease: "Bounce.Out",
      duration: 500,
      delay: Phaser.Math.Between(1, 50),
      onComplete: () => {
        this.isMoving = false
      }
    })
  }

  canClick() {
    return !this.isMoving && !this.isKilling
  }

  restart() {
    this.setAlive(true)
    this.tile = Tile.generatedData().tile
    this.setTexture(this.tile)
  }

  setAlive(status) {
    this.body.enable = status
    this.setVisible(status)
    this.setActive(status)
  }
}
