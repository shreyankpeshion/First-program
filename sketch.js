var box
function setup() {
  createCanvas(800,400);
 box = createSprite(400, 200, 50, 50);
}

function draw() {
  background("black")
  if(keyDown("up")){
    box.y=box.y-5
  }
  if(keyDown("down")){
    box.y=box.y+5
  }
  if(keyDown("left")){
    box.x=box.x-5
  }
  if(keyDown("right")){
    box.x=box.x+5
  }
  drawSprites();
}