// Sniper Bullet


class Sniper extends Bullet {
  constructor(index, isPlayer, position) {
    super(index, isPlayer, position);
    this.radius = 4
    this.velocity *= 9;
    this.fillColor = "#7DCD96";
  }
}