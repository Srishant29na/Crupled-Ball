
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var b1, b2, b3, ground, ball;

function preload()
{
	
}

function setup() 
{
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = createSprite(400, height - 100, width, 20);


	b1 = createSprite(600, 550, 10, 100);
	b1.shapeColour = "red"
	b2 = createSprite(720, 550, 10, 100);
	b1.shapeColour = "red"
	b3 = createSprite(660, height - 120, 120, 20)
	b1.shapeColour = "red"

	ball = new Ball(200, 650)

	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background(0);




  drawSprites();
 
}



