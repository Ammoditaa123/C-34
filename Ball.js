class Ball {
    constructor(x, y, radius) {
        var options = {
            
            isStatic: true,
            frictionAir:0.005,
            density: 1
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius=radius;
        World.add(world, this.body);
        
    }
     display(){
        var angle=this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y)
        rotate(angle);
        circle(0,0,this.radius)
        pop()
     }
}