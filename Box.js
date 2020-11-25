class Box{
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/wood1.png");
  }

  block1 = new Box(500,700,40,40);
  block2 = new Box(550,700,40,40);
  
  if(speed < 3){
    this.block1.visible = true;
    this.block2.visible = true;
  } else{
    this.block1.visible = false;
    this.block2.visible = false;
  }

  if(this.block1.visible = false && this.block2.visible = false){
    score += 1;
  }

  block1.score();
  block2.score();
};
