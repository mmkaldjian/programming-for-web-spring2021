
const rectHeight = 200;
const rectWidth = 150;

let startingX = 200; // why when i change this to 100 does only the top row shift?
let startingY = 100;
let myCards = [];
let startingId = 0;

function setup() {
    createCanvas(1000, 1100);
    background(0);
    //for (let h = 0; h < 2; h++) {
        for (let k = 0; k < 4; k++) { //rows
            for (let i = 0; i < 4; i++) { //columns
                rect(startingX, startingY, rectWidth, rectHeight);
                myCards.push({ x: startingX, y: startingY, id: startingId}); //pushing into array to store info for later
                startingX += 170; // will move by 100 because column loop will run full sequence. starting y doesn't need to change since same distance from top. Each time it loops, x moves by 100
                startingId ++ ;
            } //keeps running this loop til it hits 3
            startingY += 220; //what it's incrementing by for rows down. 150 px lower than first set of rectangles.
            startingX = 200; //don't want rows to start where we left off when x loop ended, so need to restart where x starts, so not to stagger rows
    }
    //}
   
    console.log(myCards);
}

// function mousePressed() {
//     for (let j = 0; j < myCards.length; j++) {
//     let distance = dist(mouseX, mouseY, myCards[j].x, myCards[j].y); // to detect distance between mouse and this rectangle in the array - the rectangle is j, and to access the object inside of that array item, put x/y.
//     if ((distance >= rectWidth <= startingX + rectWidth) && (distance >= rectHeight <= startingY + rectHeight)); {
//         console.log('Card has been clicked', myCards[j].id);
//     }
// }
// }

//if ((distance >= startingX && mouseX <= startingX + rectWidth) && (distance >= startingY && mouseY <= startingY + rectHeight)); {
//if ((distance >= rectWidth <= startingX + rectWidth) && (distance >= rectHeight <= startingY + rectHeight)); {

// I want to make cards bigger - how do I do this?