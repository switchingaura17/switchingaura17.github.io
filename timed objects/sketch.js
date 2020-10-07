// timer demo
// 10/7/2020

let blinkTime;

function setup() {
  createCanvas(windowWidth, windowHeight);
  blinkTime = new Timer(1500);
}

function draw() {
  if (blinkTime.ifDone()) {
    background("red");
  }
  else {
    background("white");
  }


}

class Timer {
  constructor(waitTime) {
    this.waitTime = waitTime;
    this.begintime = millis();
    this.endTime = this.begineTime + this.waitTime;

  }

  ifDone() {
    return millis()  >= this.endTime;
  }

  reset() {
    this.begintime = millis();
    this.endTime = this.begineTime + this.waitTime;

  }

}