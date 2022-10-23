var Usuario = new URL(location.href).searchParams.get("Usuario");
var user;

$(document).ready(function () {

    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });

    getUsuario().then(function () {

        $("#perfil").attr("href", "pruebaP.html?Usuario=" + Usuario);
    });



    async function getUsuario() {

        await $.ajax({
            type: "GET",
            dataType: "html",
            url: "./ServletUsuarioPedir",
            data: $.param({
                Usuario : Usuario
            }),
            success: function (result) {
                let parsedResult = JSON.parse(result);
                if (parsedResult != false) {
                    user = parsedResult;
                } else {
                    console.log("Error recuperando los datos del usuario");
                }
            }
        });
    }
});    
