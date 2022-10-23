var Usuario = new URL(location.href).searchParams.get("Usuario");
var user;

$(document).ready(function () {
    
    fillUsuario().then(
            );

    $("#form-modificar").on("submit", function (event) {

        event.preventDefault();
        modificarUsuario();
    });

    $("#aceptar-eliminar-cuenta-btn").click(function () {

        eliminarCuenta().then(function () {
            location.href = "login.html";
        })
    })
});


async function fillUsuario() {
    await $.ajax({
        type: "GET",
        dataType: "html",
        url: "./ServletUsuarioPedir",
        data: $.param({
            Usuario: Usuario,
        }),
        success: function (result) {
            let parsedResult = JSON.parse(result);

            if (parsedResult != false) {
                user = parsedResult;

                $("#input-usuario").val(parsedResult.Usuario);
                $("#input-contrasena").val(parsedResult.Contrasena);
                $("#input-nombre").val(parsedResult.Nombre);
                $("#input-apellidos").val(parsedResult.Apellido);
                $("#input-email").val(parsedResult.Email);
                $("#input-identificacion").val(parsedResult.Identificacion);


            } else {
                console.log("Error recuperando los datos del usuario");
            }
        }
    });
}



function modificarUsuario() {

    let Usuario = $("#input-usuario").val();
    let Contrasena = $("#input-contrasena").val();
    let Nombre = $("#input-nombre").val();
    let Apellido = $("#input-apellidos").val();
    let Email = $("#input-email").val();
    let Identificacion = $("#input-identificacion").val();

    $.ajax({
        type: "GET",
        dataType: "html",
        url: "./ServletUsuarioModificar",
        data: $.param({
            Usuario: Usuario,
            Contrasena: Contrasena,
            Nombre: Nombre,
            Apellido: Apellido,
            Email: Email,
            Identificacion: Identificacion
        }),
        success: function (result) {

            if (result != false) {
                $("#modificar-error").addClass("d-none");
                $("#modificar-exito").removeClass("d-none");
            } else {
                $("#modificar-error").removeClass("d-none");
                $("#modificar-exito").addClass("d-none");
            }

            setTimeout(function () {
                location.reload();
            }, 3000);

        }
    });

}

async function eliminarCuenta() {

    await $.ajax({
        type: "GET",
        dataType: "html",
        url: "./ServletUsuarioEliminar",
        data: $.param({
            Usuario: Usuario
        }),
        success: function (result) {

            if (result != false) {

                console.log("Usuario eliminado")

            } else {
                console.log("Error eliminando el usuario");
            }
        }
    });
}
