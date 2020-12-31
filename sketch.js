const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var divisionHeight = 300;

var Divisions = [];
var Plinkos = [];
var Particles = [];

var slid;

function setup() {
  var canvas = createCanvas(480,700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,695,480,10);
  wall1 = new Ground(0,350,1,700);
  wall2 = new Ground(480,350,1,700);
 

 

  for(k= 0 ; k<=width-10 ; k+=50){
    // Plinkos.push(new plinkos(k+20,100,10));
    Plinkos.push(new plinkos(k,150,10,true));
    Plinkos.push(new plinkos(k+30,200,10,true));
    Plinkos.push(new plinkos(k+20,250,10,true));
    Plinkos.push(new plinkos(k,300,10,true));
    Plinkos.push(new plinkos(k+30,350,10,true));
  }


  for(k = 0; k <= width; k +=80){
    Divisions.push(new Ground(k,height-divisionHeight/2,10,divisionHeight));
  };


}

function draw() {
  background("black");
  Engine.update(engine);

  
  if(frameCount%50 ===0 ){
   console.log("55")
      Particles.push(new plinkos(random(20,470),20,10));
    }
  
  
  
  for(i = 0;i < Divisions.length; i++){
    Divisions[i].display("brown");
    }

    for(i = 0;i < Plinkos.length; i++){
      Plinkos[i].display("blue");
      }

      for(i = 0;i < Particles.length; i++){
        color = random(0,255),random(0,255),random(0,255)
        Particles[i].display(color);
        }

      

    ground.display("white");

  


  drawSprites();
}