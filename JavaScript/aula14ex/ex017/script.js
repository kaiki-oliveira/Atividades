function contar(){
    var ini = window.document.getElementById('ini')
    var fim = window.document.getElementById('fim')
    var pas = window.document.getElementById('pas')
    var res = window.document.getElementById('res')
    
    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        window.alert('Faltam dados')
    }
    else{
        res.innerHTML = 'Contando'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)
        for (var c = i; c <= f; c += p ){
            res.innerHTML += `${c}`
        }
    }

}