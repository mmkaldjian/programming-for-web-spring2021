let myCard;
const DOWN = 'down';
const UP = 'up';

function setup() {
    createCanvas(1000, 1200);
    background(0);
    myCard = new Card();
}

function mousePressed() {
    console.log(myCard.didHit(mouseX, mouseY));

}


class Card {
    constructor () {
        this.x = 100; //property
        this.y = 100; //property
        this.width = 150;
        this.height = 200;
        this.face = DOWN;
        this.show();
    }

    show () { // method - a method is like a function, but specific to a class
        if (this.face === DOWN) {
            fill('maroon');
        rect(this.x, this.y, this.width, this.height, 10); // added an extra argument; 10 is border radius
        } else {
            fill('#aaa');
            rect(this.x, this.y, this.width, this.height, 10);
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