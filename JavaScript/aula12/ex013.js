var agora = new Date()
var hora = agora.getHours()
console.log(`agora são ${hora} horas`)

if (hora < 12) {
    console.log('Bom dia!')
}
else if (hora >= 18) {
    console.log('Boa noite!')
}
else if (hora <=3) {
    console.log('Boa madrugada!')
}
else{
    console.log('Boa tarde')
}