let grid = undefined;
//let stroke1 = prompt("enter a basic color name in lower case", "gray");
//let stroke2 = prompt("enter another basic color in lowercase", "purple");
function setup() {
    createCanvas(1000, 800)
    background("#ccc");
    grid = loadImage("100px_grid.png");
}

function draw() {
    background(grid);

    // legs
    fill("#f1f1f1")
    //stroke(stroke1);
    strokeWeight(20);

    //body
    ellipse(500, 400, 200);
    ellipse(500, 600, 200);
    ellipse(500, 800, 200);

    //arms
    line(200, 200, 400, 400);
    line(800, 200, 600, 400);
    line(200, 300, 300, 300);
    line(700, 100, 700, 300);
    line(700, 200, 650, 175);

    //head
    ellipse(500, 200, 200);

    //hat brim
    //stroke(stroke2);
    strokeWeight(20);
    line(400, 100, 600, 100);
    //hat body
    quad(450, 20, 550, 20, 550, 100, 450, 100);
    //eyes
    stroke(0);
    strokeWeight(30);
    point(450, 200);
    point(550, 200);
    //mouth
    noFill()
    strokeWeight(10);
    arc(500, 200, 100, 100, 290, HALF_PI);

    //buttons
    strokeWeight(20);
    point(500, 350);
    point(500, 400);
    point(500, 450);
    point(500, 550);
    point(500, 600);
    point(500, 650);
    point(500, 750);
    point(500, 800);
    point(500, 850);
}
