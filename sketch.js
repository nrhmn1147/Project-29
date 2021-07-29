const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ground;
var stand1,stand2;
var poly;
var slingShot;
var polygonImage;

function preload(){
  polygonImage=loadImage("polygon.png");
}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(650,195,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

//set 2 for second stand
  //level one
  b1 = new Block(600,170,30,40);
  b2 = new Block(630,170,30,40);
  b3 = new Block(650,170,30,40);
  b4 = new Block(680,170,30,40);
  b5 = new Block(710,170,30,40);
  //level two
  b6 = new Block(620,130,30,40);
  b7 = new Block(650,130,30,40);
  b8 = new Block(680,130,30,40);
  //top
  b9 = new Block(650,90,30,40);

  poly = Bodies.circle(50,200,20);
  World.add(world,poly);
  slingShot = new Slingshot(this.poly,{x:150,y:150});
}
function draw() {
  background(56,44,44); 
 

  imageMode(CENTER);
  image(polygonImage ,poly.position.x,poly.position.y,40,40);

  textSize(20);
  fill("lightyellow");
  
  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();

  fill("grey");
  block16.display();
 
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();

  fill("lightblue");
  b6.display();
  b7.display();
  b8.display();

  fill("lightgreen")
  b9.display();

  slingShot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.poly,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}