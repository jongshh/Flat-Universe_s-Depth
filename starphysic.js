//슈퍼 클래스, 내부에 파티클 움직임에 대한 요소들을 배치할 예정
//https://editor.p5js.org/picxenk@gmail.com/sketches/U078nejRv 예제 참고

class Starphysic {
    constructor(x, y, size, life) {
      this.position = createVector(x, y);
      this.velocity = createVector(random(-1, 1), random(-1, 1));
      this.acceleration = createVector(0, 0);
      this.lifespan = life; // GUI로 조정 (개별적으로)
      this.size = size;
    }

    // 실행 구문
  
    run() {
      this.update();
      this.show();
    }

    // 힘 적용
  
    applyForce(f) {
      this.acceleration.add(f);
    }
  
    // 파티클 움직임 정의 
    update() {
      this.velocity.add(this.acceleration);
      this.position.add(this.velocity);
      this.lifespan -= 1;
      this.acceleration.mult(0);
    }
  
    // 디스플레이 메소드 (기본값)
    show() {
      noStroke();
      stroke(0, this.lifespan);
      strokeWeight(0);
      fill(random([10,50]), this.lifespan);
      square(this.position.x, this.position.y, this.size);
    }

    checkedge(){
      if(this.position.y >= height - this.size){
        this.velocity.y *=-1;
        this.position.y = height - this.size;
      }
    if(this.position.y <= 0 + this.size){
        this.velocity.y *=-1;
        this.position.y = 0 + this.size;
      }
    if(this.position.x >= width - this.size){
        this.velocity.x *=-1;
        this.position.x = width - this.size;
      }
    if(this.position.x <= 0 + this.size){
        this.velocity.x *=-1;
        this.position.x = 0 + this.size;
      }
    }
  
    // 파티클 제거 조건 추가 (충돌시에만, 각 물질마다 조건이 다름)
    isDead() {
        if (this.lifespan < 0.0) {
          return true;
        } else {
          return false; 
        }
      }
  }
  