class Drops{

    constructor(x,y){

        var options={

            'isStatic':false,
            'restitution':1.0
        }


        this.body = Bodies.circle(x,y,10,options);
        this.radius = 10;
        

        World.add(world,this.body);
        

    }

    show(){

        var pos = this.body.position;
        //var angle = this.body.angle;


       //push();
       //translate(pos.x,pos.y);
       //rotate(angle);
        ellipseMode(RADIUS);
        fill(0,0,255);  
        circle(pos.x,pos.y,this.radius);     
       // pop();
            
    }
}