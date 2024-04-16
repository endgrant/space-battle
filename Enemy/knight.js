// Knight Enemy
class Knight extends Enemy {
  constructor(index, position) {
    super(index, position);
    this.health = 2;
    this.radius = 20;
    this.firerate = 0.7;
    this.bullet = Pellet;
    this.fillColor = "#FF9800";
  }
}