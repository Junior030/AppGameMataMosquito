var altura = 0;
var largura = 0;
var vidas = 1;

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight;
    largura = window.innerWidth;
}

ajustaTamanhoPalcoJogo();


function posicaoRondomica() {

    //remover o mosquito anterior caso exista
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove();

        if (vidas <= 3) {
            document.getElementById('coracao' + vidas).src = 'imagens/coracao_vazio.png';
            vidas++;
        } else {
            
        }
        
    }



    var positionX = Math.floor(Math.random() * largura) - 90;
    var positionY = Math.floor(Math.random() * altura) - 90;

    positionX = positionX < 0 ? 0 : positionX;
    positionY = positionY < 0 ? 0 : positionY;

    //criar o elemento html
    var mosquito = document.createElement('img');
    mosquito.src = 'imagens/mosca.png';
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
    mosquito.style.left = positionX + 'px';
    mosquito.style.top = positionY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito';
    mosquito.onclick = function () {
        this.remove();
    }

    document.body.appendChild(mosquito);


}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3);

    switch (classe) {
        case 0:
            return 'mosca1';
        case 1:
            return 'mosca2';
        case 2:
            return 'mosca3';
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2);

    switch (classe) {
        case 0:
            return 'ladoA';
        case 1:
            return 'ladoB';

    }
}