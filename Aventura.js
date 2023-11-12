class Aventura {
  constructor(){
    this.boton = new Boton(width/4 * 3, height/2 , 50);
    this.boton2 = new Boton(width / 4 , height/2  , 50);
    this.botonRect = new BotonRectangular(width/2, height/2, 50,50);
    this.estado = 0;
    this.time = 0;
  }
  
  estados(Fondo) {
    textAlign(CENTER,CENTER);
    textSize(30);
    console.log("estado = " + this.estado);
    if (this.estado == 0) {
      this.time++;
      //background(250);
      image(Fondo[0],0,0);
      fill(0);
      text("Estado:" + this.estado, width/2, height/3);
      this.boton.dibujar();
      this.boton2.dibujar();
      this.botonRect.dibujar();
    } else if (this.estado == 1) {
      this.time++;
      image(Fondo[1],0,0);
      fill(0);
      text("Estado:" + this.estado, width/2, height/3);
      this.boton.dibujar();
    } else if (this.estado == 2) {
      image(Fondo[2],0,0);
      this.time++;
      fill(0);
      text("Estado:" + this.estado, width/2, height/3);
      this.boton.dibujar();
    } else if (this.estado == 3) {
      image(Fondo[3],0,0);
      this.time++;
      fill(0);
      text("Estado:" + this.estado, width/2, height/3);
      this.boton.dibujar();
    } else if (this.estado == 4) {
      this.time++;
      image(Fondo[4],0,0);
      fill(0);
      text("Estado:" + this.estado, width/2, height/3);
      this.boton.dibujar();
    } else if (this.estado == 5) {
      this.time++;
      image(Fondo[5],0,0);
      fill(0);
      text("Estado:" + this.estado, width/2, height/3);
      this.boton.dibujar();
    } else if (this.estado == 6) {
      this.time++;
      image(Fondo[6],0,0);
      fill(0);
      text("Estado:" + this.estado, width/2, height/3);
      this.boton.dibujar();
    } else if (this.estado == 7) {
      this.time++;
      image(Fondo[7],0,0);
      fill(0);
      text("Estado:" + this.estado, width/2, height/3);
      this.boton.dibujar();
    } else if (this.estado == 8) {
      this.time++;
      image(Fondo[7],0,0);
      fill(0);
      text("Estado:" + this.estado, width/2, height/3);
      this.boton.dibujar();
  }  else if (this.estado == 9) {
      this.time++;
      image(Fondo[7],0,0);
      fill(0);
      text("Estado:" + this.estado, width/2, height/3);
      this.boton.dibujar();
  } else if (this.estado == 10) {
      this.time++;
      image(Fondo[7],0,0);
      fill(0);
      text("Estado:" + this.estado, width/2, height/3);
      this.boton.dibujar();
  } else if (this.estado == 11) {
      this.time++;
      image(Fondo[7],0,0);
      fill(0);
      text("Estado:" + this.estado, width/2, height/3);
      this.boton.dibujar();
  } else if (this.estado == 12) {
      this.time++;
      image(Fondo[7],0,0);
      fill(0);
      text("Estado:" + this.estado, width/2, height/3);
      this.boton.dibujar();
  } else if (this.estado == 13) {
      this.time++;
      image(Fondo[7],0,0);
      fill(0);
      text("Estado:" + this.estado, width/2, height/3);
      this.boton.dibujar();
  } 
}
  botonSiguiente(desde, hasta){
    if (this.boton.press() && this.estado == desde && this.time > 2 ){
      this.estado = hasta;
      this.time = 0;
    }
  }
  
  botonSiguiente2(desde, hasta){
    if (this.boton2.press() && this.estado == desde && this.time > 2 ){
      this.estado = hasta;
      this.time = 0;
    }
  }
  
  botonSiguienteRect(desde, hasta){
    if (this.botonRect.press() && this.estado == desde && this.time > 2 ){
      this.estado = hasta;
      this.time = 0;
    }
  }
}
