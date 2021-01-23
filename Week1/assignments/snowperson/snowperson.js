let grid = undefined;
let fill1 = prompt("enter a basic color name in lower case", "blue");
let stroke1 = prompt("enter another basic color in lowercase", "teal");
function setup() {
    createCanvas(1000, 800)
    background(204, 229, 255);
    // grid = loadImage("100px_grid.png");
}

function draw() {
    // background(grid);

    //body
    fill(255);
    strokeWeight(15);
    stroke(0);
    ellipse(500, 400, 200);
    ellipse(500, 600, 200);
    ellipse(500, 800, 200);

    //arms
    //left arm
    strokeWeight(15);
    line(200, 200, 400, 400);
    line(200, 300, 300, 300);

    //right arm
    line(800, 200, 600, 400);
    line(750, 100, 750, 250);
    line(750, 200, 700, 175);

    //head
    ellipse(500, 200, 200);

    //hat brim
    stroke(stroke1);
    strokeWeight(15);
    line(400, 120, 600, 120);

    //hat body
    stroke(0);
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
    stroke(stroke1);
    point(500, 350);
    point(500, 400);
    point(500, 450);
    point(500, 550);
    point(500, 600);
    point(500, 650);
    point(500, 750);
    point(500, 800);
    point(500, 850);

    //background

    //snowflakes
    stroke(255);
    strokeWeight(5);
    //snowflake1
    line(100, 700, 200, 700);
    line(150, 650, 150, 750);
    line(125, 675, 175, 725);
    line(125, 725, 175, 675);

    //snowflake2
    line(200, 100, 300, 100);
    line(250, 50, 250, 150);
    line(225, 75, 275, 125);
    line(225, 125, 275, 75);

    //snowflake3
    line(750, 400, 850, 400);
    line(800, 350, 800, 450);
    line(775, 375, 825, 425);
    line(775, 425, 825, 375);


    //ornaments

    //ornament1
    stroke(0);
    line(100, 0, 100, 400);

    fill(fill1);
    ellipse(100, 450, 100);

    stroke(255, 0, 100);
    line(50, 450, 150, 450);
    line(60, 425, 125, 425);
    line(75, 475, 140, 475);
    
    //ornament2
    stroke(0);
    line(700, 0, 700, 600);

    fill(fill1);
    ellipse(700, 650, 100);

    stroke(255, 0, 100);
    strokeWeight(20);
    point(700, 650);
    point(670, 650);
    point(730, 650);

    //ornament3
    stroke(0)
    strokeWeight(5);
    line(900, 0, 900, 250)

    fill(255, 0, 100)
    ellipse(900, 300, 100);
    fill(fill1);
    arc(900, 300, 100, 100, PI, TWO_PI);
    
}