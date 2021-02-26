class Drops{

    constructor(x,y){

        var options={

            'isStatic':false,
            'restitution':1.0
        }


        this.body = Bodies.circle(x,y,10,options);
        this.radius = 10;
        

        World.add(world,this.body);
        this.drops = [];

    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;


        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill(0,0,255);  
        circle(0,0,this.radius);     
        pop();

      
       
            //this.drops.push([this.body.position.x,this.body.position.y]);
            
            for(var i = 0; i<this.drops.length; i++){
                ellipseMode(RADIUS);
                fill(0,0,255);       
               circle(this.drops[i][0],this.drops[i][1]);
            }       
         
    }
}