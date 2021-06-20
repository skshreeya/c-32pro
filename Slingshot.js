class SlingShot{

constructor(bodyA, pointB){
var option = {

bodyA: bodyA,
pointB: pointB,
stiffness : 0.01,
length : 10

}
this.sling1 = loadImage("sling1.png");
this.sling2 = loadImage("sling2.png");
this.sling3 = loadImage("sling3.png");

this.pointB= pointB;
this.sling = Constraint.create(option);
World.add(world,this.sling);


}

attach(body){

  this.sling.bodyA = body;

}

fly(){

  this.sling.bodyA = null;


}
display(){
  if(this.sling.bodyA){
      var pointA = this.sling.bodyA.position;
      var pointB = this.pointB;
      push();
      
      stroke(48,22,8);
      if(pointA.x < 220) {
          strokeWeight(7);
          line(pointA.x - 20, pointA.y, pointB.x +30, pointB.y + 180);
          line(pointA.x - 20, pointA.y, pointB.x - 25, pointB.y + 177);
          image(this.sling3,pointA.x -30, pointA.y - 10,15,30);
      }
      else{
          strokeWeight(3);
          line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y + 180);
          line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y + 177);
          image(this.sling3,pointA.x + 25, pointA.y - 10,15,30);
      }
     
      
      pop();
  }

  
  image(this.sling1,200,200);
  image(this.sling2,170,200);
}

}