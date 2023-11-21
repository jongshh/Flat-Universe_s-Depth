class Repeller {
  constructor(x, y) {
    this.position = createVector(x, y);
    //{!1} How strong is the repeller?
    this.power = 0;
  }

  setPower(value){
    this.power = value;
  }

  show() {
    noStroke();
    stroke(0);
    strokeWeight(0);
    if(this.power > 0){
      fill(127,0,0);
    }
    else if(this.power < 0){
      fill(0,0,127);
    }
    circle(this.position.x, this.position.y, this.power/5);
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
