$(document).ready(function() {
    $('#altura').mask("#0.00", {reverse: true});
    $('#peso').mask("#0.00", {reverse: true});
})

function IMC(){
    var mensagem = '';
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
   
    let imc = peso / (altura*altura)

    if(imc<18.5){
        document.getElementById("mensagem").innerHTML =imc +": Abaixo do peso";
    }else if(imc>=18.5 && imc<=24.9){
        document.getElementById("mensagem").innerHTML =imc +": Peso normal";
    }else if(imc>24.9 && imc<=29.9){
        document.getElementById("mensagem").innerHTML =imc +": Sobrepeso";
    }else if(imc>29.9 && imc<=34.9){
        document.getElementById("mensagem").innerHTML =imc +": Obesidade grau I";
    }if(imc>34.9 && imc<=39.9){
        document.getElementById("mensagem").innerHTML =imc +": Obesidade grau II";
    }if(imc>39.9){
        document.getElementById("mensagem").innerHTML =imc +": Obesidade grau III";
    }

    
              
}