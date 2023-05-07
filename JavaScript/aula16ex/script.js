function adicionar(){
    var n1 = window.document.getElementById('n1')
    var tab = window.document.getElementById('tab')
    if(n1.value.length == 0){
        window.alert('por favor digite um dunero')
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