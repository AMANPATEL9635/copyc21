
var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  
  gameobject1 = createSprite(500, 400, 80, 30);
  gameobject1.shapeColor = "green";
  
  gameobject2 = createSprite(1000, 400, 80, 30);
  gameobject2.shapeColor = "green";
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }

  
   else if (isTouching(movingRect,gameobject1)){
    movingRect.shapeColor = "blue";
    gameobject1.shapeColor = "blue";
  }

  else if (isTouching(movingRect,gameobject2)){
    movingRect.shapeColor = "blue";
    gameobject2.shapeColor = "blue";
  }

  else {
    movingRect.shapeColor = "green";
   gameobject1.shapeColor="green"
    fixedRect.shapeColor = "green"
    gameobject2.shapeColor="green"
    
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}


