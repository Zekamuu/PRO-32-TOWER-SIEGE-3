class slingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.05,
            length:5
        }
        this.pointB = pointB;
        this.constraint = Constraint.create(options);
        World.add(matterWorld, this.constraint);
    }
    attach(body){
        this.constraint.bodyA = body;
    }
    fly(){
        this.constraint.bodyA = null;
    }
    show(){
        if(this.constraint.bodyA){
            var pointA = this.constraint.bodyA.position;
            var pointB =  this.pointB;
            push();
            
            stroke(255);
            strokeWeight(7);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
    
            pop();
        }
    }
   
}