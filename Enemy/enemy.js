// Enemy class


class Enemy {  
  constructor(index, position) {
    if (this.constructor === Enemy) {
      throw new TypeError('Abstract class "Enemy" cannot be instantiated directly.');
    }
    
    this.prevFireTick = 0;
    
    this.index = index;
    this.position = position;
  }
  
  
  // Updates this Enemy's memory of its own index
  updateIndex(i) {
    this.index = i;
  }
  
  
  // Draws the enemy for a single frame
  process() {
    // Fire bullet at firerate frequency
    if (millis()-1000/this.firerate > this.prevFireTick) {
      this.prevFireTick = millis();
      this.fire();
    }
    
    stroke(enemyStroke);
    fill(this.fillColor);
    circle(this.position.x, this.position.y, this.radius);
  }
  
  
  // Fires this enemy's bullet
  fire() {
    bullets.push(new this.bullet(
      bullets.length, false, this.position.copy()));
  }
  
  
  // Enemy hit by bullet
  hit() {
    this.health -= 1;
    
    if (this.health <= 0) {
      this.die();
    }
  }
  
  
  // Enemy died
  die() {
    enemies.deref(this.index);
  }
}