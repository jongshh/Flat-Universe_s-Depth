
class Starsystem {

    constructor(x, y, s, gui) {
      this.origin = createVector(x, y);
      this.particles = [];
      this.physic = [];
      this.size = s;
      this.gui = gui
    }
  
    addParticle() {
      this.particles.push(new Starparticle(this.origin.x, this.origin.y, this.size, this.gui)); // 각각 x, y 위치, 크기, 수명(GUI 제어)
      this.physic.push(new Starphysic(this.origin.x, this.origin.y, this.size, this.gui)); // 각각 x, y 위치, 크기, 수명(GUI 제어)
    }
  
    applyForce(force) { // (외부 힘 적용, 따로 안쓰임)
      for (let particle of this.physic) {
        particle.applyForce(force);
      }
    }
  
    //유니버셜 어트렉터/리펠러 시스템

    applyMatter(matter) { //밀고 당기기
      for (let particle of this.physic) {
        let force = matter.pullrepel(particle);
        particle.applyForce(force);
      }
    }

    getPosition(){
      return this.physic.getPosition()
    }
  
    run() {
      for (let i = this.physic.length - 1; i >= 0; i--) {
        const particle = this.physic[i];
        particle.run();
        if (particle.isDead()) {
          this.physic.splice(i, 1);
        }
      }
    }
  }
