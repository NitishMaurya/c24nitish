class Box{
//proterties
constructor(x,y,width,height){
    var option={

    restitution:0.8
    }
    //creating bodies
    this.body=Bodies.rectangle(x,y,width,height,option)
    this.width=width
    this.height=height
    World.add(world,this.body);
}
//function
display(){
    push();

    rectMode(CENTER);
    fill("yellow");
    stroke("pink");
    strokeWeight(4);
    translate(this.body.position.x, this.body.position.y,)
    rotate(this.body.angle);
    rect(0,0,this.width,this.height);
    pop();

}


}






