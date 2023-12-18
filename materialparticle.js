class Materialparticle extends Starphysic {
  constructor(x, y, s, life) { //컨스트럭터의 값을 항상 우선으로 함?
    super(x, y, s, life) // 슈퍼클래스에서 가져올 인자 값
    this.c = color(0);
    this.sizeadj = 0;
  }

  // 실행 구문
  // 힘 적용 (f 값 수행)

  applyForce(force) {
    let f = p5.Vector.div(force, this.size);
    this.acceleration.add(f);
  }

  applyCollision(distance){
    if(distance < this.size){
      this.lifespan = 0;
      this.sizeadj =  this.sizeadj + this.size
    }
  }

  // 파티클의 모양 
  show() {
    noStroke();
    stroke(0, this.lifespan);
    strokeWeight(0);
    fill(this.c, this.lifespan);
    circle(this.position.x, this.position.y, this.size + this.sizeadj);
  }

  pmatter(other,G) { //파티클 -> 파티클
    let force = p5.Vector.sub(this.position, other.position);
    let distance = force.mag();
    distance = constrain(distance, 5+(abs(this.size)/2), 100);
    let strength = (G * this.size * other.size) / (distance * distance);
    force.setMag(strength);
    return force;
  }

  distance(other){ // 파티클 -> 파티클
    let force = p5.Vector.sub(this.position, other.position);
    let distance = force.mag();
    return distance;
  }


  // 파티클 제거 조건 추가
  isDead() {
    return this.lifespan < 0.0;
  }
}

