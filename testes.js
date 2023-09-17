
//definindo os tamanhos da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diamentro = 22;
let raio = diamentro / 2;

let velocidadeX = 6;
let velocidadeY = 6;

function setup() {
    createCanvas(1000, 700);

}

function draw() { //draw desenha os objetos do jogo //draw funciona internamente como um loop que sempre desenha e realiza os movimemtos das funções contidas 
    background(0);
    desenhoBolinha();
    colisaoBorda();
    movimentoBolinha();
}
function desenhoBolinha() {
    circle(xBolinha, yBolinha, diamentro); //a formação do desenho da bolinha
}
function colisaoBorda() {
    xBolinha += velocidadeX; //valor de bolinha + valor de bolinha agora se adicionado ao valor na variavel velocidade;
    yBolinha += velocidadeY;
    //parte onde diz que se a bolinha utrapassar o limite esclarecido ela deve pegar o valor da bolinha * valor  da bolinha que sera = -1 //ou seja a direção oposta de onde a bolinha estava indo 
}
function movimentoBolinha() {
    if (xBolinha + raio > width || xBolinha - raio < 0) { //significa que para entrar no loop as duas condições precisam ser verdadeiras
        velocidadeX *= -1 //pega o valor de velocidade * pelo proprio valor e subtrai por -1 resultando na direção oposta 
    } else if (yBolinha + raio > height || yBolinha - raio < 0) {
        velocidadeY *= -1
    }
}