// One ParticleSystem
let emitter;
// let emitters = [];

// // let attractors = [];
// let n = 1;

let repeller;
let attractor;
let Rforce = 0;
let Aforce = 0;



function setup() {
  createCanvas(640, 640);

  let posX = width/2;
  let posY = height/2-200;

  emitter = new Emitter(width/2, height/2);
  attractor = new Attractor(posX, posY);

  // for (let i = 0; i < n; i++) {
  //   let atn = new Attractor();
  //   attractors.push(atn);
  // }
}

// function mouseClicked(){
//   let s = new Emitter(mouseX, mouseY);
//   emitters.push(s);
// }

function draw() {
  background(255);

  let gravity = createVector(0, 0);
  let rdpower = createVector(random(-1,1), random(-1,1));

  if (keyIsDown(UP_ARROW)){
    Rforce -= 1;
  }
  if (keyIsDown(DOWN_ARROW)){
    Rforce += 1;
  }
  if (keyIsDown(LEFT_ARROW)){
    Aforce -= 1;
  }
  if (keyIsDown(RIGHT_ARROW)){
    Aforce += 1;
  }

  // for (let atn of attractors) {
  //   atn.setPower(Aforce);
  //   atn.applyForce(rdpower);
  //   atn.run();
  // }
  repeller = new Repeller(mouseX, mouseY);
  // attractor = new Attractor(posX,posY);


  repeller.setPower(Rforce);

  attractor.setPower(Aforce);
  attractor.applyForce(rdpower);

  repeller.run();
  attractor.bound(width, height);
  attractor.run();


  // for(let s of emitters){
  emitter.addParticle();
  emitter.applyForce(gravity);
  emitter.applyRepeller(repeller);
  emitter.applyAttractor(attractor);
  emitter.run();

//}
}
