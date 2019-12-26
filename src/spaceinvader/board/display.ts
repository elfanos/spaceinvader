interface ViewPort {
  width: number;
  height: number;
}

function drawRectangle(
  x: number,
  y: number,
  width: number,
  height: number,
  color: string,
  canvas: HTMLCanvasElement,
  previousPosition: any
) {
  const context = canvas.getContext("2d");
  context.fillStyle = color;
  console.log(previousPosition.x, previousPosition.y);
  console.log(x, y);
  context.clearRect(
    Math.floor(previousPosition.x),
    Math.floor(previousPosition.y),
    width,
    height
  );
  context.fillRect(Math.floor(x), Math.floor(y), width, height);
}

function fill(color: string, canvas: HTMLCanvasElement) {
  const context = canvas.getContext("2d");

  context.fillStyle = color;
  context.fillRect(0, 0, context.canvas.width, context.canvas.height);
}

function renderCanvas(
  canvas: HTMLCanvasElement,
  bufferCanvas: HTMLCanvasElement
) {
  const context = canvas.getContext("2d");
  const bufferContext = bufferCanvas.getContext("2d");
  context.drawImage(
    bufferContext.canvas,
    0,
    0,
    bufferContext.canvas.width,
    bufferContext.canvas.height,
    0,
    0,
    context.canvas.width,
    context.canvas.height
  );
}
function resize(ratio: number, canvas: HTMLCanvasElement): void {
  const windowViewPort: ViewPort = {
    width: window.innerWidth,
    height: window.innerHeight
  };
  const gameViewPort: ViewPort = {
    width: canvas.width,
    height: canvas.height
  };
  const margin = 15;
  const gameRatio = canvas.width / canvas.height;

  canvas.width = windowViewPort.width - margin;
  //check ratio
  if (
    ratio > gameRatio ||
    // #TODO should not be hardcoded
    gameViewPort.height + margin + 15 > windowViewPort.height
  ) {
    canvas.height -= 1;
    resize(ratio, canvas);
  }
  if (gameViewPort.height + margin + 15 < windowViewPort.height) {
    if (gameRatio >= ratio + 0.2) {
      canvas.height = windowViewPort.height - margin - 15;
      resize(ratio, canvas);
    }
  }
}

export const Display = (canvas: HTMLCanvasElement) => {
  const bufferCanvas = document.createElement("canvas");
  return {
    render: () => renderCanvas(canvas, bufferCanvas),
    fill: (color: string) => fill(color, canvas),
    drawRectangle: (
      x: number,
      y: number,
      width: number,
      height: number,
      color: string,
      previousPosition: any
    ) =>
      drawRectangle(x, y, width, height, color, bufferCanvas, previousPosition),
    resize: (ratio: number) => resize(ratio, canvas)
  };
};
