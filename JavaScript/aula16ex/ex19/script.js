//declaração de variaveis
let num = window.document.getElementById('fnum')
let lista = window.document.getElementById('flista')
let res = window.document.getElementById('res')
let valores = []


function isNumero(n){ //verifica se o valor adicionado é um número
    if(Number(n) >= 1 && Number(n) <= 100){ // tem que ser entre 1 e 100
        return true
    }
    else{
        return false
    }
}


function inLista(n, l){ //verifica se  o valor adicionado ja está na lista
    if(l.indexOf(Number(n)) != -1){
        return true
    }
    else{
        return false
    }
}


function adicionar(){ // adiciona os valores na lista
    if(isNumero(num.value) && !inLista(num.value, valores)){ // se for um numero e não estiver na lista será adicionado
        valores.push(Number(num.value))
        let item = window.document.createElement('option') // cria um elemento option no select(html)
        item.text = `valor ${num.value} adicionado` 
        lista.appendChild(item)// adiciona um item ao option
        res.innerHTML = `` // esvazia o resultado ao adicionar um numero
    }
    else{
        window.alert('Valor invalido ou ja encontrado na lista.')// se o valor não se enquadra nas exigencias exibe um alerta
    }
    num.value = `` // esvazia o formulario ao adicionar o numero
    num.focus() // mantem clicado no formulario
}


function finalizar(){ // função para exibir os resultados
    if(valores.length == 0){ // verifica se foi adicionado algum valor na lista
        window.alert('adicione valores antes de finalizar')
    }
    else{
        //declaração de variaveis
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / tot

        res.innerHTML = ``
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior} </p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor} </p>`
        res.innerHTML += `<p> Somando todos os valores temos ${soma} </p>`
        res.innerHTML += `<p> A média dos valores digitados é ${media} </p>`
        

    }
}