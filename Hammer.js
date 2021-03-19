class Hammer  {
   constructor(x,y){
    var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
         
   }
   this.body = Bodies.rectangle(x, y, 100, 20, options);
   this.width = 100;
   this.height = 20;
   World.add(world, this.body);
}
   diplay(){
    //    this.body.position.x=mouseX;
    //    this.body.position.y=mouseY;
       translate(this.body.position.x, this.body.position.y);

       fill("yellow");
       strokeWeight(2);
       stroke("white")
       rectMode(CENTER);
       rect(position.x=mouseX,position.y=mouseY,100,20)
   }


}