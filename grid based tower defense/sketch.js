// luigis tower defense
// Joshua Mason
// 10/1/2020

let grid, cellWidth, cellHeight, cellY, cellX, cell;
const GRIDSIZE = 25;
let bossBoo, bossBooScaler = 0.5; 
let minnionBoo, minnionHealthBar, hit = 50, minnionBooScaler = 0.3;
let baseMap, initialState;
let moveMinnionBoo = new Map();
let pear;

function preload() {
  bossBoo = loadImage("assets/bossBoo.png");

  minnionBoo = loadImage("assets/minnionBoo.png");

  baseMap = loadStrings("assets/1.txt");

  initialState = loadStrings("assets/2.txt");

  pear = loadImage("assets/pear.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < baseMap.length; i++) {
    baseMap[i] = baseMap[i].split(",");
  }
  for (let y=0; y<GRIDSIZE; y++) {
    for (let x=0; x<GRIDSIZE; x++) {
      baseMap[y][x] = int(baseMap[y][x]);
    }
  }

  grid = baseMap;
  cellWidth = width / grid[0].length;
  cellHeight = height / grid.length;
  // minnionBoo = new Minnion(0, height/2);
}

function draw() {
  background(220);

  // placeMinnion();
  displayBattleMap();
  displayMinnionBoo();
  ifMinnionHit();
  // Minnion.move();
  // Minnion.display();
  moveMinnionBoo.set("minnionBoo", 2);
}

function displayBattleMap() {
  for (let y=0; y<grid.length; y++) {
    for (let x=0; x<grid[y].length; x++) {
      if (grid[y][x] === 0) {
        fill("green");
      }
      else {
        fill("black");
      }
      
      rect(cellWidth*x, cellHeight*y, cellWidth, cellHeight);
    }
  }
  
}

function generateEmptyGrid(gridSize) {
  let grid = [];
  for (let i=0; i<gridSize; i++) {
    grid.push([]);
    for (let j=0; j<gridSize; j++) {
      grid[i].push(0);
    }
    
  }
  return grid;
}

function displayMinnionBoo() {
  image(minnionBoo, 0, height / 2.2, minnionBooScaler * minnionBoo.width, minnionBooScaler * minnionBoo.height);

  fill("red");
  minnionHealthBar = rect(30, height / 2.15, hit, 10);
  

}

function ifMinnionHit() {
  if (pear.radius <= minnionBoo.radius + pear.radius) {
    for (let hit = 50; hit > 0; hit -= 10) {
      return "hit";
    }
  }
}
