function cubeReset(){
  cube.x = 100;
  cube.y = 271.8;
  cube.velocityY = 0;
}
function gameSetup(){
  cube = createSprite(100,290,25,25); 
  cube.addImage("cubeImg", cubeImg);
  cube.scale = 0.32
  //cube.debug = "true";
  ground = createSprite(200,320,400,100);
  ground.addImage("groundImg", groundImg);
  ground.scale = 0.7;
  ground.setCollider("rectangle", 0, 25, 475,152);
  //ground.debug = "false";
  ground.depth = -1;
  sun = createSprite(350, 50, 10, 10);
  sun.addImage("sunImg", sunImg);
  sun.scale = 0.03;
  sun.setCollider("circle", 1, 0, 1250);
  //sun.debug = "true";
  sun.depth = -1;
  wallL = createSprite(-10,200,10,500);
  wallR = createSprite(410,200,10,500);
  voidFloor = createSprite(200,475,400,10);
  ceiling = createSprite(200,-10,400,10);
  platform1 = createSprite(200,100,100,10);
  platform1.velocityX = 4;
  //platform1.debug = "true";
  platform1.setCollider("rectangle",0,0,100,10);
  yCalc1 = createSprite(200,50,400,45);
  yCalc1.shapeColor = color(135,206,235);
  yCalc1.depth = -2;
  //yCalc1.debug = "true";
  yCalc1.setCollider("rectangle",0,0,400,50);
  platform2 = createSprite(200, 200, 100, 10);
  platform2.velocityX = -2;
  //platform2.debug = "true";
  platform2.setCollider("rectangle",0,0,100,10);
  yCalc2 = createSprite(200,150,400,50);
  yCalc2.shapeColor = color(135,206,235);
  yCalc2.depth = -2;
  //playform2.debug = "true";
  platformAlt1 = loadImage("sprites/platform/platformAlt1.png");
  platformAlt2 = loadImage("sprites/platform/platformAlt2.png");
  platformAlt3 = loadImage("sprites/platform/platformAlt3.png");
  platformAlt4 = loadImage("sprites/platform/platformAlt4.png");
  platformAlt5 = loadImage("sprites/platform/platformAlt5.png");
  platformAlt6 = loadImage("sprites/platform/platformAlt6.png");
  platformAlt7 = loadImage("sprites/platform/platformAlt7.png");
  platformAlt8 = loadImage("sprites/platform/platformAlt8.png");
  platformAlt9 = loadImage("sprites/platform/platformAlt9.png");
  platformAlt10 = loadImage("sprites/platform/platformAlt10.png");
  var rand1 = Math.round(random(1,10));
    switch(rand1) {
      case 1: platform1.addImage(platformAlt1);
              break;
      case 2: platform1.addImage(platformAlt2);
              break;
      case 3: platform1.addImage(platformAlt3);
              break;
      case 4: platform1.addImage(platformAlt4);
              break;
      case 5: platform1.addImage(platformAlt5);
              break;
      case 6: platform1.addImage(platformAlt6);
              break;
      case 7: platform1.addImage(platformAlt8);
              break;
      case 8: platform1.addImage(platformAlt8);
              break;
      case 9: platform1.addImage(platformAlt9);
              break;
      case 10: platform1.addImage(platformAlt10);
              break;
      default: break;
    }
  var rand2 = Math.round(random(1,10));
    switch(rand2) {
      case 1: platform2.addImage(platformAlt1);
              break;
      case 2: platform2.addImage(platformAlt2);
              break;
      case 3: platform2.addImage(platformAlt3);
              break;
      case 4: platform2.addImage(platformAlt4);
              break;
      case 5: platform2.addImage(platformAlt5);
              break;
      case 6: platform2.addImage(platformAlt6);
              break;
      case 7: platform2.addImage(platformAlt8);
              break;
      case 8: platform2.addImage(platformAlt8);
              break;
      case 9: platform2.addImage(platformAlt9);
              break;
      case 10: platform2.addImage(platformAlt10);
              break;
      default: break;
    }
  spike1 = createSprite();
  spike1.addImage("spikeImg",spikeImg);
  spike2 = createSprite();
  spike2.addImage("spikeImg",spikeImg);
}
function physics(){
  cube.velocityY = cube.velocityY + 0.4;
  cube.collide(ground);
  cube.collide(wallL);
  cube.collide(wallR);
  cube.collide(ceiling);
  ground.velocityX = 0;
  ground.velocityY = 0;
  if(cube.isTouching(sun)){
    cubeReset();
  }
  if(cube.isTouching(voidFloor)){
    cubeReset();
  }
  if(cube.isTouching(spike1)){
    cubeReset();
  }
  if(cube.isTouching(spike2)){
    cubeReset();
  }
  spike1.x = platform1.x;
  spike1.y = platform1.y + 10;
  spike2.x = platform2.x;
  spike2.y = platform2.y + 10;
}
function controls(){
if(keyDown("right")){
    cube.velocityX = 3;
  }
  if(keyWentUp("right")){
    cube.velocityX = 0;
  }
  if(keyDown("left")){
    cube.velocityX = -3;
  }
  if(keyWentUp("left")){
    cube.velocityX = 0;
  }
    if(keyDown("up") && cube.y + ground.y == 588.3){
      cube.velocityY = -9;
  }
  if(keyWentDown("r")){
    cubeReset();
  }
  if(keyWentDown("l")){
    console.log("ground.y =",ground.y);
    console.log("cube.y =",cube.y);
    console.log("platform1.y =",platform1.y);
  }
}
function platformPreloadCleanup(){
  platformAlt1 = loadImage("sprites/platform/platformAlt1.png");
  platformAlt2 = loadImage("sprites/platform/platformAlt2.png");
  platformAlt3 = loadImage("sprites/platform/platformAlt3.png");
  platformAlt4 = loadImage("sprites/platform/platformAlt4.png");
  platformAlt5 = loadImage("sprites/platform/platformAlt5.png");
  platformAlt6 = loadImage("sprites/platform/platformAlt6.png");
  platformAlt7 = loadImage("sprites/platform/platformAlt7.png");
  platformAlt8 = loadImage("sprites/platform/platformAlt8.png");
  platformAlt9 = loadImage("sprites/platform/platformAlt9.png");
  platformAlt10 = loadImage("sprites/platform/platformAlt10.png");
  spikeImg = loadImage("sprites/platform/spikePlaceholder.png");
}
function platforms(){
  if(cube.y + platform1.y == 179){
    if(keyDown("up")){
      cube.velocityY = -9;
    }
  }
  if(cube.y + platform2.y == 379){
    if(keyDown("up")){
      cube.velocityY = -9;
    }
  }
  if(cube.isTouching(yCalc1)){
    cube.collide(platform1);
  }
  if(cube.isTouching(yCalc2)){
    cube.collide(platform2);
  }
  if(platform1.isTouching(wallL)){
    platform1.velocityX = 4;
  }
  if(platform1.isTouching(wallR)){
    platform1.velocityX = -4;
  }
  if(platform2.isTouching(wallL)){
    platform2.velocityX = 2;
  }
  if(platform2.isTouching(wallR)){
    platform2.velocityX = -2;
  }
}