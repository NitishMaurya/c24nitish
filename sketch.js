// NAMESPACING: NICKNAME

const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine;
var world;
var box1;
var box2;
var ground1;
var pig1, pig2;
var bird;
var log1, log2 ,log3 ,log4;
function setup(){
createCanvas(400,400);
//create my engine from Matter.js engine
engine = Engine.create();
//creating my world from Mtter.js world
world = engine.world;
//bodies



//CREATING OBJECTS FROM CLASS
ground1= new Ground(200,390,400,20);
box1 = new Box(135,100,100,50);
box2 = new Box(100,150,100,100);
pig1= new Pig(200,200);
pig2= new Pig(200,300);
bird = new Bird(100,100)
log1 = new Log(300,300,10,PI/2)
 log2 = new Log(320,300,10,PI/2)

}

function draw(){
    background(0);
    //update everything
    Engine.update(engine);
    
    ground1.display();
    box1.display();
    box2.display();
    
    pig1.display();
    pig2.display();
   
    bird.display();


    log1.display();

    log2.display();


}


