// sierpinski triangle demo
// 10/22/2020

let trianglePoints = [
  {x: 600, y: 100}, 
  {x: 100, y: 700}, 
  {x: 1100, y: 700}
];
let levelsDeep = 1;

function moousePressed() {
  levelsDeep++;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  sierpinski(trianglePoints, levelsDeep);
}

function sierpinski(points, depth) {
  let theColors = ["red", "green", "blue", "yellow"];
  fill(theColors[depth]);
  noStroke();
  
  triangle(points[0].x, points[0].y, points[1].x, points[1].y, points[2].x, points[2].y);
  
  if (depth > 0) {
    sierpinski([points[0], getMidPoint(points[0], points[1]), getMidPoint(points[0], points[2])], depth - 1);
    
    sierpinski([points[1], getMidPoint(points[0], points[1]), getMidPoint(points[1], points[2])], depth - 1);

    sierpinski([points[2], getMidPoint(points[0], points[2]), getMidPoint(points[1], points[2])], depth - 1);
  }
}

function getMidPoint(point1, point2) {
  let xdifference = point1.x + point2.x;
  let ydifference = point1.y + point2.y;
  let midPoint = {x: xdifference/2, y: ydifference/2};
  return midPoint;
}