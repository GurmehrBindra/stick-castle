const World=Matter.World;
const Engine= Matter.Engine;
const Bodies= Matter.Bodies;

 var engine,world;
 var box1,box2,box3,box4;
 var circle1,circle2,circle3;
 var log1,log2,log3,log4;

function setup() {
  createCanvas(800,410);
  engine= Engine.create();
  world=engine.world;

  box1= new BoxR(360,380,60,40);
  box2= new BoxR(420,380,60,40);
  box3= new BoxR(480,380,60,40);
  box4= new BoxR(420,330,50,70);

  circle1= new BoxC(370,330,60);
  circle2= new BoxC(470,330,60);
  circle3= new BoxC(420,280,40);

  log1= new BoxT(375,405,180);
  log2= new BoxT(465,405,180);
  log3= new BoxT(330,355,-30);
  log4= new BoxT(510,355,30);

}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  drawSprites();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  circle1.display();
  circle2.display();
  circle3.display();
  log1.display();
  log2.display();
  log3.display();
  log4.display();
}