class Materialparticle extends Starphysic {
  constructor(x, y, s, life) { //컨스트럭터의 값을 항상 우선으로 함?
    super(x, y, s, life) // 슈퍼클래스에서 가져올 인자 값
    this.c = color(0);
  }

  // 실행 구문
  // 힘 적용 (f 값 수행)

  applyForce(f) {
    this.acceleration.add(f);
  }


  // 파티클의 모양 
  show() {
    noStroke();
    stroke(0, this.lifespan);
    strokeWeight(0);
    fill(this.c, this.lifespan);
    circle(this.position.x, this.position.y, this.size);
  }

  // 파티클 제거 조건 추가
  isDead() {
    return this.lifespan < 0.0;
  }
}

