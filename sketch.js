
let materialsystem = [];
let matter = [];
let explosions = [];
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
  nparticle : 15,
  nparticleMin : 1,
  nparticleMax : 50,
  slife : 25000,
  slifeMin : 0,
  slifeMax : 50000,
  materialmass : 5,
  materialmassMin : 0,
  materialmassMax : 50,
  starlife : 1500,
  starlifeMin : 1,
  starlifeMax : 50000,
  gravity : 1,
  gravityMin : -10,
  gravityMax : 10,
  particlecolor : [200, 200, 200],
  canvascolor : [0, 0, 0],
}

function setup() {
  createCanvas(1000, 1000);

  gui = createGui('Set your Status');  
  gui.addObject(params);
  gui.setPosition(0, 0);
}

function keyPressed(){ // 파티클 생성
  if (keyCode === ENTER) {
    m = new Materialsystem(mouseX, mouseY, random(1,params.materialmass), params.materiallife, params.nparticle, params.slife, params.gravity); //(X 위치 , Y 위치, 크기, 수명)
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

  if(key === '1'){
    Aforce = 10;
    } 

  if(key === '2'){1
    Aforce = 50;
    } 

  if(key === '3'){1
    Aforce = 100;
    } 

  if(key === '4'){1
    Aforce = 300;
    } 

}

function mouseClicked(){ // 마우스 클릭으로 작동하니까 GUI 조작 때 겹쳐 버그 발생
  s = new Matter(mouseX,mouseY,Aforce,params.starlife);  // 새로운 고정 항성
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
  text("Currect Cursor Mass : "+nf(Aforce*10,1,0),width/2-100,height-height+20);


// 커서 구문
  cursor = new Cursor(mouseX, mouseY);
  cursor.setSize(Aforce);
  cursor.run();


//고정 항성 구문
  for (s of matter){
    s.run();
    // s.applyForce();
    if (s.life()) {
      matter.splice(s, 1);
      let exp = new Starexpsystem(s.position,s.power);
      explosions.push(exp);
      exp.addParticle();
    }
  }
  for(let exp of explosions){
    exp.run();
    if (exp.life()) {
      explosions.splice(exp, 1);
    }
  }


  //물질 구문
  for (m of materialsystem){
  m.applyMatter(s, matter,params.gravity);
  m.applyCMatter(cursor,params.gravity);
  m.applyForce(gravity);
  m.takeDistance();
  m.applyPMatter(params.gravity);
  m.run();
  m.addParticle(params.particlecolor);
  if (m.life()) {
    materialsystem.splice(m, 1);
  }
  } 
}
