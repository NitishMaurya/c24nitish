class Pig{
//properties
constructor (x,y) {
var options= {
isStatic:false,
restitution:2,
friction:1    
}
this.body=Bodies.rectangle(x,y,20,20,options)
this.width=20;
this.height=20
World.add(world,this.body)





}
//funnction/method
display(){
    push();

    rectMode(CENTER);
    fill("green");
    stroke("blue");
    strokeWeight(4);
    translate(this.body.position.x, this.body.position.y,)
    rotate(this.body.angle);
    rect(0,0,this.width,this.height);
    pop();

}


}
