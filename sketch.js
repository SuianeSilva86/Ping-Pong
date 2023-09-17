//definindo os tamanhos da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diamentro = 13;
let raio = diamentro / 2;

let velocidadeX = 6;
let velocidadeY = 6;

//var raquete
let xRaquete = 5; //distancia da borda
let yRaquete = 150;
let comprimentoRaquete = 3;
let alturaRaquete = 90;

//var opnente 
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//var placar 
let meusPontos = 0;
let pontosOponente = 0;


function setup() {
  createCanvas(600, 400);
}


function draw() {
  background(0);
  bolinha();
  raquetes();
  placar()

}

function bolinha() {
  function desenhoBolinha() {
    circle(xBolinha, yBolinha, diamentro); //a formação do desenho da bolinha
  }
  function colisaoBorda() {
    xBolinha += velocidadeX; //valor de bolinha + valor de bolinha agora se adicionado ao valor na variavel velocidade;
    yBolinha += velocidadeY;
    //parte onde diz que se a bolinha utrapassar o limite esclarecido ela deve pegar o valor da bolinha * valor  da bolinha que sera = -1 //ou seja a direção oposta de onde a bolinha estava indo
  }
  function movimentoBolinha() {
    if (xBolinha + raio > width || xBolinha - raio < 0) {
      //significa que para entrar no loop as duas condições precisam ser verdadeiras
      velocidadeX *= -1; //pega o valor de velocidade * pelo proprio valor e subtrai por -1 resultando na direção oposta
    } else if (yBolinha + raio > height || yBolinha - raio < 0) {
      velocidadeY *= -1;
    }
  }
  desenhoBolinha();
  colisaoBorda();
  movimentoBolinha();
}

function raquetes() {
  function desenhoRaquete(x, y) {
    rect(x, y, comprimentoRaquete, alturaRaquete);
  }
  function movimentoRaqueteUser() {
    if (keyIsDown(UP_ARROW)) {
      yRaquete -= 10;
    } else if (keyIsDown(DOWN_ARROW)) {
      yRaquete += 10;
    }
  }
  function colisaoRaquete(x, y) {
    if (
      xBolinha - raio < x + comprimentoRaquete &&
      xBolinha + raio > x &&
      yBolinha - raio < y + alturaRaquete &&
      yBolinha + raio > y
    ) {
      velocidadeX *= -1;
    }
  }

  function movimentoRaqueteOponente() {
    velocidadeYOponente = yBolinha - yRaqueteOponente - comprimentoRaquete / 2 - 30
    yRaqueteOponente += velocidadeYOponente;
  }

  desenhoRaquete(xRaquete, yRaquete);
  movimentoRaqueteUser();
  colisaoRaquete(xRaquete, yRaquete);
  desenhoRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentoRaqueteOponente();
  colisaoRaquete(xRaqueteOponente, yRaqueteOponente);
}

function placar() {
  stroke(255)
  textAlign(CENTER);
  textSize(16);
  fill(color(255,140,0))
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(255,140,0))
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosOponente, 470, 26);
 
 


  if (xBolinha > 590) {
    meusPontos += 1;
  } else if (xBolinha < 10) {
    pontosOponente += 1;
  }
}