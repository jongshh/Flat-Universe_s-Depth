
class Materialsystem{

  constructor(x, y, s, life, nparticle, slife) {
    this.position = createVector(x, y);
    this.origin = this.position.copy();
    this.explosions = [];
    this.particles = [];
    this.size = s;
    this.lifespan = life; 
    this.nparticle = nparticle;
    this.systemlife = slife;
  }


  addParticle(aColor) { // 파티클 추가
    if(this.particles.length < this.nparticle){
      for (let i = 0; i < this.nparticle; i++) {
    this.particles[i] = new Materialparticle(random(0,width),random(0,height), this.size, this.lifespan); // 각각 x, y 위치, 크기, 수명(GUI 제어)
      }
    }
    for (let particle of this.particles) {
    particle.c = color(aColor);
    }
    this.systemlife -=1;
  }

  applyForce(force) { // (외부 힘 적용, 따로 안쓰임)
    for (let particle of this.particles) {
      particle.applyForce(force);
    }
  }

  //유니버셜 어트렉터/리펠러 시스템

  applyMatter(matter,m) { //밀고 당기기
    for (let particle of this.particles) {
      for (matter of m){
      let force = matter.matter(particle);
      particle.applyForce(force);
      }
    }
  }

  applyCMatter(matter) { //밀고 당기기
    for (let particle of this.particles) {
      let force = matter.matter(particle);
      particle.applyForce(force);
    }
  }

  run(){
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const particle = this.particles[i];
      particle.run();
      if (particle.isDead()) {
        this.particles.splice(i, 1);
        let exp = new Starexpsystem(particle.position,this.size);
        this.explosions.push(exp);
        exp.addParticle();
      }
    }

    for(let exp of this.explosions){
      exp.run();
      if (exp.life()) {
        this.explosions.splice(exp, 1);
      }
    }
   }

  life(){
    return this.systemlife < 0;
  }
}
