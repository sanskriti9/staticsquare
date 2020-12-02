class Ground{
    constructor(x,y,width,height){
        var option ={
            isStatic: true
        }
    this.width = width;
    this.height = height;
       this.ground1 = Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.ground1);

    }
    display(){
        var pos = this.ground1.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height)
    }
}