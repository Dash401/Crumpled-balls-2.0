const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,gameState, world;

var ball;
var ground;
var bin1,bin2,bin3,boximage;

function preload()
{
	boximage = loadImage('dustbingreen.png');
}

function setup() {
	createCanvas(800, 700);
    
	engine = Engine.create();
	world = engine.world;
	ball = new Ball(300,200,10);

	ground = Bodies.rectangle(width/2,600,800,20,{isStatic: true});
	World.add(world,ground);
	


	bin1 = new Dustbin(700,580,100,20);
	bin2 = new Dustbin(640,540,20,100);
	bin3 = new Dustbin(760,540,20,100);

	Engine.run(engine);


	
}


function keyPressed(){
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(ball.body, ball.body.position, {
		x: 12,
		y: -13
	  });
	}
}

function draw() {
	rectMode(CENTER);
	background(194, 255, 51);
	
	ball.display();
	

	bin1.display();
	bin2.display();
	bin3.display();
	Engine.update(engine);
	image(boximage,620,480,200,200);
	
} 
