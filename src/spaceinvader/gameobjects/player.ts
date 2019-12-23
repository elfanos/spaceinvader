import * as GameObjects from "./gameobject.types";
import * as PlayerCommands from "./commands";

const move = (
  direction: string,
  coordinates: GameObjects.coordinates,
  movement: GameObjects.movement
): void => {
  switch (direction) {
    case PlayerCommands.PLAYER_LEFT:
      coordinates.x -= movement.x;
      break;
    case PlayerCommands.PLAYER_RIGHT:
      coordinates.x += movement.x;
      break;
    case PlayerCommands.PLAYER_UP:
      coordinates.y += movement.y;
      break;
    case PlayerCommands.PLAYER_DOWN:
      coordinates.y -= movement.y;
      break;
  }
};
export interface PlayerI {
  playerMove: (direction: string) => void;
  coordinates: GameObjects.coordinates;
  movement: GameObjects.movement;
  color: string;
  height: number;
  width: number;
}
export const Player = (
  coordinates: GameObjects.coordinates,
  movement: GameObjects.movement,
  color: string,
  height: number,
  width: number
): PlayerI => ({
  playerMove: (direction: string) => move(direction, coordinates, movement),
  coordinates,
  movement,
  color,
  height,
  width
});
