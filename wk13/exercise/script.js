var pos;
var inc;
let img;

function preload() {
    img = loadImage('egg.png');
  }

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    // slider = createSlider(0, 15, 0);

    pos = 0.0; // 0.0 means a float variable instead of an integer
    inc = 0.1; // amt by which we increase position; increment variable
}

function draw() {
    clear();
    translate(width/2, height/2);
    fill("#00CCCC");

    var mySinVal = 4*sin(sin(2*pos))/cos(4*pos);
    console.log(mySinVal);
    
    amplified = mySinVal * 500

    image(img, -1100, amplified);
    image(img, -800, amplified);
    image(img, -500, amplified);
    image(img, -200, amplified);
    image(img, 100, amplified);
    image(img, 400, amplified);
    image(img, 700, amplified);
    
    for (x = 0; x <= 5; x++) {
        ellipse(-200, amplified, 50, 50);
        ellipse(600, amplified + 100, 50, 50);
        ellipse(0, amplified, 50, 50);
        ellipse(amplified - 50, 150, 25, 25);
        ellipse(amplified - 500, 200, 100, 100);
        ellipse(amplified - 100, -200, 100, 100);
        ellipse(amplified - 600, -200, 25, 25);
        ellipse(600, amplified - 300, 25, 25);

        rotate(x)
    }
    
    image(img, amplified, -1100);
    image(img, amplified, -800);
    image(img, amplified, -500);
    image(img, amplified, -200);
    image(img, amplified, 100);
    image(img, amplified, 400);
    image(img, amplified, 700);



   pos = pos + inc // every draw function goes around, sin value is given a position that's been increased by the increment
}
