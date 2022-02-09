'use strict'


//Definindo as variaveis
const lampada = document.getElementById('lampada');
const ligar = document.getElementById('ligar');
const desligar = document.getElementById('desligar');
const piscar = document.getElementById('piscar');
let idPiscar = null;

//Verificando se a lampada esta quebrada
const lampadaQuebrada = () => {
    return lampada.src.includes('quebrada');
}

const ligarLampada = () => {
    if (!lampadaQuebrada()) 
        lampada.src = './img/ligada.jpg';
}

const desligarLampada = () => {
    if (!lampadaQuebrada())
        lampada.src = './img/desligada.jpg';
}

const quebrarLampada = () => lampada.src = './img/quebrada.jpg';

const lampadaDesligada = () => {
    return lampada.src.includes('desligada');
}

//Verificando se a lampada esta desligada ou não para começar a piscar
const ligarDesligar = () => {
    if (lampadaDesligada())
        ligarLampada();
    else
        desligarLampada();
}


//Utilizando metodo assíncrono
//setTimeout() - voce da uma função para o metodo e define um tempo em milisegundos / ocorre uma vez só
//setInterval() - mesmo funcionamento do setTimeout porem nao ocorre somente uma vez
const piscarLampada = () => {
    if(idPiscar == null) {
        idPiscar = setInterval(ligarDesligar, 500);
        piscar.textContent = 'Parar';
    }else {
        clearInterval(idPiscar);
        piscar.textContent = 'Piscar'
        idPiscar = null;
    }
    }
        

ligar.addEventListener('click', ligarLampada);
desligar.addEventListener('click', desligarLampada);
lampada.addEventListener('dblclick', quebrarLampada)
piscar.addEventListener('click', piscarLampada);