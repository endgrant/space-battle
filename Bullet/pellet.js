// Pellet Bullet


class Pellet extends Bullet {
  constructor(index, isPlayer, position) {
    super(index, isPlayer, position);
    this.radius = 8
    this.velocity *= 5.5;
    this.fillColor = "#FFD8D2";
  }
}