class Attractor {
    constructor(x, y) {
      this.position = createVector(x, y);
      this.velocity = createVector(0, 0);
      this.acceleration = createVector(0, 0);
      this.power = 0;
    }

    run() {
      this.show();
      this.update();
    }
  
    applyForce(f) {
      this.velocity.add(f);
    }
  
    update() {
      this.velocity.add(this.acceleration);
      this.position.add(this.velocity);
    }

    bound(width, height){
      if (this.position.x > width - this.awidth) {
        this.velocity.x*=-1;
        this.position.x = width - this.awidth;
      } else if (this.position.x < 0 + this.awidth) {
        this.position.x = 0 + this.awidth;
        this.velocity.x*=-1;
      }
  
      if (this.position.y > height - this.awidth) {
        this.velocity.y*=-1;
        this.position.y = height - this.awidth;
      } else if (this.position.y < 0 + this.awidth) {
        this.velocity.y*=-1;
        this.position.y = 0 + this.awidth;
      }
    }
  
    setPower(value){
      this.power = value;
      this.awidth = abs(value/10)
    }
  
    show() {
      noStroke();
      stroke(0);
      strokeWeight(0);
      if(this.power < 0){
        fill(127,0,0);
      }
      else if(this.power > 0){
        fill(0,0,127);
      }
      circle(this.position.x, this.position.y, this.power/5);
    }

    
  
    pull(particle) {
      let force = p5.Vector.sub(this.position, particle.position);
      let distance = force.mag();
      distance = constrain(distance, 5, 50);
      let strength = (1 * this.power) / (distance * distance);
      force.setMag(strength);
      return force;
    }
  }
  