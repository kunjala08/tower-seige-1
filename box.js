class Box {
    constructor(x, y) {
      var options = {
        isStatic:false,
        'density':1.5,
        'friction': 1.0,
        'restitution':5
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