const DOWN = 'down';
const UP = 'up';
let startingX = 100;
let startingY = 100;
let cards = [];
const gameState = {
    totalPairs: 6,
    flippedCards: [],
    numMatched: 0,
    attempts: 0,
    waiting: false,
};

let cardfaceArray = [];

let cardback;

function preload() {
    cardback = loadImage('images/cardback.png');
    cardfaceArray = [
        loadImage('images/penne-3.jpg'),
        loadImage('images/bowtie-3.jpg'),
        loadImage('images/shells-3.jpg'),
        loadImage('images/rotini-3.jpg'),
        loadImage('images/rigatoni-3.jpg'),
        loadImage('images/rotelle-3.jpg'),
    ];
}

function setup() {
    createCanvas(displayWidth, displayHeight);
    let selectedFaces = [];
    for (let z = 0; z < 6; z++) {
        const randomIndex = floor(random(cardfaceArray.length));
        const face = cardfaceArray[randomIndex];
        selectedFaces.push(face);
        selectedFaces.push(face);
        //remove the used cardface so it doesn't get randomly selected again
        cardfaceArray.splice(randomIndex, 1);
    }
    selectedFaces = shuffleArray(selectedFaces);

    for (let j = 0; j < 3; j++) { //rows
        for (let i = 0; i < 4; i++) { //columns
            const faceImage = selectedFaces.pop();
            cards.push(new Card(startingX, startingY, faceImage)); // new class instance - "cookie"
            startingX +=175; // increments
        }
        startingY += 225;
        startingX = 100; //restart at 100 each row
    }
}

function draw () {
    background('lightBlue');
    if (gameState.numMatched === gameState.totalPairs) {
        fill('magenta');
        textSize(50);
        text('You win!', 400, 820);
        noLoop();
    }
    for (let k = 0; k < cards.length; k++) {
        if (!cards[k].isMatch) {
            cards[k].face = DOWN;
        }
        cards[k].show();
    }
    noLoop();
    gameState.flippedCards.length = 0;
    gameState.waiting = false;
    fill(255);
    textSize(36);
    text('attempts ' + gameState.attempts, 100, 60);
    text('matches ' + gameState.numMatched, 450, 60);
}

function mousePressed() {
    if (gameState.waiting) {
        return; //will stop function
    }
    for (let k = 0; k < cards.length; k++) { // need a loop here, because no longer a single variable
        //first check flipped cards length, and then we can trigger the flip
        if (gameState.flippedCards.length < 2 && cards[k].didHit(mouseX, mouseY)) { //did hit method built into class; making sure only two cards will flip at a time
            console.log('flipped', cards[k]); // flip also built into class
            gameState.flippedCards.push(cards[k]);
        }
    }

    if (gameState.flippedCards.length === 2) { //once 2 cards are flipped up..
        gameState.attempts++;
        if (gameState.flippedCards[0].cardFaceImg === gameState.flippedCards[1].cardFaceImg) {
            // IF THEY MATCH:
            // mark cards as matched so they don't flip back
            gameState.flippedCards[0].isMatch = true;
            gameState.flippedCards[1].isMatch = true;
           // empty the flipped cards array
            gameState.flippedCards.length = 0; //empty the array, ready for next set
            // increment the score
            gameState.numMatched++; //score
            loop();
        } else {
            // IF THEY DONT MATCh:
            gameState.waiting = true;
            const loopTimeout = window.setTimeout(() => {
                loop();
                window.clearTimeout(loopTimeout);
            }, 1000)
        }ß
    }
}

class Card {
    constructor (x, y, cardFaceImg) { // x and y parameters to change positions
        this.x = x; //property
        this.y = y; //property
        this.width = 150;
        this.height = 200;
        this.face = DOWN;
        this.cardFaceImg = cardFaceImg;
        this.isMatch = false;
        this.show();
    }

    show () { // method - a method is like a function, but specific to a class
        if (this.face === UP || this.isMatch) {
            fill('#aaa');
            noStroke();
            rect(this.x, this.y, this.width, this.height, 10);
            image(this.cardFaceImg, this.x, this.y);
    } else {
        fill('maroon');
        noStroke();
        rect(this.x, this.y, this.width, this.height, 10); // added an extra argument; 10 is border radius
        image(cardback, this.x, this.y);
        }
        
    }

    didHit (mouseX, mouseY) {
        if (mouseX >= this.x && mouseX <= this.x + this.width && mouseY >= this.y && mouseY <= this.y + this.height) {
            this.flip();
            return true;
        } else {
            return false;
        }
    }

    flip () {
        if (this.face === DOWN) {
            this.face = UP;
        } else {
            this.face = DOWN;
        }
        this.show();
    }
}

function shuffleArray (array) {
    let counter = array.length;
    while (counter > 0) {
    // pick random index
    const idx = Math.floor(Math.random() * counter);
    // decrease counter by 1 (decrement)
    counter--;
    //swap the last element with it
    const temp = array[counter];
    array[counter] = array[idx];
    array[idx] = temp;
    }
    return array;
}