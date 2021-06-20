class Box  extends BaseClass{
    constructor(x, y, width, height) {
      super(x, y, width, height);
      this.Visibility = 255;
       this.image = loadImage("water box.png")
    }

    display(){

      if(this.body.speed < 5){
        super.display();
      }else{
        World.remove(world, this.body);
        push ()
        tint(255, this.Visibility);
        this.Visibility = this.Visibility - 5;
        image(this.image, this.body.position.x, this.body.position.y, 100 , 100);
        pop();
      }
    }
  };

