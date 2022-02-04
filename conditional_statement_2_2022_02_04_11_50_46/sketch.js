function setup() {
  createCanvas(1000, 900);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(4);
  noFill();
  if (mouseX > 300 && mouseX < 400){
    fill(255,0,200);
      }
    
    rect(300,200,100,100);  
}
