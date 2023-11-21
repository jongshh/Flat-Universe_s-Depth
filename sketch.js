// One ParticleSystem
let emitter;

//{!1} One repeller
let repeller;
let repel;

function setup() {
  createCanvas(640, 640);
  emitter = new Emitter(width / 2, height/2);
}

function draw() {
  background(0);
  repeller = new Repeller(mouseX, mouseY);
  repeller.setPower(repel);
  emitter.addParticle();
  // We’re applying a universal gravity.
  let gravity = createVector(0, 0.1);
  emitter.applyForce(gravity);
  //{!1} Applying the repeller
  emitter.applyRepeller(repeller);
  emitter.run();

  repeller.show();
}
