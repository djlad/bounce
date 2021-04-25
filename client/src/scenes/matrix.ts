import "phaser"

export class MatrixScene extends Phaser.Scene
{
  preload() {
    console.log("preloading");
    this.load.spritesheet("slime", "assets/slime.jiggle.png", {frameWidth: 64, frameHeight: 64});
    this.load.image("ball", "assets/ball.jpeg");
  }
  create() {
    this.cameras.main.setBackgroundColor("blue");
    let player = this.matter.add.sprite(100, 100, "slime");
    let floor = this.matter.add.rectangle(0, 500, 2000, 20);
    floor.gravityScale.y = 0;
    floor.isStatic = true;
    this.matter.add.sprite(200,100, "ball");
  }
}