import { Player } from "./Player";
import * as PlayerCommands from "./commands";

describe("Player test", () => {
  it("Player Test move", () => {
    const newPlayer = Player({ x: 2, y: 2 }, { x: 1, y: 1 }, "red", 10, 20);
    newPlayer.playerMove(PlayerCommands.PLAYER_LEFT);
    expect(newPlayer.coordinates.x).toBe(1);
    newPlayer.playerMove(PlayerCommands.PLAYER_DOWN);
    expect(newPlayer.coordinates.y).toBe(1);
  });
});
