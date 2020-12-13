import "phaser"

export class MatrixScene extends Phaser.Scene
{
  create() {
    this.add.rectangle(200, 200, 148, 148, 0x6666ff);
  }
}