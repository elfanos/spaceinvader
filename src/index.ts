import { update as PlayerUpdate } from "./spaceinvader/board/playercontroller";
import { Display } from "./spaceinvader/board/display";
import { Engine } from "./spaceinvader/engine";
import { Player } from "./spaceinvader/gameobjects/Player";
window.onload = () => {
  const gameBoard = document.createElement("div");

  gameBoard.style.width = "50%";
  gameBoard.style.height = "50%";
  gameBoard.style.backgroundColor = "black";

  const boardCanvas = <HTMLCanvasElement>document.getElementById("game-board");
  boardCanvas.height = 1000;
  boardCanvas.width = 1000;
  const GameBoard = Display(boardCanvas);
  const coordinates = { x: 50, y: 50 };
  const movement = { x: 10, y: 10 };
  const color = "#fcba03";
  const GamePlayer = Player({
    coordinates,
    movement,
    color,
    height: 50,
    width: 50,
    previousPosition: coordinates
  });
  const update = async () => {
    GameBoard.resize(1);
  };

  const updateGame = async () => {
    await update();
    GameBoard.fill("#eb4034");
    GameBoard.render();
    GameBoard.drawRectangle(
      GamePlayer.property.coordinates.x,
      GamePlayer.property.coordinates.y,
      GamePlayer.property.width,
      GamePlayer.property.height,
      GamePlayer.property.color,
      GamePlayer.property.previousPosition
    );
  };

  const keyDownUp = (event: any) => {
    PlayerUpdate(event.keyCode, event.type, GamePlayer);
  };

  const GameEngine = new Engine(1000 / 30, updateGame);

  GameEngine.start();

  window.addEventListener("keydown", keyDownUp);
  window.addEventListener("keyup", keyDownUp);
};
