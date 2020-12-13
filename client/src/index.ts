import { MatrixScene } from "./scenes/matrix";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: new MatrixScene("")
}

export function main(): void
{
  console.log("hi");
  const game: Phaser.Game = new Phaser.Game(config);
}

main();