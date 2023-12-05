
class Materialsystem{

  constructor(x, y, s, gui) {
    this.position = createVector(x, y);
    this.origin = this.position.copy();
    this.particles = [];
    this.size = s;
    this.gui = gui; 
  }

  sizeInterval(value){
    this.size -= value
  }

  addParticle() { // 파티클 추가
    this.particles.push(new Materialparticle(this.origin.x, this.origin.y, this.size, this.gui)); // 각각 x, y 위치, 크기, 수명(GUI 제어)
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

  run(){
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const particle = this.particles[i];
      particle.run();
      if (particle.isDead()) {
        this.particles.splice(i, 1);
      }
    }
  }
}
