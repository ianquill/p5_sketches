function setup() {
  createCanvas(400, 400);
  background(random(255), random(255), random(255)); 
  strokeWeight(1); 
}

function draw() {
  let x = 20;
  let y = random(10);
  for (let i = 0; i<=x; i++) {
     line(random(width), random(height), random(width), random(height));
  }
 noLoop();
}
