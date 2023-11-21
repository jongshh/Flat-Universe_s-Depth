// One ParticleSystem
let emitter;
// let emitters = [];

let repeller;
let attractor;
let Rforce = 0;
let Aforce = 0;

function setup() {
  createCanvas(640, 640);
  emitter = new Emitter(width/2, height/2);
}

// function mouseClicked(){
//   let s = new Emitter(mouseX, mouseY);
//   emitters.push(s);
// }

function draw() {
  background(255);

  let posX = width/2;
  let posY = height/2-200;
  let gravity = createVector(0, 0.1);

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

  repeller = new Repeller(mouseX, mouseY);
  attractor = new Attractor(posX,posY);

  repeller.setPower(Rforce);
  attractor.setPower(Aforce);

  // for(let s of emitters){
  emitter.addParticle();
  emitter.applyForce(gravity);
  emitter.applyRepeller(repeller);
  emitter.applyAttractor(attractor);
  emitter.run();
//}
  repeller.show();
  attractor.show();
}
