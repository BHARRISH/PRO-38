var canvas, backgroundImg;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var kid1,kid2,kid3,kid4;

var kids;

var kid1Img,kid2Img,kid3Img,kid4Img;
var trackImg;

function preload(){
  backgroundImg = loadImage("images/BACKGROUND.jpeg");
  kid1Img = loadImage("images/kid1new.png");
  kid2Img = loadImage("images/kid2new.png");
  kid3Img = loadImage("images/kid3new.png");
  kid4Img = loadImage("images/kid4new.png");
}

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
