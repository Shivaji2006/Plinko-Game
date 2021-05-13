class Particles{
    constructor(x,y,radius){
        var options = {
            "restitution" : 1,
            "density" : 0.2,
            "friction" : 0

        }
        this.body = Bodies.circle(x,y,radius,options);
        this.body.color = random(0,255);
        this.radius = radius;
        World.add(world,this.body);
        }

    display(){
          push();
          var pos = this.body.position;
          circleMode(CENTER);
          circle(this.body.x,this.body.y,this.body.radius);
          pop();
    }
}