let General;
let Fondo = [];


function setup() {
  createCanvas(600,600);
  General = new Aventura();
  
}

function preload() {
  for(let i = 0; i < 15; i++){
    Fondo[i] = loadImage("data/libro" + i + ".png");
  }
}

function draw() {
  General.estados(Fondo);
}

function mousePressed(){
  General.botonSiguiente(0,1);
  General.botonSiguiente(1,2);
  General.botonSiguiente(2,3);
  General.botonSiguiente(3,4);
  General.botonSiguiente(4,5);
  General.botonSiguiente(5,6);  
  General.botonSiguiente(6,7);
  General.botonSiguiente(7,0);
  General.botonSiguiente2(0,1);
}
