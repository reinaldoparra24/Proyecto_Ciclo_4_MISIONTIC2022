function verificarPasswords() {
 
    // Ontenemos los valores de los campos de contraseñas 
    contrasena_1 = document.getElementById('exampleInputPassword');
    contrasena_2 = document.getElementById('exampleInputPassword1');
 
    // Verificamos si las constraseñas no coinciden 
    if (contrasena_1.value != contrasena_2.value) {
 
        // Si las constraseñas no coinciden mostramos un mensaje 
        document.getElementById("error").classList.add("mostrar");
 
        return false;
    } else {
 
        // Si las contraseñas coinciden ocultamos el mensaje de error
        document.getElementById("error").classList.remove("mostrar");
 
        // Mostramos un mensaje mencionando que las Contraseñas coinciden 
        document.getElementById("ok").classList.remove("ocultar");
 
        // Desabilitamos el botón de login 
        document.getElementById("login").disabled = true;
 
        // Refrescamos la página (Simulación de envío del formulario) 
        setTimeout(function() {
            location.reload();
        }, 3000);
 
        return true;
    }
}