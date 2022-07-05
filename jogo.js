
let altura = 0
let largura = 0
let vidas = 1
let tempo = 0
let cronometro = 0
let numero_pontos = 0
let milissegundos = 3000
let contagem = 0

function ajustaTamanhoDoPalcoDoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(largura, altura)

}

ajustaTamanhoDoPalcoDoJogo()



//Tempo de jogo
// => - arrow funtion
cronometro = setInterval(() => {
    document.getElementById('cronometro').innerHTML = tempo
    tempo++
}, 1000)

setInterval(() =>{
    if (milissegundos >= 1000) {
        milissegundos -= 100;
    }
    if (milissegundos >= 200 && milissegundos <1000)  {
        milissegundos -= 7;
    }
    clearInterval(criaMosca);
    criaMosca = setInterval(function () {
        posicaoRandomica()
    }, milissegundos);
    console.log(`velocidade ${milissegundos}`)
}, 15000)

function posicaoRandomica() {

    // remover a mosca anterior caso exista
    if (document.getElementById('mosca')) {
        document.getElementById('mosca').remove()

        //perde vida caso não toque na mosca
        if (vidas > 3) {
            window.location.href = 'fim_de_jogo.html'
        } else {
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
        }
        vidas++
    }


    //Lógica faz a mosca aparecer em lugares aleatorios da tela
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY


    //criar o elemento html
    var mosca = document.createElement('img')
    mosca.src = 'imagens/mosca.png'
    mosca.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosca.style.left = posicaoX + 'px'
    mosca.style.top = posicaoY + 'px'
    mosca.style.position = 'absolute'
    mosca.id = 'mosca'
    mosca.onclick = function () {
        numero_pontos++
        document.getElementById('pontos').innerHTML = numero_pontos
        this.remove()
    }

    document.body.appendChild(mosca)

}


function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            return 'mosca1'

        case 1:
            return 'mosca2'

        case 2:
            return 'mosca3'

        default:
            break;
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'
    }
}

