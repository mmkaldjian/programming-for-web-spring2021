function setup() {
    createCanvas(windowWidth, windowHeight);
  }

  function draw() {
    background(280, 55, 87, 5);

    if (mouseIsPressed) {
    fill(255, 153, 0);
    stroke(0, 255, 255);
  } else {
    fill(0, 255, 255);
    stroke(255, 153, 0);
  }
    arc(mouseX, mouseY, 40, 40, 0, PI + QUARTER_PI, CHORD);
    strokeJoin(ROUND);
    strokeWeight(8);
  }