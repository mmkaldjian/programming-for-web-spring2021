let repeat = prompt("enter a random word", "word");
let repeat2 = prompt("enter a second random word", "other word");
let color1 = prompt("enter a color", "white");
let color2 = prompt("enter a second color", "pink");
var row = 20

function setup() {
    createCanvas (displayWidth, displayHeight);
    background (0,128,128);
}

function draw() {
    strokeWeight(1);
    noStroke();
    textSize(30);
    fill(255, 255, 255);
    var widthRepeat = repeat.length*18
    var widthRepeat2 = repeat2.length*18
    var rowNum = 1
    var repeatNum = 1

    for (y = 0; y <= height; y += row) { //initialize the variable; check for a condition; increment the variable
        let rowWidth = repeatNum % 2 === 0 ? widthRepeat : widthRepeat2 // ternary
        console.log(rowWidth);
        for (x = 0; x <= width; x += rowWidth) {
            if ( repeatNum % 2 === 0) {
            text(repeat, x, y);
            fill(color1);
          }
           else {
             text(repeat2, x, y);
             fill(color2);
           }
        }
        repeatNum ++ // increase row number by 1
      }
      rowNum ++ 
}