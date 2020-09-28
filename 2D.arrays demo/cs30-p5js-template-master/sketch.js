let grid;

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = generateRandomGrid(10);

}

function draw() {
  background(220);
}

function generateRandomGrid(gridsize) {
  let grid = [];
  for (let i=0; i<gridsize; i++) {
    grid.push([]);
    for (let j=0; j<gridsize; j++) {
      if (random(100) < 50) {
        grid[i].push(0);
      }
      else {
        grid[i].push(1);
      }
    }
  }
  return grid;
}

function displayGrid() {
  
}