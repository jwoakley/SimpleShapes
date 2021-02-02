
// Setup code goes here
function setup() {
  createCanvas(1200, 1000);
  print("starting up simlpe shapers");
  rectMode(CENTER);
   background(200, 100, 200);

 }


// Draw code goes here
function draw() {
	 
 drawEllipses();

 
  fill(200, 100, 50);
  stroke(205,25,5);
  strokeWeight(17);
  rect(width/4, height/2, 100, 400);

   fill(50, 200, 57);
  stroke(255,25,1);
  strokeWeight(1);
  rect(width/3, height/6, 600, 20);




}
function drawEllipses(){
   fill(150, 200, 177);
  stroke(25,251,11);
  strokeWeight(12);
  ellipse(width/3, height/6, 900, 900);

      fill(15, 20, 77);
  stroke(215,21,111);
  strokeWeight(2);
  ellipse(width/11, height/9, 90, 300);

}