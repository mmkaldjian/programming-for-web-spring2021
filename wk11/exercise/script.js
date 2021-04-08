function setup() {
    createCanvas (displayWidth, displayHeight);
    background (0,128,128);
}

function draw() {
    strokeWeight(1);
    noFill();
    stroke(255, 255, 255);
    for (let mouseX = 0; mouseX <= 1; mouseX++) {
    line(mouseX, mouseY, pmouseX, pmouseY);
    }

    for (let circleY = 75; circleY <= 1575; circleY += 75) {
        for (let circleX = 75; circleX <= 1575; circleX += 75) {
          circle(circleX, circleY, 10);
        }
      }
}