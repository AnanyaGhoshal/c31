class Umbrela{

    constructor(x,y){

        var options={

            'isStatic':true
        }

        this.body = Bodies.circle(x,y,150,options);
        this.radius = 150;
        this.image = loadImage("walking_1.png");

        World.add(world,this.body);

    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(255);
        ellipseMode(CENTER);
        imageMode(CENTER);
        image(this.image,0,0, this.radius*3,this.radius*2.5);
       // circle(0,0,this.radius);
        pop();

    }
}