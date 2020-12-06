var PLAY, END , gameState
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
monkey_running =  loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {
 createCanvas(600, 600); 
  
  
   //creating monkey
  monkey = createSprite(30,350,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  
  ground = createSprite(400,350,1220,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x)
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();

  
}


function draw() {
 background(220);
  drawSprites();
  
  monkey.collide(ground)
  
  if (gameState===PLAY){
    if(keyDown("space") && monkey.y >= 159){
       monkey.velocityY = -12;
    }
     
    monkey.velocityY = monkey.velocityY + 0.8
    
    if (ground.x < 0){
      ground.x = ground.width/2
      
       if(obstacleGroup.isTouching(monkey)){
        gameState = END;
      
     
      
  
}
  }
    





   spawnFood();
    spawnObstacles();


}
   else if (gameState === END) {
    
    //set velcity of each game object to 0
    ground.velocityX = 0;
    trex.velocityY = 0;
    obstaclesGroup.setVelocityXEach(0);
    cloudsGroup.setVelocityXEach(0);
    
  
    
    //set lifetime of the game objects so that they are never destroyed
    obstaclesGroup.setLifetimeEach(-1);
    cloudsGroup.setLifetimeEach(-1);
    
 
  
  }
  
  
  
}


function spawnFood() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var banana = createSprite(400,350,1220,10);
    banana.y = Math.round(random(100,350));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
  
    
    //add each cloud to the group
    FoodGroup.add(banana);
  }
}
function spawnObstacles() {
    if (frameCount % 60 === 0) {
    var obstacle = createSprite(400,350,1220,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstacleGroup.add(obstacle);
  }
}

