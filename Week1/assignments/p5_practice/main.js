function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
    background(280, 55, 87, 5);

    if (mouseIsPressed) {
    fill(255, 153, 0);
  } else {
    fill(0, 255, 255);
  }
    ellipse(mouseX, mouseY, 20, 20);

  }