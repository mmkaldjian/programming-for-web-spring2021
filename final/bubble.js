var angle = 0;

var t;
var theta;
var maxFrameCount = 400; // frameCount, change for faster or slower animation

function setup() {
    var cnv = createCanvas(windowWidth, windowHeight);
    cnv.id('mycanvas'); // create canvas id to be able to style it underneath/fixed position in relation to the form
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

      fill(255);

      ellipse(x+x2, y-y2, sz2, sz2);
}
  }

print(w)
angle += .0000015
}

// Derived from original p5js sketch by @dearnaomichan located at https://codepen.io/dearnaomichan/details/XEWVao
// Copyright (c) 2021 by Naomi (https://codepen.io/dearnaomichan/pen/XEWVao)
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.