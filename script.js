var btnEncriptar = document.querySelector(".encriptar");
var btnDesencriptar = document.querySelector(".desencriptar");
var ocultar = document.querySelector(".no");
var mensajeFinal = document.querySelector(".resultado");

btnEncriptar.onclick = codificar;
btnDesencriptar.onclick = decodificar;

function codificar(){
    ocultarMensaje();
    var textbox = recuperarTexto();
    mensajeFinal.textContent = encriptarTexto(textbox);
}

function decodificar(){
    ocultarMensaje();
    var textbox = recuperarTexto();
    mensajeFinal.textContent=desencriptarTexto(textbox);
}

function recuperarTexto(){
    var textbox = document.querySelector(".boxMensaje");
    return textbox.value;
}

function ocultarMensaje(){
    ocultar.classList.add("noMostrar");
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";
    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal=textoFinal + "ai";  
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter";
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes";
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober";
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat";
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    document.getElementById("botonCopiar").style.display = "show";
    document.getElementById("botonCopiar").style.display = "inherit";
    return textoFinal;
}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal=textoFinal + "a"; 
            i=i+1;    
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e";
            i=i+4;  
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i";
            i=i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o";
            i=i+3;
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u";
            i=i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    document.getElementById("botonCopiar").style.display = "show";
    document.getElementById("botonCopiar").style.display = "inherit";
    return textoFinal;
}

const btnCopiar = document.querySelector(".botonCopiar");
btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".resultado").textContent;
    navigator.clipboard.writeText(contenido);
    alert("Texto copiado al portapapeles");
})
    