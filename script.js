const inputTexto = document.querySelector(".input-texto")
const mensagem = document.querySelector(".resultado");
const criptoCodigos = ['enter', 'imes', 'ai', 'ober', 'ufat' ];
const descriptoCodigos = ['e', 'i', 'a', 'o', 'u' ];
var cont = 5;

function validaTextArea(texto){
    if(texto != ''){
        return true
    }else{
        return false
    }
}

function limpaTexto(campo){
    campo.value = "";
}

function encriptar(texto){
    texto = texto.toLowerCase();
    for(let i = 0; i < cont; i++){
        regexp = new RegExp(descriptoCodigos[i], 'g');
        texto = texto.replace(regexp, criptoCodigos[i]);
    }
    return texto;
}

function desencriptar(texto){
    texto = texto.toLowerCase();
    for(let i = 0; i < cont; i++){
        regexp = new RegExp(criptoCodigos[i], 'g');
        texto = texto.replace(regexp, descriptoCodigos[i]);
    }
    return texto;
}

function btnEncripitar(){
    if(validaTextArea(inputTexto.value)){
        mensagem.value = encriptar(inputTexto.value);
        limpaTexto(inputTexto);
    }else{
        alert('Por favor digite seu texto a ser Encriptado!!!');
    }   
}

function btnDesencripitar(){
    if(validaTextArea(inputTexto.value)){
        mensagem.value = desencriptar(inputTexto.value);
        limpaTexto(inputTexto);
    }else{
        alert('Por favor digite seu texto a ser Desencriptado!!!');
    }
}

function copiar(){
    mensagem.removeAttribute('disabled');
    document.querySelector('.resultado').select();
    document.execCommand("copy");
    limpaTexto(mensagem);
    mensagem.setAttribute('disabled', '');
}


