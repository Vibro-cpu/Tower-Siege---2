const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload(){
    polygonImg = loadImage("polygon.png")
}

function setup(){
    createCanvas(800,400)

    engine = Engine.create();
    world = engine.world;

    //ground

    ground = new Ground(487.5,325)

    //polygon
    polygon = Bodies.circle(200,150,20)
    World.add(world,this.polygon)

    slingshot = new SlingShot(this.polygon,{x:200, y:150});

    //level 1

    block1 = new Block(417.5,302.5)
    block2 = new Block(452.5,302.5)
    block3 = new Block(487.5,302.5)
    block4 = new Block(522.5,302.5)
    block5 = new Block(557.5,302.5)

    //level 2

    block6 = new Block(452.5,267.5)
    block7 = new Block(487.5,267.5)
    block8 = new Block(522.5,267.5)

    //level 3

    block9 = new Block(487.5,232.5)
}

function draw(){
background("black")

    Engine.update(engine);

    imageMode(CENTER)
    image(polygonImg,polygon.position.x,polygon.position.y,50,50)
    
    //slingshot displaying

    slingshot.display()

    //block displaying

    block1.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    block7.display()
    block8.display()
    block9.display()
    

    //ground displaying

    ground.display()
    
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();

}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(this.polygon);
        
    }
}