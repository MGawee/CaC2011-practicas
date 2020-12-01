

var form = document.querySelector("form");
var email = document.getElementById("mail");
var pass = document.getElementById("clave");
var submit = document.getElementById("submit");

form.onsubmit = function (e) {
    if (email.value === "" || pass.value === "") {
        e.preventDefault();
        alert("Completa ambos campos, por ejemplo:\nUsuario: ejemplo@ejemplo.com\nClave: Debe contener al menos 8 caracteres");
    } else if (email.value.indexOf("@") < 1) {
        e.preventDefault();
        alert("Debe contener un caracter @:\nUsuario: ejemplo@ejemplo.com");
    } else if (email.value.indexOf(".") < 1) {
        e.preventDefault();
        alert("Falta el . (punto) del dominio, en el usuario:\nUsuario: ejemplo@ejemplo.com");
    } else if (email.value.length < 8 || email.value.length > 30) {
        e.preventDefault();
        alert("El email no puede contener menos de 8 caracteres ni más de 30 caracteres");
    } else if (pass.value.length < 8) {
        e.preventDefault();
        alert("La clave debe tener al menos 8 caracteres");
    } else {
        submit.form.action = "bienvenido_V01.html"
    }
}








