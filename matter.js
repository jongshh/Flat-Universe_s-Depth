//checking setPower to judge attract/repel +/- 
class Matter{
  constructor(x,y,life){
  // super(x, y, s, life);
  this.power = 0;
  this.position = createVector(x,y);
  this.lifespan = life;
  }

  // applyForce(force) {
  //   let f = p5.Vector.div(force, this.power);
  //   this.acceleration.add(f);
  // }

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
    circle(this.position.x, this.position.y, this.power);
    this.lifespan -= 1;
  }
  

  matter(particle,G) { //질량에 따라 밀고 당기는 양을 계산하여 각 파티클마다 리턴한다
    let force = p5.Vector.sub(this.position, particle.position);
    let distance = force.mag();
    distance = constrain(distance, 5+(abs(this.power)/2), 100);// 5+(abs(this.power/2)), this.power*50
    let strength = (G * this.power * particle.size) / (distance * distance);
    force.setMag(strength);
    return force;
  }

  life() {
    return this.lifespan < 0.0;
  }
}

