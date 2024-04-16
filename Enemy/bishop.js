// Bishop Enemy


class Bishop extends Enemy {
  constructor(index, position) {
    super(index, position);
    this.health = 1;
    this.radius = 12;
    this.firerate = 0.25;
    this.bullet = Sniper;
    this.fillColor = "#24610F";
  }
}