//definindo as configurações da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diamentro = 22;

//passando a velocidade da bolinha
let velocidadeX = 5;
let velocidadeY = 5;


function setup() {
  createCanvas(600, 400);

}

function draw() { //draw desenha os objetos do jogo
  background(0);
  circle(xBolinha, yBolinha, diamentro);
  xBolinha += velocidadeX; //mesmo que xBolinha = xBolinha + velocidadeX;
  yBolinha += velocidadeY;

  if (xBolinha > width || xBolinha < 0) { //
    velocidadeX *= -1
  } else if (yBolinha > height || yBolinha < 0) {
    velocidadeY *= -1
  }

}