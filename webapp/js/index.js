$(document).ready(function () {
    
    $("#form-login").submit(function (event) {

        event.preventDefault();
        autenticarUsuario();
    });

    
    $("#form-register").submit(function (event) {

        event.preventDefault();
        registrarUsuario();
    });
    
});

function autenticarUsuario() {

    let Usuario = $("#username").val();
    let Contrasena = $("#exampleInputPasswordl").val();

    $.ajax({
        type: "GET",
        dataType: "html",
        url: "./ServletUsuarioLogin",
        data: $.param({
            Usuario : Usuario,
            Contrasena: Contrasena
        }),
        success: function (result) {
            let parsedResult = JSON.parse(result);
            if (parsedResult != false) {
                $("#login-error").addClass("d-none");
                let Usuario = parsedResult['Usuario'];
                document.location.href = "index.html?Usuario=" + Usuario;
            } else {
                $("#login-error").removeClass("d-none");
            }
        }
    });
}

function registrarUsuario() {
    
    let Nombre = $("#nombre").val();
    let Apellido = $("#apellido").val();
    let Edad = $("#edad").val();
    let Identificacion = $("#identificacion").val();
    let Usuario = $("#usuario").val();
    let Email= $("#exampleInputEmail1").val();
    let Contrasena = $("#exampleInputPassword").val();
    let ContrasenaConfirmacion = $("#exampleInputPassword1").val();

    if (Contrasena === ContrasenaConfirmacion) {
        $.ajax({
            type: "GET",
            dataType: "html",
            url: "./ServletUsuarioRegistro",
            data: $.param({
                Nombre : Nombre,
                Apellido : Apellido,
                Edad : Edad,
                Identificacion : Identificacion,
                Usuario : Usuario,
                Email: Email,
                Contrasena: Contrasena
            }),
            success: function (result) {
                let parsedResult = JSON.parse(result);

                if (parsedResult != false) {
                    $("#register-error").addClass("d-none");
                    let Usuario = parsedResult['Usuario'];
                    document.location.href = "login.html";
                } else {
                    $("#register-error").removeClass("d-none");
                    $("#register-error").html("Error en el registro del usuario");
                }
            }
        });
    } else {
        $("#register-error").removeClass("d-none");
        $("#register-error").html("Las contraseñas no coinciden");
    }
}

