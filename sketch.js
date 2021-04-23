var ca,caruning;
var loki,lokirun;
var ground;
var invisibleground;
 

function preload(){
  caruning=loadAnimation("ca1.jpg","ca2.jpg","ca4.jpg")
  lokirun=loadAnimation("m2.png","m3.png","m4.png","m5.png")
}

function setup() {
createCanvas(800,400);
ca=createSprite(200, 350, 50, 50);
ca.addAnimation("ca",caruning)
loki=createSprite(700,300,50,50);
loki.addAnimation("loki",lokirun)
ground=createSprite(400,400,800,10);
ground.shapeColor="brown";
ground.x=ground.width/2;
ground.velocityX=-3
invisibleground=createSprite(400,400,800,10);
invisibleground.visible="false";



}

function draw() {
  background(255,255,255);  
  if (ground.x<0){
    ground.x=ground.width/2;
  }
  if (keyDown("space")){
    ca.velocityY=-9;
  }
  ca.velocityY=ca.velocityY+0.5;
  ca.collide(invisibleground);
  drawSprites();

}
