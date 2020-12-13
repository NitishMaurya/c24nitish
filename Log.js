class Log{
    //proterties
    constructor(x,y,height, angle){
        var option={
    
        restitution:0.8
        }
        //creating bodies
        this.body=Bodies.rectangle(x,y,200,height,option)
        this.width=200
        this.height=height
        Matter.Body.setAngle(this.body, angle);
        World.add(world,this.body);
    }
    //function
    display(){
        push();
        angleMode(RADIANS)
        rectMode(CENTER);
        fill("orange");
        stroke("red");
        strokeWeight(4);
        translate(this.body.position.x, this.body.position.y,)
        rotate(this.body.angle);
        rect(0,0,this.width,this.height);
        pop();
    
    }
    
    
    }
    
    
    
    
    
    
    