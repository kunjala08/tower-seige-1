class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 5,
            friction:2,
            
        }
        this.pointB= pointB;
        this.bodyA= bodyA;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
      this.sling.bodyA=null;
        
    }
    display(){
       if(this.sling.bodyA){
        var pointA = this.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        fill("black")
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}