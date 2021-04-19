//declare variables
var garden, rabbit;
var gardenImg, rabbitImg;
var apple, appleImg;
var appleGroup
var leaf, leafImg, orangeLeaf, orangeImg;
function preload() {
  //adding images
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
  orangeImg = loadImage("orangeLeaf.png");
}

function setup() {

  createCanvas(400, 400);

  // Moving background
  garden = createSprite(200, 200);
  garden.addImage("gardenImg", gardenImg);

  //creating boy running
  rabbit = createSprite(180, 340, 30, 30);
  rabbit.scale = 0.09;
  rabbit.addImage("rabbitImg", rabbitImg);


}


function draw() {
  background(0);

   //Making delay between each apple spawn.
if (frameCount % 80 == 0) {
    spawnApples();
    spawnLeaf();
    spawnOrangeLeaf();
  }

  //rabbit movement behavior
  rabbit.x = World.mouseX;
  

  
  //boundaries
  edges = createEdgeSprites();
  rabbit.collide(edges);

 
  //draw and spawn sprites
 
  drawSprites();
}

//function to spawn the apples
function spawnApples() {
  apple = createSprite(random(50, 350), 10, 10, 10);
  apple.addImage("appleImg", appleImg);
  apple.scale = 0.07
  apple.velocityY = 3;
//lifetime
  apple.lifetime = 130;

}

function spawnLeaf() {
  leaf = createSprite(random(75, 200), 30, 10, 10);
  leaf.addImage("leafImg", leafImg);
  leaf.scale = 0.07
  leaf.velocityY = 3;
//lifetime
  leaf.lifetime = 130;

}

function spawnOrangeLeaf() {
  orangeLeaf = createSprite(random(250, 350), 20, 10, 10);
  orangeLeaf.addImage("orangeImg", orangeImg);
  orangeLeaf.scale = 0.07
  orangeLeaf.velocityY = 3;
//lifetime
  orangeLeaf.lifetime = 130;

}