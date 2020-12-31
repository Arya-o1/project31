class plinkos{
    constructor(x,y,r,d){
        var options = {
            restitution:0.5,
            isStatic:d
        }
        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        World.add (world,this.body);   

    }
    display(color){
        var pos = this.body.position;
        
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        fill(color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
         
    }
}