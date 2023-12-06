
let materialsystem = [];
let matter = [];
let Aforce = 0;
let Msize = 0;
let s;
let m;
let cursor;

//Gui
let gui;
let params = {
  materiallife : 10000,
  materiallifeMin : 0,
  materiallifeMax : 25000,
  nparticle : 15,
  nparticleMin : 0,
  nparticleMax : 50,
  slife : 1500,
  slifeMin : 0,
  slifeMax : 5000,
  materialmass : 5,
  materialmassMin : 0,
  materialmassMax : 50,
  particlecolor : [50, 50, 50],
}

function setup() {
  createCanvas(640, 640);

  gui = createGui('Set your Status');  
  gui.addObject(params);
  gui.setPosition(0, 0);
}

function keyPressed(){
  if (keyCode === ENTER) {
    m = new Materialsystem(mouseX, mouseY, params.materialmass, params.materiallife, params.nparticle, params.slife); //(X 위치 , Y 위치, 크기, 수명)
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


  // if (keyIsDown(UP_ARROW)){
  //   Mforce -= 0.1;
  // }
  // if (keyIsDown(DOWN_ARROW)){
  //   Mforce += 0.1;
  // }
  if (keyIsDown(UP_ARROW)){
    Aforce += 0.1;
  }
  if (keyIsDown(DOWN_ARROW)){
    Aforce -= 0.1;
  }
  if (keyIsDown(CONTROL)){
    Msize -= 0.001;
  }
  if (keyIsDown(SHIFT)){
    Msize += 0.001;
  }

  //비주얼 텍스트
  strokeWeight(1)
  fill(0);
  textSize(20);
  text("Currect Cursor Mass : "+nf(Aforce*10,1,0),width/2-115,height-20);


// 커서 구문
  cursor = new Cursor(mouseX, mouseY);
  cursor.setSize(Aforce);
  cursor.run();


//고정 항성 구문
  for (s of matter){
    s.run();
  } 

  //물질 구문
  for (m of materialsystem){
  m.sizeInterval(Msize);
  m.applyMatter(s, matter);
  m.applyCMatter(cursor);
  m.applyForce(gravity);
  m.run();
  m.addParticle(params.particlecolor);
  if (m.life()) {
    materialsystem.splice(m, 1);
  }
  } 
}
