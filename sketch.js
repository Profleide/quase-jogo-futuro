var asabetcer
var vaipralua
var coletaae
var botao1
var botao2
var botao3
var pedralul = 4
var contage = 0
var estadoJogo = 0
var estadoJogoinicio= 1
var estadoJogolua = 2
var localjogo="a"
var localjogoInicio= "b"
var localJogoLua="c"
var contagemEvento1 = 0
var timer1 = 0
var dinheiros = 0
var aeae = 0
var botaum = true
var botao3 = false 
function preload(){
  

}

function setup() {
  createCanvas(1360,615)
  asabetcer = createImg("Abastecer.png")
  asabetcer.position(200,200)
  asabetcer.size(130,50)
  asabetcer.mouseClicked(abasrecer)
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if(isMobile){
    text("Warning: Better on PC's", 200,200)
  }
  estadoJogo = estadoJogoinicio  
  localjogo = localjogoInicio

}

function draw() {
  background(40)
  textSize(14)
  fill("white")
  text("pedra lunar:"+pedralul,1200,100)
  text( contage, 200, 200)
  if(timer1<3){ 
 
 }

  text(timer1,300,200)
  text(aeae,600,500)
  if(estadoJogo == estadoJogoinicio && localjogo==localjogoInicio ){  

  if(contage == 4){
  estadoJogo = estadoJogolua
  contage = 0
  }
 }
 text(contagemEvento1,300,500)

 if(estadoJogo == estadoJogolua && botaum){
botao1 = createSprite(265,95,130,50)
if(mousePressedOver(botao1)){
  localjogo = localJogoLua 
}
  vaipralua = createImg("Lua.png")
  vaipralua.position(200,70)
  vaipralua.size(130,50)


  if(localjogo == localJogoLua){
   
    coletaae = createButton("coletar")
    coletaae.mousePressed(assda)
    coletaae.position(200,300)
    coletaae.size(130,50)
    botaum = false
    botao3 = true
  
   if(botao3){
    botao3 = createButton("coleta mais")
    botao3.mousePressed(dinheiross)
    botao3.position(200,400)
    botao3.size(130,50)
  
    textSize(14)
    text("ouro espacial: "+dinheiros,1200,120 )
   }
  }


  
 }
 drawSprites()
 }

function abasrecer(){
  pedralul = pedralul-1
  contage = contage + 1
}

function assda(){
  pedralul = pedralul +2
  contagemEvento1 ++
}

function dinheiross(){
  dinheiros ++
}

function taimer1(){
  
  
timer1 = timer1+1
}
