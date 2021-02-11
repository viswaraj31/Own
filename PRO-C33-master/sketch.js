var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particle;
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    particle = new Particle(1000,1000,10);

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
   
  text("100",350,780);
  text("100",430,780);
  text("80",520,780);
  text("80",250,780);
  text("60",580,780);
  text("60",180,780);
  text("40",670,780);
  text("40",130,780);
  text("20",760,780);
  text("20",40,780);


  if(particle.body.position.y>600 && particle.body.position.y<610 && particle.body.position.x >300 && particle.body.position.x<500){
    score = score +100;
  }

  if(particle.body.position.y>600 && particle.body.position.y<610 && particle.body.position.x >0 && particle.body.position.x<100){
    score = score +20;
  }

  if(particle.body.position.y>600 && particle.body.position.y<610 && particle.body.position.x >700 && particle.body.position.x<800){
    score = score +20;
  }

  if(particle.body.position.y>600 && particle.body.position.y<610 && particle.body.position.x >100 && particle.body.position.x<200){
    score = score +40;
  }

  if(particle.body.position.y>600 && particle.body.position.y<610 && particle.body.position.x >650 && particle.body.position.x<700){
    score = score +40;
  }

  if(particle.body.position.y>600 && particle.body.position.y<610 && particle.body.position.x >200 && particle.body.position.x<300){
    score = score +60;
  }

  if(particle.body.position.y>600 && particle.body.position.y<610 && particle.body.position.x >550 && particle.body.position.x<650){
    score = score +60;
  }

  if(particle.body.position.y>600 && particle.body.position.y<610 && particle.body.position.x >300 && particle.body.position.x<400){
    score = score +80;
  }

  if(particle.body.position.y>600 && particle.body.position.y<610 && particle.body.position.x >450 && particle.body.position.x<500){
    score = score +80;
  }

  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  
 
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
     particle.display();
   }
}

function mouseDragged(){
  Matter.Body.setPosition(particle.body,{x:mouseX, y:mouseY});
}