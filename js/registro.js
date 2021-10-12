function validar(formulario) {

    var Reguladoremail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!Reguladoremail.test(formulario.correo.value)) {
        document.getElementById("errorcorreo").innerText = "Correo invalido"
        return false;
    }
    if (formulario.contraseña.value.length < 8) {
        document.getElementById("errorcontraseña").innerText = "Debe tener 8 caracteres como minimo"
        return false;
    }
    if (formulario.confirmacion.value !== formulario.contraseña.value) {
        document.getElementById("errorconfirmacion").innerText = "La contraseña no coincide";
        return false;
    }
    if (formulario.genero.value == -1) {
        document.getElementById("errorgenero").innerText = "Elija tipo de usuario"
        return false;
    }
    if (formulario.edad.value == "") {
        document.getElementById("erroredad").innerText = "Campo obligatorio";
        return false;
    }
    if (!formulario.terminos.checked) {
        document.getElementById("errorAcepto").innerText = "Debe aceptar los términos y condiciones"
        return false;
    }
    alert("Datos enviados")
    return true;
}