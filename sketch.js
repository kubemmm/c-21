var object2, object1;
var rect1,rect2,rect3,rect4;

function setup() {
  createCanvas(1200,800);
  MovingRect = createSprite(600, 400, 50, 80);
  MovingRect.shapeColor = "green";
  MovingRect.debug = true;

  fixedRect = createSprite(400,200,80,30);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  rect1=createSprite(300,300,80,50);
  rect1.shapeColor="green";

  rect2=createSprite(500,500,50,50);
  rect2.shapeColor="green";


  rect3=createSprite(300,500,60,68);
  rect3.shapeColor="green";

  rect4=createSprite(100,400,20,80);
  rect4.shapeColor="green";


}

function draw() {
  background(0,0,0);  
  MovingRect.x = World.mouseX;
  MovingRect.y = World.mouseY;

  if(isTouching(MovingRect,rect3)){
    MovingRect.shapeColor="red";
    rect3.shapeColor="red";
  }
  else{
    MovingRect.shapeColor="green";
    rect3.shapeColor="green";
  }
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