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
    strokeWeight(15);
    stroke(0);
    ellipse(500, 400, 200);
    ellipse(500, 600, 200);
    ellipse(500, 800, 200);

    //arms
    strokeWeight(15);
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
    line(400, 120, 600, 120);

    //hat body
    //quad(450, 20, 550, 20, 550, 100, 450, 100);
    strokeWeight(15);
    fill(255, 204, 51);
    triangle(400, 100, 400, 20, 450, 100);
    triangle(450, 100, 500, 20, 550, 100);
    triangle(550, 100, 600, 20, 600, 100);

    //eyes
    stroke(0);
    strokeWeight(30);
    point(450, 200);
    point(550, 200);

    //eyebrows
    strokeWeight(5);
    noFill()
    arc(450, 190, 40, 40, PI, TWO_PI);
    arc(550, 190, 40, 40, PI, TWO_PI);

    //nose
    strokeWeight(5);
    fill(255, 153, 51);
    triangle(500, 220, 550, 230, 500, 240);


    //mouth
    noFill()
    strokeWeight(10);
    arc(500, 220, 100, 100, 290, HALF_PI);

    //buttons
    strokeWeight(20);
    stroke(0, 102, 204);
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

//background

//snow

