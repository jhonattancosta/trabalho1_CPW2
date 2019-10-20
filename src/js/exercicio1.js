function sequenciaFibonacci(){
    var mensagem = '';
    let numero = document.getElementById("numero").value;
    var anterior = 0;
    var ultimo = 1;
    var resultado;
    if(numero == 1){
        document.getElementById("mensagem").innerHTML = '0';
    } else if(numero == 2){
        document.getElementById("mensagem").innerHTML = '0 1';
        } else {
            document.getElementById("mensagem").innerHTML = '0 1';

            for(let i=2; i < numero;i++){
                
                resultado = anterior + ultimo;
                document.getElementById("mensagem").innerHTML += ' ' + resultado;
                anterior = ultimo;
                ultimo = resultado;

            }
        }

}