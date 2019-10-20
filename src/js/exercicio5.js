function Calcular(){
    var mensagem = '';
   
    let numero = document.getElementById("numero").value;
    var soma = 0;
 
    soma = eval(numero);
  
    document.getElementById("mensagem").innerHTML =soma;
    
}