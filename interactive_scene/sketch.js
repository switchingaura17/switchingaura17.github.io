let mario, bulletBillCannon, bulletBill, radius, bg, endMe;
let bulletBillScaler = 0.07,
  marioScaler = 0.1,
  bulletBillCannonScaler = 0.3;
let marioX, marioY, bulletBillCannonX, bulletBillCannonY, bulletBillX, bulletBillY;
let state = false,
  hit = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  bulletBillCannon = loadImage("bulletBillCannon.png");
  mario = loadImage("mario.png");
  bulletBill = loadImage("bulletBill.png");
  bg = loadImage("hotdog.png");
  endMe = loadImage("endMe.png");


  radius = width * 0.1
  marioX = width / 2
  marioY = height / 2
  bulletBillCannonX = width - bulletBillCannon.width + 15
  bulletBillCannonY = height / 1.85
  bulletBillX = width - bulletBill.width + 15
  bulletBillY = height / 1.99


}

function draw() {
  // background(bg);
  imageMode(CORNER);
  image(bg, 0, 0, width, height);
  
  // hit = collideRectRect( bulletBillX, bulletBillY - 350, bulletBill.width * bulletBillScaler, bulletBill.height * bulletBillScaler, marioX - 1.51, marioY - 1.5, mario.width * marioScaler, mario.height * marioScaler);

  handleKeys();
  displayMario();
  displayBulletBill();
  displayBulletBillCannon();
  moveBulletBill();
  hitMario();
  isMarioHit();
}

function handleKeys() {
  if (keyIsDown(87)) {
    marioY -= 5;
  }
  if (keyIsDown(83)) {
    marioY += 5;
  }
  if (keyIsDown(68)) {
    marioX += 5;
  }
  if (keyIsDown(65)) {
    marioX -= 5;
  }
  if (keyIsDown(82)) {
    
  }
}

function displayBulletBillCannon() {
  imageMode(CENTER)
  image(bulletBillCannon, bulletBillCannonX, bulletBillCannonY - 350, bulletBillCannon.width * bulletBillCannonScaler, bulletBillCannon.height * bulletBillCannonScaler)

  image(bulletBillCannon, bulletBillCannonX, bulletBillCannonY - 300, bulletBillCannon.width * bulletBillCannonScaler, bulletBillCannon.height * bulletBillCannonScaler)

  image(bulletBillCannon, bulletBillCannonX, bulletBillCannonY - 250, bulletBillCannon.width * bulletBillCannonScaler, bulletBillCannon.height * bulletBillCannonScaler)


  image(bulletBillCannon, bulletBillCannonX, bulletBillCannonY - 200, bulletBillCannon.width * bulletBillCannonScaler, bulletBillCannon.height * bulletBillCannonScaler)

  image(bulletBillCannon, bulletBillCannonX, bulletBillCannonY - 150, bulletBillCannon.width * bulletBillCannonScaler, bulletBillCannon.height * bulletBillCannonScaler)

  image(bulletBillCannon, bulletBillCannonX, bulletBillCannonY - 100, bulletBillCannon.width * bulletBillCannonScaler, bulletBillCannon.height * bulletBillCannonScaler)

  image(bulletBillCannon, bulletBillCannonX, bulletBillCannonY - 50, bulletBillCannon.width * bulletBillCannonScaler, bulletBillCannon.height * bulletBillCannonScaler)

  image(bulletBillCannon, bulletBillCannonX, bulletBillCannonY, bulletBillCannon.width * bulletBillCannonScaler, bulletBillCannon.height * bulletBillCannonScaler)

  image(bulletBillCannon, bulletBillCannonX, bulletBillCannonY + 50, bulletBillCannon.width * bulletBillCannonScaler, bulletBillCannon.height * bulletBillCannonScaler)

  image(bulletBillCannon, bulletBillCannonX, bulletBillCannonY + 100, bulletBillCannon.width * bulletBillCannonScaler, bulletBillCannon.height * bulletBillCannonScaler)

  image(bulletBillCannon, bulletBillCannonX, bulletBillCannonY + 150, bulletBillCannon.width * bulletBillCannonScaler, bulletBillCannon.height * bulletBillCannonScaler)

  image(bulletBillCannon, bulletBillCannonX, bulletBillCannonY + 200, bulletBillCannon.width * bulletBillCannonScaler, bulletBillCannon.height * bulletBillCannonScaler)

  image(bulletBillCannon, bulletBillCannonX, bulletBillCannonY + 250, bulletBillCannon.width * bulletBillCannonScaler, bulletBillCannon.height * bulletBillCannonScaler)
}


function displayBulletBill() {
  imageMode(CENTER)
  image(bulletBill, bulletBillX, bulletBillY - 350, bulletBill.width * bulletBillScaler, bulletBill.height * bulletBillScaler)

  image(bulletBill, bulletBillX, bulletBillY - 300, bulletBill.width * bulletBillScaler, bulletBill.height * bulletBillScaler)

  image(bulletBill, bulletBillX, bulletBillY - 250, bulletBill.width * bulletBillScaler, bulletBill.height * bulletBillScaler)

  image(bulletBill, bulletBillX, bulletBillY - 200, bulletBill.width * bulletBillScaler, bulletBill.height * bulletBillScaler)

  image(bulletBill, bulletBillX, bulletBillY - 150, bulletBill.width * bulletBillScaler, bulletBill.height * bulletBillScaler)

  image(bulletBill, bulletBillX, bulletBillY - 100, bulletBill.width * bulletBillScaler, bulletBill.height * bulletBillScaler)

  image(bulletBill, bulletBillX, bulletBillY - 50, bulletBill.width * bulletBillScaler, bulletBill.height * bulletBillScaler)

  image(bulletBill, bulletBillX, bulletBillY, bulletBill.width * bulletBillScaler, bulletBill.height * bulletBillScaler)

  image(bulletBill, bulletBillX, bulletBillY + 50, bulletBill.width * bulletBillScaler, bulletBill.height * bulletBillScaler)

  image(bulletBill, bulletBillX, bulletBillY + 100, bulletBill.width * bulletBillScaler, bulletBill.height * bulletBillScaler)

  image(bulletBill, bulletBillX, bulletBillY + 150, bulletBill.width * bulletBillScaler, bulletBill.height * bulletBillScaler)

  image(bulletBill, bulletBillX, bulletBillY + 200, bulletBill.width * bulletBillScaler, bulletBill.height * bulletBillScaler)

  image(bulletBill, bulletBillX, bulletBillY + 250, bulletBill.width * bulletBillScaler, bulletBill.height * bulletBillScaler)
}

function displayMario() {
  imageMode(CENTER)
  image(mario, marioX, marioY, mario.width * marioScaler, mario.height * marioScaler)
}

function moveBulletBill() {
  bulletBillX = bulletBillX - 5
  if (bulletBillX < 0 - radius) {
    bulletBillX = width
  }
}

function hitMario() {
  if (hit === true) {
    state = true;
  }
  if (state === true) {
    imageMode(CORNER)
    image(endMe, 0, 0, width, height)
  }
}

function isMarioHit() {
  hit = collideRectRect( bulletBillX, bulletBillY - 350, bulletBill.width * bulletBillScaler, bulletBill.height * bulletBillScaler, marioX - 1.51, marioY - 1.5, mario.width * marioScaler, mario.height * marioScaler);

  hit = collideRectRect( bulletBillX, bulletBillY - 300, bulletBill.width * bulletBillScaler, bulletBill.height * bulletBillScaler, marioX - 1.51, marioY - 1.5, mario.width * marioScaler, mario.height * marioScaler);
}