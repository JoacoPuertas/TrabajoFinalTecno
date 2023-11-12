class BotonRectangular {
  constructor(x,y,tx,ty) {
    this.posX = x;
    this.posY = y;
    this.tamX = tx;
    this.tamY = ty;
  }
  
  dibujar(){
    fill(255,0,0);
    rect(this.posX,this.posY, this.tamX, this.tamY);
  }
  
  press(){
     return (mouseX > this.posX && mouseX < this.posX + this.tamX && mouseY > this.posY && mouseX < this.posY + this.tamY);
  }
  
}
