function inverterFrase(){
    var mensagem = '';
    var frase = '';
    var array = '';
    var tamanho = 0;
    document.getElementById("mensagem").innerHTML ="";
    frase = document.getElementById("frase").value;
    array = frase.split(" ");
    tamanho = array.length;

    for(let i = tamanho; i>0; i--){
        document.getElementById("mensagem").innerHTML +=" " + array[i-1];
    }
    
}