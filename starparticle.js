
class Starparticle {
    constructor(x, y) {
      this.position = createVector(x, y);
      this.velocity = createVector(random(-1, 1), random(-1, 1));
      this.acceleration = createVector(0, 0);
      this.lifespan = 255.0; // GUI로 조정
    }

    // 실행 구문
  
    run() {
      this.update();
      this.show();
    }

    // 힘 적용 (f 값 수행)
  
    applyForce(f) {
      this.acceleration.add(f);
    }
  
    // 파티클 움직임 정의 (슈퍼 클래스로 재정의 예정)
    update() {
      this.velocity.add(this.acceleration);
      this.position.add(this.velocity);
      this.lifespan -= 2;
      this.acceleration.mult(0);
    }
  
    // 파티클의 모양 (슈퍼 클래스로 재정의 예정)
    show() {
      noStroke();
      stroke(0, this.lifespan);
      strokeWeight(0);
      fill(random([10,50]), this.lifespan);
      square(this.position.x, this.position.y, 8);
    }
  
    // 파티클 제거 조건 추가
    isDead() {
      return this.lifespan < 0.0;
    }
  }
  