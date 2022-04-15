function enviar(){
        //const btnEnvio = document.getElementById("enviarCorreo");
                     
        //btnEnvio.addEventListener("click", function (event) { event.preventDefault();
            const nombre = document.getElementById("nombre").value;
            const email = document.getElementById("email").value;
            const asunto = document.getElementById("asunto").value;
            const mensaje = document.getElementById("mensaje").value;
            window.location.href=`mailto:fmt309@hotmail.com?subject=Envio_de_Formulario_Contacto_MiPortafolio&body=Nombre%3A%20${nombre}%0D%0ACorreo%3A%20${email}%20%0D%0AAsunto%3A%20${asunto}%20%20%0D%0AMensaje%3A%20${mensaje}`;
       };
