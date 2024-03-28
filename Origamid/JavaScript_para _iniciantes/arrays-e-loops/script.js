


for(let numero = 0; numero <= 10; numero++){
    console.log(numero)
}

var i = 0
while (i <= 10){
    console.log(i)
    i++
}

var videoGames = ['Swith', 'PS4', 'XBOX', '3DS']

for(var item = 0; item < videoGames.length; item++){
    console.log(videoGames[item])
    if(videoGames[item] === 'PS4'){
        break 
    }
}

var frutas = ['banana', 'maçã', 'melão', 'melancia', 'jaca', 'uva']

frutas.forEach(function(fruta, index, array){
    console.log(fruta, index, array)
})

var numero =0
var maximo = 50

for(;numero<maximo;){
    console.log(numero)
    numero++
}

//exercicio

var anos = [1959, 1962, 1970, 1994, 2002]

anos.forEach(function(anos){
    console.log(`o Brasil ganhou a copa no ano de ${anos}`)
})
