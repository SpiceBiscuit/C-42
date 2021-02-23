var PLAY = 1;
var END = 0;
var gameState = PLAY;

var man, man_running, man_collided;
var ground, invisibleGround, groundImage;

var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;

var score=0;

var gameOver, restart;


function preload(){
  restartImg = loadImage("restart.png");
  man_running = loadAnimation("Images/man1.png", "Images/man2.png", "Images/man3.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  man = createSprite(width/2, height/2);
  man.addAnimation("run", man_running);
}

function draw() {
  background(0);
  text("Score: "+ score, 500,50);
  
  drawSprites();
}


function reset(){
  gameState = PLAY;
  gameOver.visible = false;
  restart.visible = false;
  
  obstaclesGroup.destroyEach();
  cloudsGroup.destroyEach();
  
  trex.changeAnimation("running",trex_running);
  
  if(localStorage["HighestScore"]<score){
    localStorage["HighestScore"] = score;
  }
  console.log(localStorage["HighestScore"]);
  
  score = 0;
  
}