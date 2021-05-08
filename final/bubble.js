var angle = 0;

var t;
var theta;
var maxFrameCount = 400; // frameCount, change for faster or slower animation

function setup() {
    var cnv = createCanvas(windowWidth, windowHeight);
    cnv.id('mycanvas');
    noStroke();
}

function draw() {
    translate(width/2, height/2); // translate 0,0 to center

    t = float(frameCount/maxFrameCount);
    theta = TWO_PI*t;

    var w = map(sin(angle), 0, 1, 65.06, 71); // map big slow waves
    background('#f6f2e2')

  for ( var x= -width; x <= width; x += w) {
    for (var y= -height; y <= height; y += 50) {
      var offSet = 50*x+y+y;   // play with offSet to change map below

      var x2 = map(cos(-theta+offSet), 0, 1, 0, 80); // map x position
      var y2 = map(cos(-theta+offSet), 0, 1, 25, 0); // map y position
      var sz2 = map(sin(-theta+offSet), 0, 1, 10, 60); // map size off the ellipse

      fill(255); // color with gradient created

      ellipse(x+x2, y-y2, sz2, sz2);
    }
  }

print(w)
angle += .0000015
}

// var bubbles = [];

// function setup() {

//     var cnv = createCanvas(windowWidth, windowHeight);
//     cnv.id('mycanvas');
//     for (var i = 0; i < 40; i++) {
//         var x = random(width);
//         var y = random(height);
//         bubbles.push(new Bubble(x, y));
//     }
// }

// function draw() {

//     background(255);
//     for (var i = 0; i < bubbles.length; i++) {
//         bubbles[i].move();
//         bubbles[i].display();
//     }
// }

// function Bubble(x, y) {
//     this.x = x;
//     this.y = y;

//     this.display = function() {
//         stroke(0);
//         fill(255, 150);
//         ellipse(this.x, this.y, 48, 48);
//     }

//     this.move = function() {
//         this.x = this.x + random(-1, 1);
//         this.y = this.y + random(-1, 1);
//     }   
// }