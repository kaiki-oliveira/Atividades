var pessoa ={
    nome:'kaiki',
    idade: 19
}

var quadrado = {
    lados: 4,
    area: function(lado){
        return lado * lado
    },
    perimetro: function(lado){
        return lado * this.lados 
    }
}

console.log(quadrado.area(5))
console.log(quadrado.perimetro(5))
console.log(Math.random())

var menu = {
    width: 800,
    height : 50,
    backgroundColor: '#84E',
}

menu.esconder = function() {
    console.log('escondi')
}
var bg = menu.backgroundColor

//Atividade


var dadosPessoais = {
    nome: 'Kaiki',
    sobrenome: 'Oliveira',
    idade: 19,
    nomeCompleto(){
       return `${this.nome} + ${this.sobrenome}`
    }
}

var carro = {
    preco: 1000,
    portas: 4,
    marca: 'audi',
}

var cachorro = {
    raca: 'labrador',
    cor: 'preto',
    idade: 10,
    latir(pessoa){
        if(pessoa === 'homem'){
            return 'latir'
        }
        else{
            return 'nada'
        }
    }

}