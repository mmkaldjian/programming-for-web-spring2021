function setup() {
    createCanvas(200, 200);
    noLoop(); //Stops from continuously executing code
}

function createTile() {
    translate(0, 0) //sets registration point
    fill('LavenderBlush');
    strokeWeight(5); //why does one side appear thicker than the other when the weight is the same?
    rect(0, 0, 150, 200);
    noStroke();
    fill("LightSteelBlue");
    triangle(0, 0, 75, 100, 0, 200);
    triangle(150, 0, 150, 200, 75, 100);
    stroke("magenta");
    line(40, 0, 40, 200);
    line(110, 0, 110, 200);
    fill('teal');
    arc(75, 200, 150, 150, PI, TWO_PI);    
    arc(75, 0, 150, 150, TWO_PI, PI);
    noFill();
    stroke('LightSalmon');
    strokeWeight(5);
    quad(75, 0, 150, 100, 75, 200, 0, 100);
    strokeWeight(15);
    point(75, 100);
    strokeWeight(5);
    line(75, 200, 75, 100);
    line(75, 0, 75, 100);
    line(0, 100, 75, 100);
    line(75, 100, 150, 100);



}

function draw() {
    createTile();
}