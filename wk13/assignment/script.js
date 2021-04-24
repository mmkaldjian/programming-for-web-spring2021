function setup() {
    createCanvas(windowWidth, windowHeight);
    noLoop();
}

function draw() {
    translate(width / 2, height); //start trunk at bottom middle
    branch(0);
    stroke(0);
}

function branch(length){
    if (length < 8) { // branches will stop when length of branch is 8 pixels or less
        strokeWeight(3);
        line(0, 0, 0, -height/8); // tree trunk/line going up
        {
        translate(0, -height/8); //move starting spot to top of trunk to start making branches

        if (random(1.0) < 0.6) {
            rotate(.3);
            scale(.8);

            push();
            branch(length + 1);
            pop();

            rotate(-.6);

            push();
            branch(length + 1);
            pop();
    
        }
        else { // no branch - continue at the same length  
            branch(length);
        } 
        }
    }
}
function mousePressed(){ 
    clear();
    redraw();
 } 

// function draw() {
//     translate(width / 2, height); //start trunk at bottom of screen
//     branch(150);
//     translate(0, -150);
//     // console.log(draw);
// }

// function branch(length){
//     stroke(0);
//     strokeWeight(1);
//     line(0, 0, 0, - length); // tree trunk/line going up
//     translate(0, -length); // move starting spot to top of trunk to start making branches
//     if (length > 8) { // branches will stop when length of branch is 8pixels or less
//         push()
//         rotate(PI / 4)
//         branch(length + 1);
//         pop()

//         push()
//         rotate( - PI / 4)
//         branch(length + 1);
//         pop();
//     }
// }