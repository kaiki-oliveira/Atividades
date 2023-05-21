function calcularMedia() {
    var nome = document.getElementById("nome").value;
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);
    var img = document.createElement('img')
    var res = document.getElementById('res')

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
      document.getElementById("res").innerHTML = "Por favor, preencha todas as notas.";
      return;
    }

    var media = (nota1 + nota2 + nota3) / 3;
    document.getElementById("res").innerHTML = "A média de " + nome + " é: " + media.toFixed(2);
    
    if(media <= 4){
        img.src = "imagens/entao.png";
        res.appendChild(img);
    }
    else if(media > 4 && media < 7){
        img.src = "imagens/procupado.png";
        res.appendChild(img);

    }
    else if(media >= 7){
        img.src = "imagens/feliz.png";
        res.appendChild(img);
    }
  }