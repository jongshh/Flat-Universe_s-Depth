
let materialsystem = [];
let matter = [];
let Aforce = 0;
// let Msize = 0;
let s;
let m;
let cursor;

//Gui
let gui;
let params = {
  materiallife : 5000,
  materiallifeMin : 0,
  materiallifeMax : 15000,
  nparticle : 8,
  nparticleMin : 0,
  nparticleMax : 50,
  slife : 25000,
  slifeMin : 0,
  slifeMax : 50000,
  materialmass : 5,
  materialmassMin : 0,
  materialmassMax : 50,
  particlecolor : [200, 200, 200],
  canvascolor : [0, 0, 0],
}

function setup() {
  createCanvas(640, 640);

  gui = createGui('Set your Status');  
  gui.addObject(params);
  gui.setPosition(0, 0);
}

function keyPressed(){ // 파티클 생성
  if (keyCode === ENTER) {
    m = new Materialsystem(mouseX, mouseY, random(1,params.materialmass), params.materiallife, params.nparticle, params.slife); //(X 위치 , Y 위치, 크기, 수명)
    materialsystem.push(m);
  }
}

function keyTyped(){ // 커서 파워 클리어
  if(key === 'c'){
    Aforce = 0;
    }
    
  if(key === 'b'){
    Aforce = Aforce * -1;
    } 
}

function mouseClicked(){ // 마우스 클릭으로 작동하니까 GUI 조작 때 겹쳐 버그 발생
  s = new Matter(mouseX,mouseY);  // 새로운 고정 항성
    matter.push(s);
    s.setPower(Aforce);
}


function draw() {
  background(params.canvascolor);
// 키보드로 파티클들의 밀어내기/당기기 조정 (통합)
let gravity = createVector(0, 0);


  if (keyIsDown(SHIFT)){ // UP/DOWN 이 GUI에 간섭함
    Aforce += 0.1;
  }
  if (keyIsDown(CONTROL)){
    Aforce -= 0.1;
  }

  //비주얼 텍스트
  strokeWeight(1)
  stroke(255)
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
