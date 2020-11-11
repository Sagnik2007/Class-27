class Slingshot{
    constructor(bodyA,bodyB){
        var option = {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.03,
            length:10
        }
        this.sling = Matter.Constraint.create(option);
        World.add(world,this.sling);
    }
    display(){
    var pa = this.sling.bodyA.position
    var pb = this.sling.bodyB.position
        push()
        strokeWeight(5);
        stroke(45);
        line(pa.x,pa.y,pb.x,pb.y)
        pop()
    }
}