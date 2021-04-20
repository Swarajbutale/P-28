class Launcher
{
    constructor(bodyA,pointB) {
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            length : 20,
            stiffness : 0.2
        }
        this.pointB = pointB;
        this.launcher = Constraint.create(options);
        World.add(world,this.launcher);
    }
    fly() {
        this.launcher.bodyA=null
    }

    attach(body) {
        this.launcher.bodyA = body;
    }

    display() {
        var pointA = this.launcher.bodyA.position
        var pointB = this.pointB
        strokeWeight(3)
        stroke(0)
       
    }
}