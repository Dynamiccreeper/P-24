class Paper{

    constructor(x,y,r){
    
    var option = {
    
   isStatic  : false,restitution : 0.3,friction:0.5,density:1.2
    }

    this.x = x;
    this.y = y;
    this.r = r;
    this.body = Bodies.circle(  this.x,  this.y,  this.r/2,option);
    this.image=loadImage("paper.png");
    World.add(world,this.body);

    
    
    }
    
    display(){
    var  pos = this.body.position
var angle  = this.body.angle;
//paper.body.position.x=mouseX
//paper.body.position.y=mouseY
imageMode(CENTER);
image(this.image, pos.x, pos.y + 10, 50, 50);
   push()

   translate(pos.x,pos.y)
   rotate(angle);


    strokeWeight(3);
    fill("purple");
    //ellipse(0,0,this.r,this.r);
     pop()
    }
}
