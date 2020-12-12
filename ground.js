class Ground{
    constructor(x,y){
        this.body = Bodies.rectangle(x, y, 245,15,{isStatic: true});
        World.add(world, this.body);
    }

    display(){
        rect(this.body.position.x,this.body.position.y,245,15)
        rectMode(CENTER);
    }
}