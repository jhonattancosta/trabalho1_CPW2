function binario(){
    var mensagem = '';
    var numero = document.getElementById("numero").value;
    var binario = parseInt( numero, 10 ).toString(2);
    document.getElementById("mensagem").innerHTML ='';
    while(binario.length<8){
        binario= "0" + binario;
    }
    document.getElementById("mensagem").innerHTML +=binario;


}