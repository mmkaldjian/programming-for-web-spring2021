let key1;
let keys = [];
let startingX = 200;
let startingY = 200;

function preload() {
    soundArray = [
        loadSound('bees.wav'),
        loadSound('birds.wav'),
        loadSound('chicken.wav'),
        loadSound('cow-bells.wav'),
        loadSound('cricket.wav'),
        loadSound('frog.wav'),
        loadSound('thunder.wav'),
        loadSound('chainsaw.wav'),
    ];
 }

function setup() {
    createCanvas(windowWidth, windowHeight)
    strokeWeight(15);
    stroke(0);
    let soundIndex = 0;

    for (let j = 0; j < 2; j++) { //rows
        for (let i = 0; i < 4; i++) { //columns
            keys.push(new Key(startingX, startingY, soundArray[soundIndex])); // new class instance - "cookie"
            startingX +=300; // increments
            soundIndex +=1; // increments through sound array
        }
        startingY += 300;
        startingX = 200; //restart at 200 each row
    }
}

function draw() {
    for (let k = 0; k < keys.length; k++) {
        keys[k].show(); //this is where it's actually drawed out, referencing instance inside of loop, which is a copy of the class
    }
}

class Key {
    constructor(x, y, sound) {
        this.x = x;
        this.y = y;
        this.sound = sound;
        this.pressed = false;
    }
    show() {
        if (this.pressed) {
            fill(255, 153, 153);
            ellipse(this.x, this.y, 200);
        }
        else {
            fill(255);
            ellipse(this.x, this.y, 200);
        }
    }
    play() {
        if (this.pressed) {
            this.sound.play();
        }
        else {
            this.sound.stop();
        }
    }
}

function mousePressed() {
    for (let m = 0; m < keys.length; m++) {
        let distance = dist(mouseX, mouseY, keys[m].x, keys[m].y) // how far away mouse is from middle of key
        if(distance <= 100) {
            keys[m].pressed = !keys[m].pressed; // negates what immediately follows; like a toggle
            keys[m].play();
        }
    }
}
