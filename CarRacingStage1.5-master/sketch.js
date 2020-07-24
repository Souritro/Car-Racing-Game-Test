var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var infinite=[];

var form, player, game;

var cars, car1, car2, car3, car4;
var car1img, car2img, car3img, car4img, trackimg;
var randomx,randomy;
var obstacle;
var formbg;
function preload(){
  car1img=loadImage("images/car1.png");
  car2img=loadImage("images/car2.png");
  car3img=loadImage("images/car3.png");
  car4img=loadImage("images/car4.png");
  trackimg=loadImage("images/track.jpg")
  formbg=loadImage("images/carracing.png")
  groundimg=loadImage("images/ground.png")
  obimg=loadImage("images/kissclipart-plant-stem-clipart-san-pedro-cactus-triangle-cactu-b291e3d5c19e7b46.png")
}

function setup(){
  canvas = createCanvas(displayWidth, displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  //var testvar=allPlayers.pop()
  //console.log(testvar)

  
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.gameover()
  }
  console.log(displayWidth);
  console.log(displayHeight)
}

