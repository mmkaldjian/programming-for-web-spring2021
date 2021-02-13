
const rectHeight = 100;
const rectWidth = 75;

let startingX = 200;
let startingY = 100;
let myCards = [];
let startingId = 0;

function setup() {
    createCanvas(1000, 800);
    background(0);
    for (let h = 0; h < 2; h++) {
        for (let k = 0; k < 2; k++) {
            for (let i = 0; i < 4; i++) {
                rect(startingX, startingY, rectWidth, rectHeight);
                myCards.push({ x: startingX, y: startingY, id: startingId});
                startingX += 150; // will move x 150
                startingId ++ ;
            }
            startingY += 150;
            startingX = 200;
    }
    }
   
    console.log(myCards);
}

function mousePressed() {
    for (let j = 0; j < myCards.length; j++) {
    let distance = dist(mouseX, mouseY, myCards[j].x, myCards[j].y); // to detect distance between mouse and this rectangle in the array - the rectangle is j, and to access the object inside of that array item, put x/y.
    if (distance < rectHeight + rectWidth) {
        console.log('Card has been clicked', myCards[j].id);
    }
}
}
