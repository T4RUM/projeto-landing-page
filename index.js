var setaDireita = window.document.getElementById("seta-direta")
var leonardo = window.document.getElementById("leonardo")
var samanta = window.document.getElementById("samanta")
var bruna = window.document.getElementById("bruna")
var setaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireta(){
  leonardo.style = "display:none"
  bruna.style = "display:flex"
  setaDireita.style = "display:none"
  setaEsquerda.style = "display:flex"
}

function RolarParaEsquerda(){
  bruna.style = "display:none"
  leonardo.style = "display:flex"
  setaDireita.style = "display:flex"
  setaEsquerda.style = "display:none"
}

