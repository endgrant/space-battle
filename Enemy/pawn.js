// Pawn Enemy
class Pawn extends Enemy {
  constructor(index, position) {
    super(index, position);
    this.health = 1;
    this.radius = 16;
    this.firerate = 0.4;
    this.bullet = Pellet;
    this.fillColor = "#c23616";
  }
}