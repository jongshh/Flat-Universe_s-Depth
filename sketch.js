
let starsystem;
let matter;
let Mforce = 0;

function setup() {
  createCanvas(640, 640);
  
  matter = new Matter();//포지션 리턴값

}

function draw() {
  background(255);


// 키보드로 파티클들의 밀어내기/당기기 조정 (통합)

 starsystem = new Starsystem(mouseX, mouseY, Mforce, 255); //(X 위치 , Y 위치, 크기, 수명)

  if (keyIsDown(UP_ARROW)){
    Mforce -= 1;
  }
  if (keyIsDown(DOWN_ARROW)){
    Mforce += 1;
  }

  matter.setPower(Mforce);

  starsystem.addParticle();
  starsystem.applyMatter(matter);
  starsystem.run();

}
