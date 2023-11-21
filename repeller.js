class Repeller {
  constructor(x, y) {
    this.position = createVector(x, y);
    //{!1} How strong is the repeller?
    this.power = 150;
  }

  setPower(value){
    this.power = map(value, 0, width, -150,150);
  }

  show() {
    noStroke();
    stroke(0);
    strokeWeight(0);
    fill(127,0,0);
    circle(this.position.x, this.position.y, 0);
  }

  repel(particle) {
    //{!6 .code-wide} This is the same repel algorithm we used in Chapter 2: forces based on gravitational attraction.
    let force = p5.Vector.sub(this.position, particle.position);
    let distance = force.mag();
    distance = constrain(distance, 1, 50);
    let strength = (-1 * this.power) / (distance * distance);
    force.setMag(strength);
    return force;
  }
}
