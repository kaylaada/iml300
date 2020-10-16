/*
Face sketch adapted from Kayla Adams:
https://editor.p5js.org/kaylaada/sketches/HX8uZtynj
 */

document.body.insertAdjacentHTML('afterbegin', '<div id="p5Canvas"></div>'); //Embed in body

//let img;
//let img2;
let z = 25;

var value = 30;
var value2 = 100;
var value3 = 50;
var value4 = 140;

var paint = 20;

function preload() {
    img = loadImage('asset/bobross.png');
    img2 = loadImage('asset/paintpallete.png');
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('p5Canvas');
  img.loadPixels();
    img2.loadPixels();
  frameRate(10);
  noCursor();
}
//
 function mouseDragged() {
   noStroke();
   fill(random(100, 200), value, random(100, 50));
   ellipse(mouseX, mouseY, z);
 }

function draw() {
  clear() //Make the background transparent

  //paint pallete
image(img2, 10, 10);
img2.resize(250, 200);

//color bank
// stroke(random(0,255), random(0, 255), random(0, 255));
noStroke();
strokeWeight(5);
fill(255);
rect(50, 50, 100, 100);

//color selections
//neon green
noStroke();
fill(169, 250, 47);
rect(50, 50, 50, 50);

//muddy green
noStroke();
fill(163, 142, 38);
rect(100, 100, 50, 50);

//yellowy field green
noStroke();
fill(156, 209, 44);
rect(50, 100, 50, 50);

//auburn
noStroke();
fill(163, 28, 71);
rect(100, 50, 50, 50);

//brush size selection (upper left hand corner)
stroke(0);
strokeWeight(2);
fill(255);
rect(100, 250, 50, 50);

//brush size selection (upper right hand corner)
stroke(0);
strokeWeight(2);
fill(255);
rect(50, 250, 50, 50);

//brush size selection (lower right hand corner)
stroke(0);
strokeWeight(2);
fill(255);
rect(100, 300, 50, 50);

//brush size selection (lower left hand corner)
stroke(0);
strokeWeight(2);
fill(255);
rect(50, 300, 50, 50);

 //paint size detail (top left)
stroke(0);
strokeWeight(1);
fill(22);
ellipse(75, 275, 10, 10);

//paint size detail (top right)
stroke(0);
strokeWeight(1);
fill(22);
ellipse(125, 275, 15, 15);

//paint size detail (bottom right)
stroke(0);
strokeWeight(1);
fill(22);
ellipse(125, 325, 30, 30);

//paint size detail (bottom left);
stroke(0);
strokeWeight(1);
fill(22);
ellipse(75, 325, 23, 23);

 //paintbrush stroke
stroke(random(100, 200), value, random(100, 50));
strokeWeight(paint);
line(mouseX, mouseY, pmouseX, pmouseY);

//bob ross
image(img, mouseX -10, mouseY -70);
img.resize(100, 100);


}

function mouseClicked() {
  //bottom right hand corner
  if (mouseX > 100 && mouseX < 150 && mouseY > 100 && mouseY < 150 && value == 30) {
    value = 0;

  //bottom left hand corner
  } else if (mouseX > 50 && mouseX <100 && mouseY> 100 && mouseY<150 && value2 == 100) {
    value = 200;

  //top left hand corner
  } else if (mouseX > 50 && mouseX <100 && mouseY > 50 && mouseY < 100 && value3 == 50) {
    value = 250;

  //top right hand corner
  } else if (mouseX >100 && mouseX <150 && mouseY>50 && mouseY <100 && value4 == 140) {
    value = 10;
  } else {
    value = 140;
  }
}
