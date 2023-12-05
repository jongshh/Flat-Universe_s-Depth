//checking setPower to judge attract/repel +/- //
class Matter {
  constructor(x,y){
  this.power = 0;
  this.position = createVector(x,y);
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
    circle(this.position.x, this.position.y, this.power/2);
  }
  

  matter(particle) { //질량에 따라 밀고 당기는 양을 계산하여 각 파티클마다 리턴한다
    let force = p5.Vector.sub(this.position, particle.position);
    let distance = force.mag();
    distance = constrain(distance, 5, 50);
    let strength = (1 * this.power) / (distance * distance);
    force.setMag(strength);
    return force;
  }
}
