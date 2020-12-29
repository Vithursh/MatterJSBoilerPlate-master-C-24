
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var Ground1;
var Dustbin1,Dustbin2,Dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	Ground1 = new Ground(400,700,1200,10);
	Ball1 = new Ball(300,400,30)
	Dustbin1 = new Dustbin(300,690,100,10);
	Dustbin2 = new Dustbin(245,645,10,100);
	Dustbin3 = new Dustbin(345,645,10,100);
 
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Ground1.display();
  Ball1.display();
  Dustbin1.display();
  Dustbin2.display();
  Dustbin3.display();
  drawSprites();
 
}



