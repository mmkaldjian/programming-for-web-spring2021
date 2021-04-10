// let lineWeight = prompt("enter a stroke weight in lowercase", number);
let slider;

function setup() {
    createCanvas(windowWidth, windowHeight);
    rSlider = createSlider(0, 255, 0, 1); // (min, max, default value, step size)
    rSlider.position(50, 60); //x-position, y-position

    gSlider = createSlider(0, 255, 0, 1);
    gSlider.position(50, 120);

    bSlider = createSlider(0, 255, 0, 1);
    bSlider.position(50, 180);

    fSlider = createSlider(0, 1000, 0, 1);
    fSlider.position(50, 300);
  }

  function draw() {
    let x1 = map(mouseX, 0, width, 0, 255);
    let y1 = map(mouseY, 0, height, 0, 255);
    let r = rSlider.value();
    let g = gSlider.value();
    let b = bSlider.value();
    let f = fSlider.value();

    textSize(30);
    noStroke();
    fill(255, 255, 255);
    text('r', 50, 40);
    text('g', 50, 100);
    text('b', 50, 160);
    text('circle size', 50, 280);
    
    stroke(x1, y1, 255);
    background(r, g, b, 5);
    noCursor();
    strokeWeight(10);
    ellipse(mouseX, mouseY, f, f);
  }