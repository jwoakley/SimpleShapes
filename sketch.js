
// Setup code goes here
var gDebugMode = true;
var ellipseXpos = 0;
var ellipseYpos = 300;
var ellipseDist = 60;

function setup() {
  createCanvas(1200, 1000);

  textSize(24);
  textAlign(LEFT);

  // print("starting up simlpe shapers");
  // print("Width = " + width);
  // print("Height = " + height);

  // rectMode(CENTER);
 

  ellispseXpos = width/2 - 250;

 }


// Draw code goes here
function draw() {
 background(200, 100, 200);
 
 drawEllipses();
 drawRect();

 if( gDebugMode == true){
    drawDebugInfo();
 }
}
// function mousePressed(){
//   print("mouse pressed at x: " + mouseX + " y:" + mouseY);
// }


function drawDebugInfo(){
  fill(255);
  text("x: " + mouseX + " y:" + mouseY, 20, height - 20);

} 
function keyTyped() {
  if (key === ' ') {
    gDebugMode = !gDebugMode;
  }
}



function drawRect(){
  fill(200, 100, 50);
  rect(width/4, height/2, 100, 400);

  fill(50, 200, 57);
  rect(width/3, height/6, 600, 20);

}
function drawEllipses(){
  fill(150, 200, 177);
  ellipse(ellispseXpos, ellipseYpos, 300, 90);

  fill(15, 20, 77);
  ellipse(ellispseXpos, ellipseYpos + ellipseDist, 300, 90);

}