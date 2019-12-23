// Frank Poth 02/28/2018

/* This is a fixed time step game loop. It can be used for any game and will ensure
that game state is updated at the same rate across different devices which is important
for uniform gameplay. Imagine playing your favorite game on a new phone and suddenly
it's running at a different speed. That would be a bad user experience, so we fix
it with a fixed step game loop. In addition, you can do things like frame dropping
and interpolation with a fixed step loop, which allow your game to play and look
smooth on slower devices rather than freezing or lagging to the point of unplayability. */
export class Engine {
  accumulatedTime: number;
  animationFrameRequest: any;
  time: any;
  timeStep: number;
  update: any;
  render: any;
  updated: boolean;

  constructor(timeStep: number, update: any, render: any) {
    this.timeStep = timeStep;
    this.render = render;
    this.update = update;
  }

  run(timeStamp: any) {
    this.accumulatedTime += timeStamp - this.time;
    this.time = timeStamp;

    if (this.accumulatedTime >= this.timeStep * 3) {
      this.accumulatedTime = this.timeStep;
    }

    while (this.accumulatedTime >= this.timeStep) {
      this.update(timeStamp);
      this.updated = true;
    }

    if (this.updated) {
      this.update = false;
      this.render(timeStamp);
    }
    this.animationFrameRequest = window.requestAnimationFrame(this.handleRun);
  }
  handleRun(timeStep: number) {
    console.log("running");
    this.run(timeStep);
  }
  start() {
    console.log("start");
    this.accumulatedTime = this.timeStep;
    this.time = window.performance.now();
    this.animationFrameRequest = window.requestAnimationFrame(this.handleRun);
  }
  stop() {
    window.cancelAnimationFrame(this.animationFrameRequest);
  }
}
