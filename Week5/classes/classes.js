// class is an idea of a template or blueprint; object template

let bubbleArray = []; // an object with data in it; object instances. objects are a collection of data and functionality
// let bubble2;

function setup() {
    createCanvas(500, 500);
    for (let i = 0; i < 10; i++) {
    const bubble = new Bubble(); //'new' keyword creates an object instance. execute a function to construct an object. 
    bubbleArray.push(bubble);
    }
}

function draw() {
    background(0);
    for (let j = 0; j < 10; j++) {
        bubbleArray[j].move();
        bubbleArray[j].show();
    // bubble.move();
    // bubble.show();
    // bubble2.move();
    // bubble2.show();
//     for (let i = 0; i < 10; i++) { //what am I doing wrong here in creating a loop?
//         bubble.push(new Bubble(startingX, startingY));
//         startingX += 100;
    }
 }

class Bubble {
    constructor() { //first must execute a function to construct an object
        this.x = 250; // "this" is a key word in javascript; right now is a reference to the template. a theoretial object instance until say new bubble
        this.y = 250;
        this.height = 100;
        this.width = 100;
    }

    move() { //then, declare a function/functionality inside the object class
        this.x = this.x + random(-2, 2);
        this.y = this.y + random(-2, 2);
    }

    show() {
        stroke("magenta");
        strokeWeight(5);
        noFill();
        ellipse(this.x, this.y, this.height, this.width);
    }

}

//first: define object template, the class - a generic template, nothing about how many or how it might be used
//then: define the constructor which specifies how object is initialized
//then: add whatever functionality you want
//then: you can make as many as you want andn ot have to change anything about the class.
