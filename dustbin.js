class Dustbin{

    constructor(x,y,width,height){
    
    var option = {
    
    restitution: 0.8,
     friction: 1 ,
     density :1, isStatic : true
    
    }
    
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x,y,width,height,option);
    this.image=loadImage("dustbingreen.png");
    //this.image.scale=5;
    World.add(world,this.body);
    
    
    
    }
    
        display(){
            var  pos = this.body.position
           // var angle = this.body.angle;
            push();
            imageMode(CENTER);
            image(this.image, pos.x, 300 + 10, 150, 150);
          // image.scale=5;
            translate(pos.x,pos.y);
            //rotate(angle);
            rectMode(CENTER);
            strokeWeight(4);
            stroke('green');
            fill(255);
            //rect(0,0,this.width,this.height);
    
            pop();
    
            }
    
    }
