function setup() {
  createCanvas(800, 800);
  background(random(255), random(255), random(255)); 
  strokeWeight(1); 
}

let array = [];

function draw() {
  let s = second();
  text(s, 10, 10);
  let x = 25;
  let y = random(10);
  for (let i = 0; i<=x; i++) {
     let newLine = line(random(width), random(height), random(width), random(height));
     array.push(newLine);
  }
  if (s == 59) {

  } else noLoop();
}
