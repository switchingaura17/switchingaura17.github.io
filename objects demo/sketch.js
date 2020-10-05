// onjects intro
//10/5/2020

let richard;
let april;

function setup() {
  createCanvas(windowWidth, windowHeight);
  richard = new Walker(width/2, height/2, "red");
  april = new Walker(200,100,"green");
}

function draw() {
  // background(220);

  richard.move();
  april.move();
  richard.display();
  april.display();
}

class Walker {
  constructor(x, y, theColour) {
    this.x = x;
    this.y = y;
    this.colour = theColour;
  }
  move() {
    let choice = random(100);
    if (choice < 25) {
      this.x -= 1;
    }
    else if (choice < 50) {
      this.x += 1;
    }
    else if (choice < 75) {
      this.y -= 1;
    }
    else {
      this.y += 1;
    }
  }

  display() {
    noStroke();
    fill(this.colour);
    circle(this.x, this.y, 20);
  }
}