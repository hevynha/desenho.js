
let painting = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  if (painting) {
    stroke(205,125,171);
    strokeWeight(5);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function mousePressed() {
  painting = true;
}

function mouseReleased() {
  painting = false;
  beginShape();
}

