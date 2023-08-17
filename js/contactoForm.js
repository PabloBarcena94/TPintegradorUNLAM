var regexCampoEmail=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
var regexCampoNumero=/^[0-9]{4}-[0-9]{4}|[0-9]{8}$/;
function validar (){
    var error=false;
    var mensajeError=""; 
    document.getElementById("mensaje").style.color="red";

        //Valida campo nombre   
        if(document.getElementById("nombre").value==""){
            error=true;
            mensajeError+="<p>El campo nombre no puede estar vacío</p>";
        }
        //Valida campo apellido
        if(document.getElementById("apellido").value==""){
            error=true;
            mensajeError+="<p>El campo apellido no puede estar vacío</p>";
        }
        //Valida campo email
        if(!regexCampoEmail.test(document.getElementById("mail").value)){
            error=true;
            mensajeError+="<p>Tiene que ingresar un email</p>";
        }
        //Valida campo telefóno
        if(!regexCampoNumero.test(document.getElementById("tel").value)){
            error=true;
            mensajeError+="<p>Tiene que ingresar un número telefónico ej: 44009977 o 4457-2467</p>";
        }
        //Valida el campo caja de consulta
        if(document.getElementById("consulta").value==""){
            error=true;
            mensajeError+="<p>Ingrese su consulta. El campo no puede estar vacío</p>";
        }
        if(error){
            document.getElementById("mensaje").innerHTML=mensajeError;
            return false;
        }else {
            return true;
        }
        
}
function contarLetras (){
    var total = 1000;
    setTimeout(function(){
        var valor=document.getElementById("consulta");
        var mostrar=document.getElementById("mostrar");
        var cantidad=valor.value.length;
        document.getElementById("mostrar").innerHTML=cantidad + " / " + (total - cantidad);
        //Para mostrar en rojo cuando se supere la cantidad de caracteres
        if(cantidad>=total){
            mostrar.style.color="red";
            document.getElementById("consulta").disabled = true;
        }

    });

}


document.getElementById("botonEnviar").addEventListener('click', consultaEnviada);
document.querySelector(".popup").style.display="none";
function consultaEnviada(){
    //Si la validación se cumple:
    if (validar()===true) {
        //Mostramos el div popup
        document.querySelector(".popup").style.display="block";
        //Llamamos al formulario
        var formulario = document.getElementById("miFormulario");
        //Agregamos el evento submit al formulario
        formulario.addEventListener("submit", function(event) {
        //Prevenimos el envío del formulario por defecto    
        event.preventDefault();
        //Llamamos al boton y le damos funcionalidad click para que al aceptar nos redireccione al home del sitio
            var btnAceptar = document.getElementById("btnAceptar");
            btnAceptar.addEventListener("click", function() {
            window.location.href = "index.html";
        });
         
    });
} 
}




/*
    Función para mostrar el popup
function mostrarPopup() {
  Crear el elemento del popup
  var popup = document.createElement("div");
  popup.className = "popup";
  
  Crear el elemento de texto
  var texto = document.createElement("p");
  texto.textContent = "Consulta enviada";
  
  Crear el botón
  var botonAceptar = document.createElement("button");
  botonAceptar.textContent = "Aceptar";
  
  Agregar el evento click al botón
  botonAceptar.addEventListener("click", function() {
    Redirigir a la página principal
    window.location.href = "pagina_principal.html";
  });
  
  Agregar el texto y el botón al popup
  popup.appendChild(texto);
  popup.appendChild(botonAceptar);
  
  Agregar el popup al cuerpo del documento
  document.body.appendChild(popup);
}

Llamar a la función para mostrar el popup
mostrarPopup();

*/ 