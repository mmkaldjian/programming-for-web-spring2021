function setup() {
    createCanvas(800, 400);
  }
  
  function draw() {
    background(280, 55, 87, 30);

    if (mouseIsPressed) {
    fill(50);
  } else {
    fill(255);
  }
    ellipse(mouseX, mouseY, 80, 80);

  }