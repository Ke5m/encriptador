function botonEncriptar() {
    let textoIntroducido = document.getElementById("texto_a_modificar").value;
    let textoResultante = document.getElementById("texto_resultado");
  
    if (textoIntroducido === "") {
      alertPersonalizada("Por favor, escribe algo.");
      return;
    }
  
    if (!verificarTexto(textoIntroducido)) {
      alertPersonalizada("Texto no válido.");
      return; 
    }
  
    ocultarPorId("leyenda_ocultar");
    ocultarPorId("imagen_ejemplo");
    condicionesCambiadas();
  
    let textoEncriptado = encriptador(textoIntroducido);
    textoResultante.textContent = textoEncriptado;
    aplicarTextareaAdaptable();
  }
  

function botonDesencriptar(){
    let textoIntroducido = document.getElementById("texto_a_modificar").value;
    let textoResultante = document.getElementById("texto_resultado");

    if (textoIntroducido === "") {
        alertPersonalizada("Por favor, escribe algo.");
        return;
    }

    if (!verificarTexto(textoIntroducido)) {
      alertPersonalizada("Texto no válido.");
      return; 
    }

    ocultarPorId("leyenda_ocultar");
    ocultarPorId("imagen_ejemplo");
    condicionesCambiadas();

    let textoEncriptado = desencriptar(textoIntroducido);
    textoResultante.textContent = textoEncriptado;
    aplicarTextareaAdaptable();
}


function encriptador(texto){   
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");
    return texto;
    
}

function desencriptar(texto){
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");
    return texto;
}

function verificarTexto(texto){
    let verificado = /^[a-z\s]*$/;
    if (verificado.test(texto)){
        return true;
    }  else  {
        return false;
    }
}

function condicionesCambiadas(){
    let texto = document.getElementById("texto_resultado");

    texto.style.display = "block";
    
    document.getElementById("copiar").removeAttribute("hidden");    
}

function ocultarPorId(elementHtml){
    document.getElementById(elementHtml).style.display = "none" ;
}


function copiar(){
    let textocopiado = document.getElementById("texto_resultado");
    let texto = textocopiado.textContent;
    navigator.clipboard.writeText(texto);
}

function botonBorrar(){
    let textoBorrado = document.getElementById('texto_a_modificar');
    textoBorrado.value = "";
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function limpiaTextarea(){
    var textarea = document.getElementById("texto_a_modificar");
    textarea.value = "";
}
function aplicarTextareaAdaptable() {
    let textareaResultado = document.getElementById("texto_resultado");
    let textareaAModificar = document.getElementById("texto_a_modificar");

    function ajustarAltura(textarea) {
        textarea.style.height = "auto";
        textarea.style.height = textarea.scrollHeight + "px"; 
    }

    function manejarTextoAdaptable() {
        if (window.innerWidth <= 375) {
            if (textareaResultado) ajustarAltura(textareaResultado);
            if (textareaAModificar) ajustarAltura(textareaAModificar);
        } else if (window.innerWidth <= 768) {
            if (textareaResultado) ajustarAltura(textareaResultado);
        }
    }

    manejarTextoAdaptable();

    if (textareaResultado) textareaResultado.addEventListener("change", manejarTextoAdaptable);
    if (textareaAModificar) textareaAModificar.addEventListener("input", manejarTextoAdaptable);
}

function alertPersonalizada(texto){
    document.getElementById("texto_alerta").textContent = texto;
    document.getElementById("alerta_personal").style.display = "block";
}
function cerrarAlerta(){
    document.getElementById("alerta_personal").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function(){
    limpiaTextarea();
    aplicarTextareaAdaptable();
});
