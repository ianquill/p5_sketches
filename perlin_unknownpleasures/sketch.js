function setup() {
  let windowSize = min(windowWidth, windowHeight);
  createCanvas(windowSize, windowSize);
  noFill();
}

let xOffset = 50;

function draw() {
  background(220);
  for (let n=0; n<height; n+=10) {
    beginShape();
    for (let i = xOffset; i < width - xOffset; i+=25) {
      let d = dist(i, n, width/2, n);
      curveVertex(i, n - noise(n + i*0.08)*(100-d));
    }
    endShape();
  }
}
