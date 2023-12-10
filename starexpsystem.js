//깃에서 Matter-Bomb code 참고

class Starexpsystem {
    constructor(position,size) {
      this.origin = position.copy();
      this.particles = [];
      this.systemlife = 60;
      this.count = 20;
      this.size = size;
    }
    
    addParticle(){
      if (frameCount%15 == 0){
      for (let i = 0; i < this.count; i++){
    this.particles.push(new Starexpparticle(this.origin,this.systemlife,this.size));
      }
    }
    this.systemlife -=1;
    }
    
    add(aForce) {
      for (let p of this.particles) {
        p.applyForce(aForce);
      }
    }
    
    run(){
        for (let i = this.particles.length-1; i >= 0; i--) {
      let p = this.particles[i];
      p.run();
      if (p.isDead()){
        this.particles.splice(i, 1);
      }
    }
  
    }
    
    life(){
      return this.systemlife < 0;
    }
  }