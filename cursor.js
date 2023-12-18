class Cursor {
    constructor(x, y) {
      this.position = createVector(x, y);
      this.power = 0;
    }
  
    run() {
      this.show();
    }
  
    // Method to update position
    setSize(value){
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
    }

    matter(particle, G) { //파티클 -> 커서
      let force = p5.Vector.sub(this.position, particle.position);
      let distance = force.mag();
      distance = constrain(distance, 5+(abs(this.power)/2), 100); //5+(abs(this.power)/2) 오류 코드 계산 발산 <-아니고 클릭 오류
      let strength = (G * this.power * particle.size) / (distance * distance);
      force.setMag(strength);
      return force;
    }
  }
  