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
  General.BotonesPressed();
}
