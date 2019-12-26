export class Engine {
  accumulatedTime: number;
  animationFrameRequest: any;
  time: any;
  timeStep: number;
  update: (timeStamp: number) => Promise<any>;
  updated: boolean;

  constructor(timeStep: number, update: any) {
    this.timeStep = timeStep;
    this.update = update;
    this.run = this.run.bind(this);
    this.handleRun = this.handleRun.bind(this);
  }

  run(timeStamp: any) {
    this.accumulatedTime += timeStamp - this.time;
    this.time = timeStamp;
    if (this.accumulatedTime >= this.timeStep * 3) {
      this.accumulatedTime = this.timeStep;
    }

    while (this.accumulatedTime >= this.timeStep) {
      this.accumulatedTime -= this.timeStep;
      this.update(timeStamp);
    }
    this.animationFrameRequest = window.requestAnimationFrame(this.handleRun);
  }
  handleRun(timeStep: number) {
    this.run(timeStep);
  }
  start() {
    this.accumulatedTime = this.timeStep;
    this.time = window.performance.now();
    this.animationFrameRequest = window.requestAnimationFrame(this.handleRun);
  }
  stop() {
    window.cancelAnimationFrame(this.animationFrameRequest);
  }
}
