class Block{
    constructor(x,y){
        this.body = Bodies.rectangle(x, y, 35,35,{isStatic: false});
        World.add(world, this.body);
        this.Visiblity = 255;
    }

    display(){

        if(this.body.speed < 3){
            pop ()

            stroke(0,0,255)
            rect(this.body.position.x,this.body.position.y,35,35)
            rectMode(CENTER);

            push ()
           }
           else{
             World.remove(world, this.body);
             push();
             this.Visiblity = this.Visiblity - 5;
             tint(255,this.Visiblity);
             pop();
           }

        
    }
}