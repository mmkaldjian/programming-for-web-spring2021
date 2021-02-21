const DOWN = 'down';
const UP = 'up';
let startingX = 100;
let startingY = 100;
let cards = [];
const gameState = {

}
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
    ]
}

function setup() {
    createCanvas(1000, 1200);
    background(0);
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

function mousePressed() {
    for (let k = 0; k < cards.length; k++) { // need a loop here, because no longer a single variable
        if(cards[k].didHit(mouseX, mouseY)) { //did hit method built into class
            console.log('flipped', cards[k]); // flip also built into class

        }
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
        this.show();
    }

    show () { // method - a method is like a function, but specific to a class
        if (this.face === DOWN) {
            fill('maroon');
        rect(this.x, this.y, this.width, this.height, 10); // added an extra argument; 10 is border radius
        image(cardback, this.x, this.y);
    } else {
            fill('#aaa');
            rect(this.x, this.y, this.width, this.height, 10);
            image(this.cardFaceImg, this.x, this.y);
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