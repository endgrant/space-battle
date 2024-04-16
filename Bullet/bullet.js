// Bullet class


class Bullet {
  constructor(index, isPlayer, position) {
    if (this.constructor === Bullet) {
      throw new TypeError('Abstract class "Bullet" cannot be instantiated directly.');
    }
    
    this.index = index;
    this.isPlayer = isPlayer;
    this.position = position;
    
    // Flip the bullet direction if it is enemy-owned
    if (!isPlayer) {
      this.velocity = -1;
    } else {
      this.velocity = 1;
    }
  }
  
  
  // Updates this Bullet's memory of its own index
  updateIndex(i) {
    this.index = i;
  }
  
  
  // Checks to see if this bullet collides with an opposing owner
  isIntersecting() {
    let compute = (entity) => {
      let distance = dist(
        this.position.x,
        this.position.y,
        entity.position.x,
        entity.position.y);
      let radialSum = this.radius + entity.radius;

      if (distance < radialSum) {
        // Colliding
        entity.hit();
        this.destroy();
        return true;
      } else {
        return false;
      }
    }
    
    if (this.isPlayer) { // Player owned, check for enemy collision
      for (let e = 0; e < enemies.length; e++) {
        if (compute(enemies[e])) {
          return;
        }      
      }
    } else {
      compute(ship);
    }
  } 
  
  
  // Moves and draws the bullet for a frame
  process() {
    this.position.x += this.velocity;
    
    if (this.position.x < 0 || this.position.x > width) {
      this.destroy();
      return;
    }
    
    this.isIntersecting();
    
    if (this.isPlayer) {
      stroke(friendlyStroke);
    } else {
      stroke(enemyStroke);
    }
    fill(this.fillColor);
    circle(this.position.x, this.position.y, this.radius);
  }
  
  
  // Destroys the bullet
  destroy() {
    bullets.deref(this.index);
  }
}