//to animate, need to assign variables to the axis you are animating on
let rectX = 0;
const rectHeight = 75;
let rectY; //randomly choose where Y will be
const rectWidth = 75;

let clickCount = 0;
let speed; // why do i need to put this (and rectY) here if there is no =, and i'm also putting it down below under setup?

function setup() {
    createCanvas(500, 500);
    rectY = random(height - rectHeight); // random needs to be in setup
    speed = random(1, 3); //1 = min, 3 = max
}

function draw(){
    background(0); // putting background under draw and not setup means that when an onject is moving, it will appear as though it's moving instead of a line of copies
    drawShape(); 
    rectX += speed;
    if(rectX > width) { // width = width of entire canvas
        noLoop();
        text('Your score was ' + clickCount, 100, 300);
    }
}

function mousePressed() {
    if((mouseX >= rectX && mouseX <= rectX + rectWidth) && (mouseY >= rectY && mouseY <= rectY + rectHeight) ) {
        clickCount++;
        console.log('hit', clickCount);
    }
}

function drawShape() { //create as a function so that it is something we can detect
    fill('teal');
    rect(rectX, rectY, rectWidth, rectHeight);
}

