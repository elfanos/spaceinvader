import ControllerKeyboard from "./spaceinvader/board/controller";
import { Display } from "./spaceinvader/board/display";
window.onload = () => {
  const gameBoard = document.createElement("div");

  gameBoard.style.width = "50%";
  gameBoard.style.height = "50%";
  gameBoard.style.backgroundColor = "black";

  const board = document.createElement("canvas").getContext("2d");
  const boardCanvas = <HTMLCanvasElement>document.getElementById("game-board");
  boardCanvas.height = 1000;
  boardCanvas.width = 1000;
  const GameBoard = Display(boardCanvas);
  GameBoard.render();
  GameBoard.fill("#eb4034");
  GameBoard.render();
};
