//checking setPower to judge attract/repel +/- //
class Matter {
    constructor() {
    this.position = Starparticle.position.copy()
    this.power = 0;
    }
  
    setPower(value){ //질량을 받음
      this.power = value;
      // this.awidth = abs(value/10)
    }
    
  
    pullrepel(particle) { //질량에 따라 밀고 당기는 양을 계산하여 각 파티클마다 리턴한다
      let force = p5.Vector.sub(this.position, particle.position);
      let distance = force.mag();
      distance = constrain(distance, 5, 50);
      let strength = (1 * this.power) / (distance * distance);
      force.setMag(strength);
      return force;
    }
  }
  