class Repeller {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.power = 0;
  }

  run() {
    this.show();
  }

  // Method to update position
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
    let force = p5.Vector.sub(this.position, particle.position);
    let distance = force.mag();
    distance = constrain(distance, 1, 50);
    let strength = (-1 * this.power) / (distance * distance);
    force.setMag(strength);
    return force;
  }
}
