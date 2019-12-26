import { PlayerI } from "../gameobjects/player";
import * as PlayerCommands from "../gameobjects/commands";
export const update = (keyCode: number, type: string, player: PlayerI) => {
  switch (keyCode) {
    case 37:
      if (type === "keydown") player.playerMove(PlayerCommands.PLAYER_LEFT);
      break;
    case 38:
      console.log("arrowup", type);
      if (type === "keydown") player.playerMove(PlayerCommands.PLAYER_UP);
      break;
    case 39:
      console.log("arrowright", type);
      if (type === "keydown") player.playerMove(PlayerCommands.PLAYER_RIGHT);
      break;
    case 40:
      console.log("arrowDonw", type);
      if (type === "keydown") player.playerMove(PlayerCommands.PLAYER_DOWN);
      break;
    default:
      break;
  }
};
