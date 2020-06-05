// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;

var engine, world;
var circle1;
var rectangle1,rectangle2,rectangle3;
var dustbin;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    circle1= new Ball(200,550,70);

    dustbin= new Dustbin(800,550);

    rectangle1=new Rectangle(720,500,15,130)
    rectangle2=new Rectangle(880,500,15,130)
    rectangle3=new Rectangle(800,570,140,15)

    ground= new Ground(600,600,1600,20);


}

function draw(){
    background("yellow");
    Engine.update(engine);

    circle1.display();
    
    dustbin.display();

    ground.display();
    
    rectangle1.display();
    rectangle2.display();
    rectangle3.display();

    


}
function keyPressed()
     { 
         console.log("wn");
         if (keyCode === UP_ARROW) 
         
         { 
            console.log("w");
             Matter.Body.applyForce(circle1.body,circle1.body.position,{x:60,y:-250});
         console.log(circle1.body.position)
        
     } 
        }