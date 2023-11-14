class Aventura {
  constructor() {
    this.boton = new Boton(width/4 * 3, height/2, 50);
    this.boton2 = new Boton(width / 4, height/2, 50);
    this.botonComenzar = new BotonRectangular(210, 485, 180, 35);
    this.pantalla2 = new BotonRectangular(100, 220, 100, 230);
    this.estado = 0;
    this.time = 0;
  }

  estados(Fondo) {

    textAlign(CENTER, CENTER);
    textSize(30);
    console.log("estado = " + this.estado);


    if (this.estado == 0) {
      this.time++;
      //background(250);
      image(Fondo[0], 0, 0);
      fill(0);
      text("Estado:" + this.estado, width/2, height/3);

      this.botonComenzar.dibujar();
         
      
    } else if (this.estado == 1) {

      this.time++;
      image(Fondo[1], 0, 0);
      fill(0);
      text("Estado:" + this.estado, width/2, height/3);
      this.pantalla2.dibujar();
    } else if (this.estado == 2) {

      image(Fondo[2], 0, 0);
      this.time++;
      fill(0);
      text("Estado:" + this.estado, width/2, height/3);
      this.boton.dibujar();
      this.boton2.dibujar();
    } else if (this.estado == 3) {

      image(Fondo[3], 0, 0);
      this.time++;
      fill(0);
      text("Estado:" + this.estado, width/2, height/3);
      this.pantalla2.dibujar();
    } else if (this.estado == 4) {

      this.time++;
      image(Fondo[4], 0, 0);
      fill(0);
      text("Estado:" + this.estado, width/2, height/3);
      this.pantalla2.dibujar();
    } else if (this.estado == 5) { // ACA IRIA EL MINIJUEGO

      this.time++;
      image(Fondo[5], 0, 0);
      fill(0);
      text("Estado:" + this.estado, width/2, height/3);
      this.boton.dibujar();
      this.boton2.dibujar();
      this.pantalla2.dibujar();
    } else if (this.estado == 6) {

      this.time++;
      image(Fondo[6], 0, 0);
      fill(0);
      text("Estado:" + this.estado, width/2, height/3);
      this.boton.dibujar();
    } else if (this.estado == 7) {

      this.time++;
      image(Fondo[7], 0, 0);
      fill(0);
      text("Estado:" + this.estado, width/2, height/3);
      this.boton.dibujar();
    } else if (this.estado == 8) {

      this.time++;
      image(Fondo[8], 0, 0);
      fill(0);
      text("Estado:" + this.estado, width/2, height/3);
      this.boton.dibujar();
    } else if (this.estado == 9) {

      this.time++;
      image(Fondo[9], 0, 0);
      fill(0);
      text("Estado:" + this.estado, width/2, height/3);
      this.boton.dibujar();
      this.boton2.dibujar();
    } else if (this.estado == 10) {

      this.time++;
      image(Fondo[10], 0, 0);
      fill(0);
      text("Estado:" + this.estado, width/2, height/3);
      this.boton.dibujar();
    } else if (this.estado == 11) {

      this.time++;
      image(Fondo[11], 0, 0);
      fill(0);
      text("Estado:" + this.estado, width/2, height/3);
      this.boton.dibujar();
    } else if (this.estado == 12) {

      this.time++;
      image(Fondo[12], 0, 0);
      fill(0);
      text("Estado:" + this.estado, width/2, height/3);
      this.boton.dibujar();
    }
  }
  botonSiguiente(desde, hasta) {
    if (this.boton.press() && this.estado == desde && this.time > 2 || this.boton2.press() && this.estado == desde && this.time > 2 ||
        this.botonComenzar.press() && this.estado == desde && this.time > 2 || this.pantalla2.press() && this.estado == desde && this.time > 2 ) {
      this.estado = hasta;
      this.time = 0;
    }
  }
  
  BotonesPressed() {
    General.botonSiguiente(0, 1);
    General.botonSiguiente(1, 2);
    General.botonSiguiente(2, 3);
    General.botonSiguiente(2, 4);
    General.botonSiguiente(3, 5);
    General.botonSiguiente(4, 5);
    General.botonSiguiente(5, 6);
    General.botonSiguiente(5, 7);
    General.botonSiguiente(5, 8);
    General.botonSiguiente(6, 0); //final 1
    General.botonSiguiente(7, 9);
    General.botonSiguiente(8, 10);
    General.botonSiguiente(9, 11);
    General.botonSiguiente(9, 12);
    General.botonSiguiente(10, 12);
    General.botonSiguiente(11, 0); //final 2
    General.botonSiguiente(12, 0); //final 3
  }
}
