// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let numberOfRect = 10;
let rectHeights = [];
let rectWidth;


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectWidth = width/numberOfRect;
  setTheHeights();
}

function draw() {
  background(220);
  displayRects();
}

function setTheHeights() {
  for (let i = 0; i < numberOfRect; i++) {
    rectHeights.push(random(1, height));    
  }
}

function displayRects() {
  for (let i = 0; i < numberOfRect; i++) {
    fill("black");
    rect(i*rectWidth, height - rectHeights[i], rectWidth, rectHeights[i]);
  }
}