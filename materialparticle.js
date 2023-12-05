class Materialparticle extends Starphysic {
  constructor(x, y, s, gui) { //컨스트럭터의 값을 항상 우선으로 함?
    super(x, y, s, gui) // 슈퍼클래스에서 가져올 인자 값
  }

  // 실행 구문
  // 힘 적용 (f 값 수행)

  applyForce(f) {
    this.acceleration.add(f);
  }

  // getPosition(){
  //   return this.position;
  // }

  // 파티클의 모양 
  show() {
    noStroke();
    stroke(0, this.lifespan);
    strokeWeight(0);
    fill(random([10,50]), this.lifespan);
    square(this.position.x, this.position.y, this.size);
  }

  // 파티클 제거 조건 추가
  isDead() {
    return this.lifespan < 0.0;
  }
}

