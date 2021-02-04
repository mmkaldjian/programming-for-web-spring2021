function setup() {
    createCanvas(200, 200);
    noLoop(); //Stops from continuously executing code
}

function createTile() {
    translate(0, 0) //sets registration point
    fill('maroon');
    rect(0, 0, 200, 200);
    noStroke();
    fill('orange');
    rect(50, 50, 100, 100);
    stroke('orange');
    strokeWeight(5);
    noFill();
    triangle(0, 0, 200, 0, 100, 50);
    triangle(150, 100, 200, 0, 200, 200);
    triangle(100, 150, 200, 200, 0, 200);
    triangle(0, 0, 50, 100, 0, 200);
    fill('teal');
    noStroke();
    quad(100, 50, 150, 100, 100, 150, 50, 100);
    stroke('orange');
    strokeWeight(10);
    noFill();
    point(100, 100);
    point(100, 25);
    point(175, 100);
    point(100, 175);
    point(25, 100);
}

function draw() {
    createTile();
}