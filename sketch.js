const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var sand1

function setup(){
    createCanvas(6000,500);
    engine = Engine.create();
    world = engine.world;
    // sand1= new Sand(700,50,25);
    // hammer= new Hammer(200,90)
// ball (rubber)
    var ball_options ={
      restitution: 0.3,
      friction:5,
      density:1
  }

  ball = Bodies.circle(900,50,20, ball_options);
  World.add(world,ball);
  //sand
  var sand_options ={
    restitution: 0.3,
    friction:5,
    density:1
}

sand = Bodies.circle(900,50,1, sand_options);
World.add(world,sand); 
  // hammer
var hammer_options ={
  restitution:0.5,
  density:2,
  friction:1.0
}

hammer = Bodies.rectangle(200,90,50,20,hammer_options);
World.add(world,hammer);
// stone
var stone_options ={
  restitution:0.5,
  density:1,
  friction:5
}
 stone = Bodies.rectangle(610,0,100,57,stone_options);
World.add(world,stone);
// block
var block_options ={
  restitution:0.5,
  density:1,
  friction:5
}
 block = Bodies.rectangle(610,0,10,57,block_options);
World.add(world,block);

//  ground
  var ground_options ={
    isStatic: true
}

ground = Bodies.rectangle(500,480,1200,35,ground_options);
World.add(world,ground);
  

}

function draw(){
  background("lightblue");
  Engine.update(engine);
  // ball(rubber)
    strokeWeight(4);
    stroke("black");
    fill("blue");
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 25, 25);
  // sand
  strokeWeight(4);
  stroke("black");
  fill("red");
  ellipseMode(RADIUS);
  ellipse(sand.position.x, sand.position.y, 5, 5);
    // hammer 
  fill("yellow");
  strokeWeight(2);
  stroke("white")
  rectMode(CENTER);
  rect(hammer.position.x=mouseX,hammer.position.y=mouseY,100,20);
  
  // stone
  fill("black");
  strokeWeight(0)
  rectMode(CENTER);
  rect(stone.position.x,stone.position.y,100,100);
  // block
  fill("orange");
  strokeWeight(2)
  stroke("black")
  rectMode(CENTER);
  rect(block.position.x,block.position.y,100,60);

  // ground
  fill("red");
  strokeWeight(0)
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,1200,20);
  // hammer.display();
  // sand1.display();
}

