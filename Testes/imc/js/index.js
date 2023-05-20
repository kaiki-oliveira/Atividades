//DOM - Elementos HTML

const nome = document.querySelector('#nome');
const altura = document.querySelector('#altura');
const peso = document.querySelector('#peso');
const botao = document.querySelector('#btn');

const imcFinal = document.querySelector('#imc');
const resultado = document.querySelector('#resultado');

// aqui começa para valer 

botao.addEventListener('click', calculoImc);

function calculoImc(){
    event.preventDefault();
    
    let imc = peso.value/(altura.value ** 2);
     imcFinal.value = imc.toFixed(2);

   
}