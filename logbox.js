class BoxT{
    constructor(x,y,angle){
        var options={
        'restitution': 0,
        'isStatic':true
        }
        this.body=Bodies.rectangle(x,y,90,10,options);
        this.width=90;
        this.height=10;
        Matter.Body.setAngle(this.body,angle);

        World.add(world,this.body);
    }
     display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
     }    
};