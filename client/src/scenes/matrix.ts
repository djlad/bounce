import { Vector } from "matter";
import "phaser"
import { Physics } from "phaser";

export class MatrixScene extends Phaser.Scene
{
  cursors?: Phaser.Types.Input.Keyboard.CursorKeys;
  player?: Physics.Matter.Sprite;

  init()
  {
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  createBall(radius : number, spriteKey: string) : Phaser.Physics.Matter.Sprite {
    let ball = this.matter.add.sprite(0, 0, spriteKey);
    ball.displayWidth = radius * 2;
    ball.displayHeight = radius * 2;
    ball.setCircle(radius);
    return ball;
  }

  handleMove() : void {
    if (this.cursors?.left.isDown)
    {
      this.player?.setVelocityX(-5);
      // this.player.flipX = false;
    }
    if (this.cursors?.right.isDown)
    {
      this.player?.setVelocityX(5);
    }
    this.cursors?.up.on("up", (e: any) => {
      this.player?.setVelocityY(-5);
      // this.player?.applyForce(new Phaser.Math.Vector2(0, -.000001))
    })
  }
  preload() {
    this.load.spritesheet("slime", "assets/slime.jiggle.png", {frameWidth: 64, frameHeight: 64});
    this.load.image("ball", "assets/ball.png");
  }

  create() {
    this.cameras.main.setBackgroundColor("blue");
    this.player = this.matter.add.sprite(100,100, "slime");
    let floor = this.matter.add.rectangle(0, 500, 2000, 20);
    floor.isStatic = true;
    let ball = this.createBall(30, "ball");
    ball.setX(300);
    ball.setY(100);
    this.anims.create({
      key: 'slimewalk',
      frames: this.anims.generateFrameNumbers('slime', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });
    this.player.play("slimewalk");
  }

  update() {
   this.handleMove();
  }
}