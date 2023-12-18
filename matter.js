//checking setPower to judge attract/repel +/- 
class Matter extends Starphysic{
  constructor(x,y,s,life){
  super(x, y, s, life);
  this.velocity = createVector(random(-s/(s-5), s/(s-5)), random(-s/(s-5), s/(s-5)));
  this.power = s;
  }

  // applyForce(force) {
  //   let f = p5.Vector.div(force, this.power);
  //   this.acceleration.add(f);
  // }

  run() {
    this.show();
    this.update();
    this.checkedge();
    this.lifespan -= 1;
  }
  

  // Method to update position
  setPower(value){
    this.power = value;

  }

  checkedge(){ // 캔버스 충돌
    if(this.position.y >= height - this.power){
      this.velocity.y *=-1;
      this.position.y = height - this.power;
    }
  if(this.position.y <= 0 + this.power){
      this.velocity.y *=-1;
      this.position.y = 0 + this.power;
    }
  if(this.position.x >= width - this.power){
      this.velocity.x *=-1;
      this.position.x = width - this.power;
    }
  if(this.position.x <= 0 + this.power){
      this.velocity.x *=-1;
      this.position.x = 0 + this.power;
    }
  }

  show() { // 항성 보이기
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
  }
  

  matter(particle,G) { //파티클 -> 항성
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

