import { Player } from "./Player";
import * as PlayerCommands from "./commands";

describe("Player test", () => {
  it("Player Test move", () => {
    const coordinates = { x: 2, y: 2 };
    const movement = { x: 1, y: 1 };
    const previousPosition = {
      x: 1,
      y: 1
    };
    const newPlayer = Player({
      coordinates,
      movement,
      color: "red",
      width: 10,
      height: 20,
      previousPosition
    });
    newPlayer.playerMove(PlayerCommands.PLAYER_LEFT);
    expect(newPlayer.property.coordinates.x).toBe(1);
    newPlayer.playerMove(PlayerCommands.PLAYER_DOWN);
    expect(newPlayer.property.coordinates.y).toBe(1);
  });
  it("Player Test move previous position", () => {
    const coordinates = { x: 2, y: 2 };
    const movement = { x: 1, y: 1 };
    const previousPosition = {
      x: 2,
      y: 2
    };
    const newPlayer = Player({
      coordinates,
      movement,
      color: "red",
      width: 10,
      height: 20,
      previousPosition
    });
    newPlayer.playerMove(PlayerCommands.PLAYER_RIGHT);
    newPlayer.playerMove(PlayerCommands.PLAYER_DOWN);
    newPlayer.playerMove(PlayerCommands.PLAYER_RIGHT);
    newPlayer.playerMove(PlayerCommands.PLAYER_DOWN);
    expect(JSON.stringify({ x: 4, y: 3 })).toBe(
      JSON.stringify(newPlayer.property.previousPosition)
    );
  });
});
