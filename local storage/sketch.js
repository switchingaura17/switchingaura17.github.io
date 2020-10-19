// local storage
// 10/19/2020
let numberOfClicks = 0;
let highScore = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  highScore = getItem("maxClicks");
}

function draw() {
  background(220);
  showClicks();
  highestClickScore();
}

function mousePressed() {
  numberOfClicks++;
  storeItem("maxClicks", numberOfClicks);
}

function showClicks() {
  fill("black");
  textSize(90);
  textLeading(CENTER, CENTER);
  text(numberOfClicks, width/2, height/2);
}

function highestClickScore() {
  fill("red");
  textSize(40);
  text(highScore, width/2, height/2 + 150);
}