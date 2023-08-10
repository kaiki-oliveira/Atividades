


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

frutas.forEach(function(item){
    console.log(item)
})