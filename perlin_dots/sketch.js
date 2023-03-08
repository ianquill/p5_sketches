let refreshSlider;
let dotSizeSlider;
let noiseScaleSlider;
let speedSlider;
let colorPicker;
let bgColorPicker;

function setup() {
  createCanvas(800, 800);
  strokeWeight(0);
  fill(123, 123, 123);
  refreshSlider = createSlider(0, 10, 5, 1);
  dotSizeSlider = createSlider(0, 10, 5, 1);
  noiseScaleSlider = createSlider(0, 200, 1, 5);
  speedSlider = createSlider(0, 0.5, 0.05, 0.01);
  colorPicker = createColorPicker();
  bgColorPicker = createColorPicker();
}

let z = 0;
let dotSize = 5;
refreshRate = 5;
let noiseScale = 1;
let speed;
let defaultColor;
let bgColor;

function draw() {
  bgColor = bgColorPicker.value();
  background(bgColor);
  defaultColor = colorPicker.value();
  fill(defaultColor);
  dotSize = dotSizeSlider.value();
  speed = speedSlider.value();
  refreshRate = refreshSlider.value();
  noiseScale = noiseScaleSlider.value();
  background(34,24,51);
  for (let y=0; y<height; y++) {
    for (let x=0; x<width; x++) {
      if (x % refreshRate == 0 && y % refreshRate == 0) {
        circle(x, y,noise(x/noiseScale, y/noiseScale, z)*dotSize);
      }
    }
  }
  z += speed;
}
