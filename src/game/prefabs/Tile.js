import Phaser from 'phaser'

export default class Tile extends Phaser.GameObjects.Sprite {
  constructor(params) {
    super(params.scene, 0, 0, params.tile);
    this.scene = params.scene
    this.tile = params.tile
    this.row = params.rowIndex
    this.col = params.colIndex

    this.setPosition(params.x, params.y)
    // this.setOrigin(0)

    this.scene.add.existing(this)
    this.setInteractive()
  }

  static generate(params) {
    return new this({
      ...params,
      tile: 'tile' + Phaser.Math.Between(1, 5)
    })
  }

  kill() {
    return new Promise(resolve => {
      this.scene.tweens.add({
        targets: this,
        ease: "Linear",
        duration: 100,
        scale: 0,
        onComplete(){
          resolve()
        }
      })
    })
  }
}
