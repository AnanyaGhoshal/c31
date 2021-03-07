class Drops{

    constructor(x,y){

        var options={

            'isStatic':false,
            'restitution':1.0
        }


        this.body = Bodies.circle(x,y,5,options);
        this.radius = 5;
        

        World.add(world,this.body);
        

    }

    show(){

        var pos = this.body.position;

        ellipseMode(RADIUS);
        fill(0,0,255);  
        circle(pos.x,pos.y,this.radius);   

    }

    reposition(){

        if(this.body.position.y>height){

            Matter.Body.setPosition(this.body,{x:random(0,500),y:random(0,500)})
        }
    }
}