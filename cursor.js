class Cursor {
    constructor(x, y) {
      this.position = createVector(x, y);
      this.size = 0;
    }
  
    run() {
      this.show();
    }
  
    // Method to update position
    setSize(value){
      this.size = value;
    }

  
    show() {
      noStroke();
      stroke(0);
      strokeWeight(0);
      if(this.size > 0){
        fill(127,0,0);
      }
      else if(this.size < 0){
        fill(0,0,127);
      }

      circle(this.position.x, this.position.y, this.size);
    }
  }
  