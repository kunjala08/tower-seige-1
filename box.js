class Box {
    constructor(x, y) {
      var options = {
        isStatic:true,
        
        'friction': 0,
        'restitution':0.2, 
      }
      this.body = Bodies.rectangle(x, y, 25, 50, options);
      this.width = 25;
      this.height = 50;
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      rectMode(CENTER)
      fill(rgb(154, 86, 226))
      stroke(rgb(249, 247, 249))
      rect(pos.x, pos.y, this.width, this.height);
      
    }
  }