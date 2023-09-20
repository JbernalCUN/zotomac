// Deploy modal information
$(document).ready(function () {
    // Handle form submission
    $("#contact-form").submit(function (event) {
        event.preventDefault(); // Prevent the default form submission
     // Get form values
        var nombre = $("#fullname").val();
        var correo = $("#email").val();
        var mensaje = $("#message").val();
     // Display form data in the modal
        $("#modalNombre").text(nombre);
        $("#modalCorreo").text(correo);
        $("#modalMensaje").text(mensaje);
     // Show the modal
        $("#contact-modal").modal();
    });
});

