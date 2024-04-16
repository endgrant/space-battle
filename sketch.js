const boardHeight = 600;
const playMargin = 8;

let ship;
let bullets = [];

let spawnFreq = 2000;
let enemies = [];
let prevSpawnTick = 0;
const pawnWeight = 20;
const knightWeight = 10;
let enemyChoice = [];

const enemyStroke = "#FD3100";
const friendlyStroke = "#FFBB00";


// Constant time array element removal
Array.prototype.deref = function arrayDeref(i) {
  this[i] = this[this.length - 1];
  this[i].updateIndex(i);
  this.pop();
}


// Called when the program starts
function setup() {
  for (let i = 0; i < pawnWeight; i++) {
    enemyChoice.push(Pawn);
  }
  for (let i = 0; i < knightWeight; i++) {
    enemyChoice.push(Knight);
  }
  
  strokeWeight(2);
  createCanvas(boardHeight * 2, boardHeight);
  ship = new Ship(createVector(playMargin, height/2));
}


// Draws every frame
function draw() {
  background(0);
  
  // Spawn a new enemy
  if (millis()-spawnFreq > prevSpawnTick) {
    prevSpawnTick = millis();
    let enemy = random(enemyChoice);
    enemies.push(new enemy(
      enemies.length,
      createVector(width - playMargin * random(40), random(playMargin, height - playMargin))));
  }
  
  // Process ship
  ship.process();
  
  // Move projectiles
  for (let b = 0; b < bullets.length; b++) {
    bullets[b].process();
  }
  
  // Process enemies
  for (let e = 0; e < enemies.length; e++) {
    enemies[e].process();
  }
}