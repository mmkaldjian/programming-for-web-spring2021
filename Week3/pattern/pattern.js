function setup() {
    createCanvas(600, 600);
    noLoop(); //Stops from continuously executing code
}

function createTile(originX, originY, primaryColor, dotWeight) { //unsure why we have to put originx and y here as well?
    translate(originX, originY) //sets registration point
    fill(primaryColor);
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
    strokeWeight(dotWeight);
    noFill();
    point(100, 100);
    point(100, 25);
    point(175, 100);
    point(100, 175);
    point(25, 100);
}

function draw() { //This is where you start parameterizing things
    createTile(0, 0, 'maroon', 5);
    createTile(0, 200, 'red', 10);
    createTile(0, 200, 'maroon', 5); //not 400, because stating from LAST origin, not first.
    createTile(200, -400, 'red', 10);
    createTile(0, 200, 'maroon', 20);
    createTile(0, 200, 'red', 10);
    createTile(200, -400, 'maroon', 5);
    createTile(0, 200, 'red', 10);
    createTile(0, 200, 'maroon', 5);
}