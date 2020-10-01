// luigis tower defense
// Joshua Mason
// 10/1/2020

let grid, cellSize, cellY, cellX;
const GRIDSIZE = 25;
let bossBoo, minnionBoo;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  displayBattleMap();
}

function displayBattleMap() {
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      if ()
    }
  }
}

function preLoad() {
  bossBoo = loadImage("assets/bossBoo.png");
  minnionBoo = loadImage("assets/minnionBoo.png");
}