import { Schema, MapSchema, type } from "@colyseus/schema";
import { Player } from "./PlayerState";

export class GameState extends Schema {
  @type({ map: Player })
  players: MapSchema<Player> = new MapSchema<Player>();
}