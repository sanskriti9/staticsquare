class Box{
    constructor(x,y,width,height){
        var option ={
          restitution:0.8
          
        }
    this.width = width;
    this.height = height;
       this.ground = Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.ground);

    }
    display(){
        var pos = this.ground.position;
        var angle = this.ground.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle)
        rectMode(CENTER);
        rect(0,0,this.width,this.height)
        pop();
    }
}