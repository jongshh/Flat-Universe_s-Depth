//깃에서 Matter-Bome code 참고

    class Starexpparticle{
        constructor(position,systemlife,size){
            this.acceleration = createVector();
            this.velocity = createVector(random(0,0),random(0,0));
            this.position = position.copy();
            this.lifespan = 25;
            this.ballrad = size;
            this.systemlife = systemlife/500;
            this.fc = systemlife;
        }
        
      
        run(){
            this.update();
            this.display();
        }
        
        update(){
            this.velocity.add(this.acceleration);
            this.position.add(this.velocity);
            this.lifespan -= 1;
            this.acceleration.add(random(-this.systemlife*10, this.systemlife*10), random(-this.systemlife*10, this.systemlife*10));
            this.velocity.limit(1);
            
        }
      
        applyForce(aForce){
          this.acceleration.add(aForce);
        }
        
        display(){
            stroke(this.fc,25,25,this.lifespan);
            strokeWeight(3);
            fill(255 - this.fc,25,25, this.lifespan);
            ellipse(this.position.x, this.position.y, this.ballrad, this.ballrad);
        }  
      
        isDead(){
          return this.lifespan < 0;
        }
      }