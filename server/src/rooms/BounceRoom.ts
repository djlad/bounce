import { Room, Client } from "colyseus";
import { GameState } from "./schema/GameState";


export class BounceRoom extends Room<GameState> {
  /* Main game room
  */

  onCreate (options: any) {
    this.setState(new GameState());

    this.onMessage("type", (client, message) => {
    });
  }

  onJoin(client: Client, options: any) {
  }

  onLeave (client: Client, consented: boolean) {
  }

  onDispose() {
  }

}
