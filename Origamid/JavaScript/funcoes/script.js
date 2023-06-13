function areaQuadrado (lado){
    return lado * lado
}

console.log(areaQuadrado(2))

function pi(){
    return 3.14
}

var total = 5 * pi()
console.log(total)

function imc(peso, altura){
    var imc = peso / (altura * altura)
}
console.log(imc(80, 1.8))

function corFavorita(cor){
    if (cor === 'azul'){
        return 'eu gosto do ceu'
    }
    else if(cor=== 'verde'){
        return 'eu gosto de mato'
    }
    else{
        return 'eu não gosto de cores'
    }
}


function mostra(){
    console.log('oi')
    window.document.body.style.background = '#000'
}
addEventListener('click', mostra)

function imc2(peso, altura){
    const imc2 = peso / (altura ** 2)
    console.log(imc2)
}

imc2(80, 1.80)
console.log(imc2(80, 1.80))

function terceiraIdade(idade){
    if(typeof idade !== 'number'){
        return 'Por favor, preencha um numero'
    }
    else if ( idade>=60){
        return true }
    else{
        return false
    }
    console.log(idade)

}
console.log(terceiraIdade(60))
