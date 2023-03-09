let gridSpace = 10;
let offset = 30;
let y;
let x;
let z = 0;
let zIncrement = 0.05;
let noiseMult = 2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(0);
}

function draw() {
  background(220);
  grid();
}

function grid() {
  for (y = offset; y<height; y += gridSpace) {
    for (x = offset; x<width; x += gridSpace) {
      let dx = noise(x, y, z) * noiseMult;
      point(x - dx, y - dx);
    }
  }
  z += zIncrement;
}