const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var raindrops = []; 
var thunder, thunderGroup, thunder1, thunder2, thunder3, thunder4;
var man, manImg;
var maxDrops = 150;


function preload(){

thunder1 = loadImage("1.png");
thunder2 = loadImage("2.png");
thunder3 = loadImage("3.png");
thunder4 = loadImage("4.png");

}

function setup(){
  
    createCanvas(500,600);

    engine = Engine.create();
    world = engine.world;

    
    man = new Umbrela(150,440);
   

    

    if(frameCount % 150 ===0){

        for(var i = 0; i <maxDrops; i++){

            raindrops.push(new Drops(random(0,500),random(0,500)));

        }    


    }
  
    
}

function draw(){

    background(0);

    spawnThunders();

    Engine.update(engine);

  //  console.log(raindrops[0]);

    for(var i = 0; i<maxDrops; i++){

       raindrops[i].show();
       raindrops[i].reposition();

    }  
    

    
    man.display();
    drawSprites();

    
} 

function spawnThunders(){

    if(frameCount % 60 === 0){

        var thunder = createSprite(100,100,10,10);
        thunder.lifetime = 10;
        thunder.x = Math.round(random(50,450));

        var rand;
        rand = Math.round(random(1,4));

        switch(rand){

            case 1: thunder.addImage(thunder1);
                    thunder.scale = 0.5;
                    thunder.velocityY = 1;
            break;   
            case 2: thunder.addImage(thunder2);
                    thunder.scale = 0.5;
                    thunder.velocityY = 1;
            break;
            case 3: thunder.addImage(thunder3);
                    thunder.scale = 0.5;
                    thunder.velocityY = 1;
            break;
            case 3: thunder.addImage(thunder3);
                    thunder.scale = 0.5;
                    thunder.velocityY = 1;
            break;
            case 4: thunder.addImage(thunder4);
                    thunder.scale = 0.5;
                    thunder.velocityY = 1;
            break;

        }

       
    }

    
}
