
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,paper,box1,box2,box3;
var engine,world;



function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
   // dustbin = new Dustbin (500,780,10,100);
	ground = new Ground (600,380,1600,10);
	paper = new Paper (200,250,50,50);
	box1 = new Dustbin (500,360,100,10);
  box2 = new Dustbin (500,360,10,100);
	box3 = new Dustbin (600,360,10,100);

}


function draw() {

  background(255);
  Engine.update(engine);
  paper.x = mouseX;
  paper.y = mouseY;
  ground.display();
  paper.display();
  box1.display();
  box2.display();
  box3.display();
  drawSprites();
 
}



