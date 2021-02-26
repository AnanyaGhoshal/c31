const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var raindrops; 
var thunder, thunderGroup, thunder1, thunder2, thunder3, thunder4;
var man, manImg;


function preload(){

thunder1 = loadImage("1.png");
thunder2 = loadImage("2.png");
thunder3 = loadImage("3.png");
thunder4 = loadImage("4.png");
//manImg = loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png",
//"walking_8.png");


    
}

function setup(){
  
    createCanvas(500,600);

    engine = Engine.create();
    world = engine.world;

    raindrops = new Drops(100,50);
    man = new Umbrela(150,440);



    
}

function draw(){

    background(0);

    spawnThunders();

    Engine.update(engine);

    //var maxDrops = 100;

    //for(var i = 0; i<maxDrops; i++){
    //    circle(this.drops[i][0],this.drops[i][1]);
    //    raindrops.push(new Drops(random(0,400), random(0,400)));
    // }

    raindrops.display();
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

        //thunderGroup.add(thunder);
    }

    
}
