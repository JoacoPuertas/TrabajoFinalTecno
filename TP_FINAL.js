let General;
let Fondo = [];

function setup() {
  createCanvas(600, 600);
  General = new Aventura();
}

function preload() {
  for (let i = 0; i < 13; i++) {
    Fondo[i] = loadImage("data/p" + i + ".jpg");
  }
}

function draw() {
  General.estados(Fondo);
}

function mousePressed() {
  General.botonSiguienteRect(0, 1);
  General.botonSiguienteRect(1, 2);
  General.botonSiguiente(2, 3);
  General.botonSiguiente2(2, 4);
  General.botonSiguienteRect(3, 5);
  General.botonSiguienteRect(4, 5);
  General.botonSiguiente(5, 6);
  General.botonSiguiente2(5, 7);
  General.botonSiguienteRect(5, 8);
  General.botonSiguiente(6, 0); //final 1
  General.botonSiguiente(7, 9);
  General.botonSiguiente(8, 10);
  General.botonSiguiente(9, 11);
  General.botonSiguiente2(9, 12);
  General.botonSiguiente(10, 12);
  General.botonSiguiente(11, 0); //final 2
  General.botonSiguiente(12, 0); //final 3
}
