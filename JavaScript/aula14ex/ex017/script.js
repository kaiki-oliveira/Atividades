function contar(){
    var ini = window.document.getElementById('ini')
    var fim = window.document.getElementById('fim')
    var pas = window.document.getElementById('pas')
    var res = window.document.getElementById('res')
    var n1 = Number(ini.value)
    var n2 = Number(fim.value)
    var n3 = Number(pas.value)
    var c = n1

    while (c <= n2){
        res.innerHTML = `${c} >`
        c++
    }
   /* for (var c = n1; c <=  n2; c++) {
        res.innerText = c
        
    }*/
}