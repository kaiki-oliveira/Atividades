function adicionar(){
    var num = window.document.getElementById('txtnum')
    if(num.value.length == 0){
        window.alert('por favor digite um dunero para continuar')
    }
    else{
        var n = Number(n1.value)
        for(var c = 1; c <= 10; c++){
            var item = window.document.createElement('option')
            item.text = `${n} * ${c} = ${n*c}`
            tab.appendChild(item)
            
            
        }
    }
     
}