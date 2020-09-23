// traffic_light
// Joshua
// 9/23/2020

let whichColourToDisplay = "green";
let lastLightSwitchTime = 0;
let greenLightDuration = 4000;
let yellowLightDuration = 1000;
let redLightDuration = 4000;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  drawOutLineOfLights();
  chooseWhichLightToDisplay();
  showCorrectLight();
}

function drawOutLineOfLights() {
  //box
  rectMode(CENTER);
  fill("black");
  rect(width/2, height/2, 75, 200, 10);

  //lights
  fill("white");
  circle(width/2, height/2, 50); // middle
  circle(width/2, height/2 - 65, 50); //top
  circle(width/2, height/2 + 65, 50); // bottom
}

function showCorrectLight() {
  if (whichColourToDisplay === "red") {
    fill("red");
    circle(width/2, height/2 - 65, 50); //top
  }
  else if (whichColourToDisplay === "yellow") {
    fill("yellow");
    circle(width/2, height/2, 50); // middle
  }
  else if (whichColourToDisplay === "green") {
    fill("green");
    circle(width/2, height/2 + 65, 50); // bottom
  }
}

function chooseWhichLightToDisplay() {
  if (whichColourToDisplay === "green") {
    if (millis() > lastLightSwitchTime + greenLightDuration) {
      whichColourToDisplay = "yellow";
      lastLightSwitchTime = millis();
    }
  }
  if (whichColourToDisplay === "yellow") {
    if (millis() > lastLightSwitchTime + yellowLightDuration) {
      whichColourToDisplay = "red";
      lastLightSwitchTime = millis();
    }
  }
  if (whichColourToDisplay === "red") {
    if (millis() > lastLightSwitchTime + redLightDuration) {
      whichColourToDisplay = "green";
      lastLightSwitchTime = millis();
    }
  }
}
