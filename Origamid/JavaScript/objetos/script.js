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