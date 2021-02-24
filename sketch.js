
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	tree1 = new Tree(1400,380,350,600);

	mango1=new Mango(1500,220,50);
	mango2=new Mango(1350,220,50);
	mango3=new Mango(1420,150,50);
	mango4=new Mango(1300,300,50);
	mango5=new Mango(1530,300,50);
	mango6=new Mango(1420,300,50);

	platform = new Ground(width/2,670,width,20);

	Juno = new BOY(100,580,120,300);

	rock = new Stone(60,512,30,50)

	rope = new Launcher(rock.body,{x:60, y:512});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
platform.display();

tree1.display();

mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();

Juno.display();

rock.display();

rope.display();

/* detectCollision(rock,mango1);
detectCollision(rock,mango2);
detectCollision(rock,mango3);
detectCollision(rock,mango4);
detectCollision(rock,mango5);
detectCollision(rock,mango6); */

  drawSprites();
 
}

function mouseDragged(){
   
        Matter.Body.setPosition(rock.body, {x: mouseX , y: mouseY});

}


function mouseReleased(){
    rope.fly();

}

 function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(rock.body, {x: 60 , y: 512});
       rope.attach(rock.body);
    }
} 

/* function detectCollision(Stone,Mango){
	MangoBodyPosition = Mango.body.position;
	StonekBodyPosition = Stone.body.position;

	var distance = dist(StonekBodyPosition.x,StonekBodyPosition.y,MangoBodyPosition.x,MangoBodyPosition.y);
	if (distance<= Mango.r + Stone.r){
		Matter.Body.setStatic(Mango.body,false)
	}
}
 */