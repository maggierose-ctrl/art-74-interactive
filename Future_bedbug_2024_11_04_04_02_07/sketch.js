let colorPick=1;
let circHue=1;

function setup() {
  createCanvas(710, 400);
  background(0);
  strokeWeight(5);
  colorMode(HSB);
  textSize(32);
  fill("white")
  text('Target Color-->', 300, 50);
  let colorPick = random(1,100);
  stroke(colorPick, 90, 90);
  circle(650,50,50)
}

function mousePressed() {
  let circHue = mouseX/2;
  stroke(circHue, 90, 90);
  circle(mouseX,   mouseY, 20);
  noLoop();
}