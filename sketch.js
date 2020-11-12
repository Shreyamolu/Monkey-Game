
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var BananaGroup,ObstacleGroup;

var score = 0;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  BananaGroup = createGroup();
  ObstacleGroup = createGroup();
 
}



function setup() {
    createCanvas(600, 400);
  
    monkey = createSprite(80,315,100,10);
    monkey.addAnimation("moving",monkey_running);
    monkey.scale = 0.1;
  
    ground = createSprite(400,350,900,10);
    ground.velocityX = -5;
    ground.x = ground.width/2;
  
}


function draw() {
  background("white");
  
    stroke("white");
    textSize(20);
    fill("white");
    text("Score + " + score,200,50);
  
    stroke("black");
    textSize(20);
    fill("black");
    survivalTime = Math.ceil(frameCount/frameRate());
    text("Survival Time = " + survivalTime,210,50);
  
  
    if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  
      if (ground.x > 400){
      ground.x = ground.width/2;
     }
  
  spawnObstacles();
  spawnFood();
  
  drawSprites();
}

function spawnObstacles()
{
   if (frameCount % 300 === 0)
   {
     var obstacle = createSprite(600,330,10,40);
     obstacle.addImage(obstacleImage);
     obstacle.scale = 0.1;
     obstacle.velocityX = -4;
     obstacle.lifetime = 200;
     ObstacleGroup.add(obstacle);
   }
}
function spawnFood()
{
   if (frameCount % 80 === 0)
   {
     var banana = createSprite(600,200,10,40);
     banana.y = Math.round(random(120,200));
     banana.addImage(bananaImage);
     banana.scale = 0.05;
     banana.velocityX = -4
     banana.lifetime = 200;
     BananaGroup.add(banana);
   }
}
