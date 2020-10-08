// ball object
// 10/8/2020


let ballarray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i =0; i < 25; i++) {
    ballarray.push(new Ball(random(100, width - 100), random(100, height - 100)));
  }
}

function draw() {
  background(220);

  for (let i = 0; i < ballarray.length; i++) {
    ballarray[i].move();
    for (let j = 0; j < ballarray.length; j++) {
      if (i != j) {
        ballarray[i].collisionCheck(ballarray[j]);
      }
    }
    ballarray[i].display();
  }
}

class Ball {
  constructor(x, y) {
    this.x = x;
    this.y =  y;
    this.dx = random(-5, 5);
    this.dy = random(-5, 5);
    this.radius = random(10,20);
    this.fillColour = "black";
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x <= 0 +  this.radius || this.x >= width - this.radius) {
      this.dx *= -1;
    }

    if (this.y <= 0 + this.radius || this.y >= height - this.radius) {
      this.dy *= -1;
    }
  }

  display() {
    fill(this.fillColour);
    circle(this.x, this.y, this.radius * 2);
  }

  collisionCheck(otherBall) {
    let distanceApart = dist(this.x, this.y, otherBall.x, otherBall.y);
    let sumOfRadii = this.radius + otherBall.radius;
    if (distanceApart <= sumOfRadii) {
      this.fillColour = "red";

      let tempdx = this.dx;
      let tempdy = this.dy;
      this.dx = otherBall.dx;
      this.dy = otherBall.dy;

      otherBall.dx = tempdx;
      otherBall.dy = tempdy;
    }
  }
}