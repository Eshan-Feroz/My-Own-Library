var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 400, 200, 100);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(600, 400, 100, 180);
  movingRect.shapeColor = "green";

  /*
  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(300, 100, 50, 50);
  gameObject3.shapeColor = "green";
  gameObject4 = createSprite(400, 100, 50, 50);
  gameObject4.shapeColor = "green";
*/


  
}

function draw() {
  background(0);

  gameObject2.x = World.mouseX;
  gameObject2.y = World.mouseY;

  if(isTouching(gameObject1, gameObject2)){
    gameObject1.shapeColor = "red";
    gameObject2.shapeColor = "red";
  }

  else{
    gameObject1.shapeColor = "green";
    gameObject2.shapeColor = "green";
  }
  drawSprites();
}

