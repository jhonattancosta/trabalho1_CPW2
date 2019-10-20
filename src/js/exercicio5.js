function Calcular(){
    var mensagem = '';
    let expPos = 0;
    let expNeg = 0;
    let numero = document.getElementById("numero").value;
    var soma = 0;
    if(numero==''){
    }else if(numero.indexOf("+") == true){
        expPos = numero.split("+");
        for(let i = 0; i < expPos.length; i++){
            soma = soma + parseInt(expPos[i], 10);
        } 
    } 

    if(numero.indexOf("-") == true){
            expNeg = numero.split("-");
            for(let i = 0; i < expNeg.length; i++){
                soma = soma - parseInt(expNeg[i], 10);
            } 
    }  

    document.getElementById("mensagem").innerHTML = soma;
}