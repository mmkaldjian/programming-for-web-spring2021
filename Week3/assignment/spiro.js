
let rotateBy = 5; //5 degree rotation

let backgroundColor = prompt("enter a basic color name in lowercase", "black");

function setup() {
    createCanvas(600, 600);
    background(backgroundColor); //put background here so that it isn't wiped out each time the loop occurs
    angleMode(DEGREES);
}

let color = 255; //I can't figure out how to do what I did here and below where I have the color changing with a non greyscale color..how??

function makeArm(rotateBy) {
    let alt = Math.round(rotateBy / 360);
    console.log(alt);
    fill(color);
    stroke(128,0,0, 100);
    strokeWeight(5);
    ellipse(100, 100, 300 / (alt - 5));
    noFill();
    stroke(0,128,128, 100);
    strokeWeight(15);
    point(50, 50);
}

function draw() {
    translate(300, 300); //sets center/origin point
    rotate(rotateBy) //rotates canvas by 5 degrees (referring to rotateBy at top
    makeArm(rotateBy); //refers to drawing parameters in function above
    rotateBy +=3; //rotating canvas by x degrees each time, determines how close together circles are
   
}

function mouseMoved() { //every time mouse is moved, color fluctuates from 0 to 255. Color stays same when moues stays still
    color = color + 5; // indicates speed at which color changes
    if (color > 255) {
        color = 0;
    }
}

function mouseClicked() {
    noLoop(); // will stop looping when mouse is pressed
}

function doubleClicked() {
    loop(); // will re-start looping when mouse is double clicked
}