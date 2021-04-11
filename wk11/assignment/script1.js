let lineWeight = prompt("enter a stroke weight in lowercase", 5);

function setup() {
    createCanvas(windowWidth, windowHeight);
  }

  function draw() {
    let x1 = map(mouseX, 0, width, 0, 255);
    let y1 = map(mouseY, 0, height, 0, 255);
    fill(x1, y1, 255); // have input be parameterizing different color
    background(x1, y1, 0, 5);
    noCursor();
    stroke(200, 200, 200);
    strokeWeight(lineWeight);
    arc(mouseX, mouseY, 40, 40, 0, PI + QUARTER_PI, CHORD);
    strokeJoin(ROUND);
    strokeWeight(8);
  }