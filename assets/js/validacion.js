function validarDatos(){
    window.event.preventDefault();

    if(document.form.nombre.value ==""){
        alert("Campo nombre obligatorio");
        document.form.nombre.focus();
    }else if(document.form.email.value.indexOf("@")==-1 || document.form.email.value.indexOf(".")==-1 ){
        alert("Campo E-mail es invalido, Ingrese correctamente su dirección");
        document.form.email.focus();
    }else if(document.form.asunto.value ==""){
        alert("Campo Asunto obligatorio");
        document.form.asunto.focus();
    }else if(document.form.mensaje.value =="" || document.form.mensaje.value.length > 50){
        alert("Campo Mensaje es obligatorio y debe contener máximo 50 caracteres");
        document.form.mensaje.focus();
    } else {
        enviar();
        exhibirMensaje();
        
    }

}
document.querySelector("form").addEventListener("submit", validarDatos);


function exhibirMensaje(){
    var ul = document.querySelector(".envio");
    ul.innerHTML = "";
    var li = document.createElement("li");
        li.textContent = "Abriendo su app de correo!!";
        ul.appendChild(li);
        
        setTimeout(function(){
            li.textContent = null;
            form.reset();    
        },1000);
}

