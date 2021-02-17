let blockX = 0; //why can't these just be x=0 and y=0? why do we have to add what seems like an unneccesary middle step?
let blockY = 0;
let blockColor = 255;
let drawTimer;
const speed = 5;
const distance = 2;

function setup () {
    createCanvas(500, 500);
    background(0);
}

function drawBlock (x, y, color) {
    fill(color || 255); // || is 'or'. either we use color, or if the parameter doesn't exit, we'll set it to 255.
    rect(x, y, 50, 50);
}

function keyTyped() {
    let keyToNumber = Number(key);
    if (isNaN(keyToNumber)){
            return;
    }

    keyToNumber = map(keyToNumber, 1, 9, 1, 255); // 1 is low for input, 9 is high for input, 1 is low for output, 255 is high for output
    console.log('converted number', keyToNumber);
    blockColor = keyToNumber;
}

//set time out only occurs once. exat same as set interval except only occurs once
window.setTimeout(() => {
    drawTimer = window.setInterval(() => { //declare set interval as a variable with drawTimer, so that can later on refer to it and clear it.
        if(blockY - 50 <= height) { //create a condition
        drawBlock(blockX, blockY, blockColor);
        blockY += distance; //take existing value and add this value to it
        } else {
            blockY = 0; 
            blockX += 50;//move it over one x length each time
        }
        if(blockY - 50 > height && blockX - 50 > width) {// && is an operator?
            window.clearInterval(drawTimer);
            alert('done');
        }
    
    }, speed); // ever 50 seconds, this set function will execute, and will continue until we clear it

}, 1500);


