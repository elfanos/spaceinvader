import * as GameObjects from "./gameobject.types";
import * as PlayerCommands from "./commands";

const decrement = (position: number, movement: number) =>
  (position -= movement);

const increment = (position: number, movement: number) =>
  (position += movement);

const move = (direction: string, property: PlayerProps): PlayerProps => {
  switch (direction) {
    case PlayerCommands.PLAYER_LEFT:
      return Object.assign(property, {
        previousPosition: {
          ...property.coordinates
        },
        coordinates: {
          ...property.coordinates,
          x: decrement(property.coordinates.x, property.movement.x)
        }
      });
    case PlayerCommands.PLAYER_RIGHT:
      return Object.assign(property, {
        previousPosition: {
          ...property.coordinates
        },
        coordinates: {
          ...property.coordinates,
          x: increment(property.coordinates.x, property.movement.x)
        }
      });
    case PlayerCommands.PLAYER_UP:
      return Object.assign(property, {
        previousPosition: {
          ...property.coordinates
        },
        coordinates: {
          ...property.coordinates,
          y: decrement(property.coordinates.y, property.movement.y)
        }
      });
    case PlayerCommands.PLAYER_DOWN:
      return Object.assign(property, {
        previousPosition: {
          ...property.coordinates
        },
        coordinates: {
          ...property.coordinates,
          y: increment(property.coordinates.y, property.movement.y)
        }
      });
    default:
      return property;
  }
};
export interface PlayerProps {
  coordinates: GameObjects.coordinates;
  movement: GameObjects.movement;
  color: string;
  height: number;
  width: number;
  previousPosition: GameObjects.coordinates;
}
export interface PlayerI {
  playerMove: (direction: string) => PlayerProps;
  property: PlayerProps;
}
export const Player = (property: PlayerProps): PlayerI => {
  return {
    playerMove: (direction: string) => move(direction, property),
    property
  };
};
