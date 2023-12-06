
let materialsystem = [];
let matter = [];
let Mforce = 5;
let Aforce = 0;
let Msize = 0;
let s;
let cursor;
let life = 10000;
let nparticle = 15;
let slife = 1500;

function setup() {
  createCanvas(640, 640);
}

function keyPressed(){
  if (keyCode === ENTER) {
    let m = new Materialsystem(mouseX, mouseY, Mforce, life, nparticle, slife); //(X 위치 , Y 위치, 크기, 수명)
    materialsystem.push(m);
  }
}

function keyTyped(){
if(key === 'b'){
  Aforce = Aforce * -1;
  }
}

function mouseClicked(){
  s = new Matter(mouseX,mouseY);  // 새로운 고정 항성
    matter.push(s);
    s.setPower(Aforce);
}


function draw() {
  background(255);
// 키보드로 파티클들의 밀어내기/당기기 조정 (통합)
let gravity = createVector(0, 0);


  if (keyIsDown(UP_ARROW)){
    Mforce -= 0.1;
  }
  if (keyIsDown(DOWN_ARROW)){
    Mforce += 0.1;
  }
  if (keyIsDown(LEFT_ARROW)){
    Aforce -= 0.1;
  }
  if (keyIsDown(RIGHT_ARROW)){
    Aforce += 0.1;
  }
  if (keyIsDown(CONTROL)){
    Msize -= 0.001;
  }
  if (keyIsDown(SHIFT)){
    Msize += 0.001;
  }

  cursor = new Cursor(mouseX, mouseY);
  cursor.setSize(Aforce);
  cursor.run();



  for (let s of matter){
    s.run();
  } 

  for (let m of materialsystem){
  m.sizeInterval(Msize);
  m.applyMatter(s, matter);
  m.applyCMatter(cursor);
  m.applyForce(gravity);
  m.run();
  m.addParticle();
  if (m.life()) {
    materialsystem.splice(m, 1);
  }
  } 
}
