import { MatrixScene } from "./scenes/matrix";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  scene: new MatrixScene(""),
  physics: {
    default: 'matter',
    matter: {
        enableSleeping: true,
        gravity: {
            y: 1
        },
        debug: {
            showBody: true,
            showStaticBody: true
        }
    }
  }
}

export function main(): void
{
  console.log("hi");
  const game: Phaser.Game = new Phaser.Game(config);
}

main();