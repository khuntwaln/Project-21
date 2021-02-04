var bullet, wall, thickness;
var speed, weight, damage;

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  bullet = createSprite(50, 200, 50, 50);
  bullet.velocityX = speed;
  bullet.shapeColor = ("Blue");
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = (80,80,80);
  
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(isTouching(bullet,wall)){
    damage = (0.5 * weight * speed * speed) / (thickness * thickness * thickness);
    bullet.velocityX = 0;
    if(damage<=10){
    wall.shapeColor = ("Green");
    }
    else if(damage>10){
    wall.shapeColor = ("red");
    }
    }
}
 
function isTouching(){
  if (bullet.x - wall.x < bullet.width/2 + wall.width/2 && wall.x - bullet.x < wall.width/2+bullet.width/2 && bullet.y - wall.y < bullet.height/2+wall.height/2 && wall.y - bullet.y < wall.height/2+bullet.height/2
   ) {
    return true;
  }
  else {
    return false;
  } 
}

