function verificar(){
    var agora = new Date()
    var ano = agora.getFullYear()
    var res = window.document.getElementById('res')
    var fano = window.document.getElementById('txtano')
    
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('Erro')
    }
    else{
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'homem'
            if(idade > 0 && idade < 14){
                // criança
                img.setAttribute('src', 'hc.jpg')
            }
            else if(idade < 50){
               // jovem
               img.setAttribute('src', 'hj.jpg')
            }
            else{
               // idoso
               img.setAttribute('src', 'hi.jpg')
            }
        }
        else if(fsex[1].checked){
            genero = 'mulher'
            if(idade > 0 && idade < 14){
                // criança
                img.setAttribute('src', 'mc.jpg')
            }
            else if(idade < 50){
               // jovem
               img.setAttribute('src', 'mj.jpg')
            }
            else{
               // idoso
               img.setAttribute('src', 'mi.jpg') 
            }
        }
        res.innerHTML = `detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }


}