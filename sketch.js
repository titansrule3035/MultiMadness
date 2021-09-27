//Remember TODO: Add SMALL spikes that kill the player on the bottom of the platforms
var cube, ground, sun, platform1, platform2, spike1, spike2;
var cubeImg, groundImg, sunImg, platformGroup, platformAlt1, platformAlt2, platformAlt3, platformAlt4, platformAlt5, platformAlt6, platformAlt7, platformAlt8, platformAlt9, platformAlt10, spikeImg;
var wallR, wallL, ceiling, voidFloor;
var gameState, yCalc1, yCalc2;
function preload(){
  cubeImg = loadImage("sprites/cube.png");
  groundImg = loadImage("sprites/ground.png");
  sunImg = loadImage("sprites/sun.png");
  platformPreloadCleanup();
}
function setup() {
  createCanvas(400, 400);
  gameSetup();
  platformGroup = new Group();
}
function draw(){
  //set framerate to 60 for smoother animations (and an actual playable game)
  frameRate(60);
  //call controls function
  controls();
  //call physics function
  physics();
  //call platforms function
  platforms();
  //set background to a solid color
  background(135,206,235);
  //make spikes follow platforms
  //draw the sprites onto the canvas
  drawSprites();
}