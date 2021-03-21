
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var BananasGroup, obstaclesGroup
var score
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600)
  
 
  
  
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
  
  
  ground=createSprite(400,350,900,10)
  ground.velocityX=-4
  
  bananasGroup=new Group();
  obstaclesGroup=new Group();
}



function draw() {
  background("lightblue")
  
  if(ground.x<0){
    ground.x=ground.width/2
  }
  if(keyDown("space")){
    monkey.velocityY=-12
  }
  monkey.velocityY=monkey.velocityY+0.8
  
  monkey.collide(ground)
  
  spawnBanana();
  spawnObstacles();
  
  drawSprites();
  
  if(obstaclesGroup.isTouching(monkey)){
    ground.velocityX=0
    monkey.velocityY=0
    obstaclesGroup.setVelocityXEach(0)
    bananasGroup.setVelocityXEach(0)
    obstaclesGroup.setLifetimeEach(-1)
    bananasGroup.setLifetimeEach(-1)
  }
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time: "+survivalTime,100,50);
  
  
}

function spawnBanana(){
 if (frameCount % 80 === 0) {
     banana = createSprite(600,250,40,10);
     banana.y = Math.round(random(120,200));
     banana.addImage(bananaImage);
     banana.scale = 0.1;
     banana.velocityX = -3;
    
     //assign lifetime to the variable
     banana.lifetime = 600;
    
    //adjust the depth
     banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //adding cloud to the group
    bananasGroup.add( banana);
    }

}

function spawnObstacles(){
  if (frameCount % 200 === 0){
   var obstacle = createSprite(800,320,10,40);
   obstacle.velocityX = -6
   
    
   obstacle.addImage(obstaceImage)
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.1;
    obstacle.lifetime = 600;
   
   //add each obstacle to the group
    obstaclesGroup.add(obstacle);
 }

  
}

 




