function setup()
{
  //create a drawing service 700px wide, 500px tall
  createCanvas(600,600);
  
}

function draw()
{
  //create a background using RGB values
  background(255,255,255)

  strokeWeight(0,0,0)
  // change the paint brush to a specific color according to RGB values
  fill(222,177,0);

  // create a rectangle at x,y coordinates 10,10 with length x height at 100 x 50
  rect(0,0,200,200);

  rect(0,600-200,200,200);

  rect(600-200,0,200,200);

  rect(600-200,600-200,200,200)

  rect(600-400,600-400,200,200)

  fill(255,255,255,100)
translate(300,300)

  for(var q=0; q<20; q++){
    ellipse(0,0,200,100);
    rotate (PI/2);
  }

}	
