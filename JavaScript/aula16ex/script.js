function adicionar(){
    var num = window.document.getElementById('txtnum')
    if(num.value.length == 0){
        window.alert('por favor digite um numero para continuar')
    }
    else{
        var n = Number(num.value)
        var item = window.document.createElement('option')
        item.text = n
        tab.appendChild(item)
    }   
}
