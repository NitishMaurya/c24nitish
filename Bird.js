class Bird{
    //properties
    constructor (x,y) {
    var options= {
    isStatic:false,
    restitution:2,
    friction:1    
    }
    this.body=Bodies.rectangle(x,y,50,50,options)
    this.width=20;
    this.height=20
    World.add(world,this.body)
    
    
    
    
    
    }
    //funnction/method
    display(){

        this.body.position.x= mouseX;
        this.body.position.y= mouseY;
        push();
    
        rectMode(CENTER);
        fill("red");
        stroke("blue");
        strokeWeight(4);
        translate(this.body.position.x, this.body.position.y)
        rotate(this.body.angle);
        rect(0,0,this.width,this.height);
        pop();
    
    }
    
    
    }
    