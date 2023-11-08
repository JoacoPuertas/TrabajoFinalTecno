class Boton {
  constructor(x,y,t) {
    this.posX = x;
    this.posY = y;
    this.tam =  t;
  }
  
  dibujar(){
    fill(255,0,0);
    ellipse(this.posX,this.posY, this.tam);
  }
  
  press(){
     return dist(mouseX, mouseY, this.posX, this.posY) < this.tam;
  }
  
}
