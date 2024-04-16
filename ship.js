// Ship class

const shipRadius = 16;
const maxVelocity = 2.4;
const acceleration = 0.1;
const firerate = 2;
const maxHealth = 5;
let prevShipFireTick = 0;


class Ship {
  constructor(position) {
    this.radius = shipRadius;
    this.position = position.add(shipRadius);
    this.velocity = 0;
    this.health = maxHealth;
  }
  
  
  // Registers player inputs
  processInputs() {
    let moved = false;
    
    // Handle weapon
    if (millis()-1000/firerate > prevShipFireTick &&
        keyIsDown(32)) { // Fire weapon (SPACE)
      prevShipFireTick = millis();
      ship.fire();
    }
    
    // Handle acceleration input and velocity changes
    if (keyIsDown(83)) { // Move down (S KEY)
      this.velocity += acceleration;
      moved = true;
    }
    if (keyIsDown(87)) { // Move up (W KEY)
      this.velocity -= acceleration;
      moved = true;
    }
    
    if (!moved) {
      // Apply deceleration dampeners
      this.velocity = lerp(this.velocity, 0, acceleration);
    }    
  }
  
  
  // Moves the ship based on the current velocity
  applyVelocity() {
    this.velocity = constrain(this.velocity, -maxVelocity, maxVelocity);
    
    this.position.y += this.velocity;
    this.position.y = constrain(this.position.y, playMargin, height-playMargin);
  }
  
  
  // Draws the ship for a single frame
  process() {
    this.processInputs();
    this.applyVelocity();
    
    stroke(friendlyStroke);
    fill("#E9E9EB");
    circle(this.position.x, this.position.y, this.radius);
  }
  
  
  // Fires the ship's weapon
  fire() {
    bullets.push(new Pellet(
      bullets.length, true, this.position.copy()));
  }
  
  
  // Hit by a bullet
  hit() {
    this.health -= 1;
    
    if (this.health <= 0) {
      this.die();
    }
  }
  
  
  // Player died
  die() {
    noLoop();
  }
}