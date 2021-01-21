class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.2,
          'isStatic': false
      }
      this.body1 = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visibility = 255;

      this.image = loadImage('images/tin.png');
      
      World.add(world, this.body1);
    }
    display(){
      var pos =this.body1.position;
      var angle = this.body1.angle;
      if(this.body1.speed < 5) {
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        
        strokeWeight(4);
        fill("violet");
      
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      } else {
        World.remove(world, this.body1);
        push();
        if(this.Visibility>0){
          this.Visibility = this.Visibility - 30;
          tint(255, this.Visibility);
          imageMode(CENTER);
          image(this.image, this.body1.position.x, this.body1.position.y, this.width, this.height);
        }
        pop();
      }
    }

    score() {
      if(this.Visibility<100 && this.Visibility>0){
        score=score+1;
      }
    }
  }