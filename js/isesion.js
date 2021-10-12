function validar(formulario) {
    var Reguladoremail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!Reguladoremail.test(formulario.email.value)) {
        document.getElementById("errorcorreo").innerText = "Correo invalido"
        return false;
    }
    if (formulario.contraseña.value.length < 8) {
        document.getElementById("errorcontraseña").innerText = "Debe tener 8 caracteres como minimo"
        return false;
    }
    alert("Ha iniciado sesion exitosamente")
    return true;
}