let bvals = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(2);
}

function draw() {
  background(255,30,0)
  for (let i = 1; i < width; i++) {
  bvals[i - 1] = bvals[i];
  }
  // Add the new values to the end of the array

  if (mouseIsPressed) {
    bvals[mouseY ] = 0;
  } else {
    bvals[mouseX] = 255;
  }

  for (let i = 1; i < width; i++) {
    stroke(255);
    line(
      i,
      (1.5 * height) / 5 + bvals[i],
      i,
      (1 * height) / 5 + bvals[i-1]
    );
  }
}
