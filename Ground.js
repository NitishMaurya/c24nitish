class Ground{
//PROPERTIES
constructor(x,y,width,height){

    var options={

        isStatic: true  //true- stop, false-move the object
    }

    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width= width;
    this.height=height;
    World.add(world,this.body);

}

//FUNCTIONS/METHODS
display(){
    push();
    rectMode(CENTER);
    fill("brown");
    stroke("red");
    strokeWeight(4);
    rect(this.body.position.x, this.body.position.y,this.width,this.height);

    pop();

}


















}


