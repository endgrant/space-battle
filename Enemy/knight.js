// Knight Enemy
class Knight extends Enemy {
  constructor(index, position) {
    super(index, position);
    this.health = 2;
    this.radius = 20;
    this.firerate = 0.8;
    this.bullet = Bullet;
  }
  
  
  process() {
    fill("#FF9800");
    super.process();
  }
}