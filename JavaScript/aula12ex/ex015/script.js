function carregar(){
    var agora = new Date()
    var hora = agora.getHours()
    var msg= window.document.getElementById('msg')
    var img = window.document.getElementById('foto')


    msg.innerHTML = `<p> Agora são ${hora} horas </p>`

    if(hora > 4 && hora < 12){
        img.src = 'manhã.jpg'
        msg.innerHTML += '<p> Bom dia </p>'
        document.body.style.background = '#ecd1a8'
    }
    else if(hora <= 4 || hora >= 18 ){
        img.src = 'noite.jpg'
        msg.innerHTML += '<p> Boa noite </p>'
        window.document.body.style.background = 'black'
    }
    else{
        img.src = 'tarde.jpg'
        msg.innerHTML += '<p> Boa tarde </p>'
        window.document.body.style.background = '#67bbf3'
    }
}

