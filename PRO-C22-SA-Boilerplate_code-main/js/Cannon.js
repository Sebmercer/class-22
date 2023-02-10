class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cannon_base = loadImage("assets/cannonBase.png")
    this.cannon_top = loadImage("assets/cannon.png")
  }
  display(){
    //code to create cannon top.
    push ()
    imageMode(CENTER)
    image(this.cannon_top,this.x,this.y,this.width,this.height)
    pop ()

    //code to create cannon bottom.
    image(this.cannon_base,150,110,100,100)
    noFill()
    
  }
}
