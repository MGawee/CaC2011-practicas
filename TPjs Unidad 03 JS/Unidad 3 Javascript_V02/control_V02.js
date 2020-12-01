

var form = document.querySelector("form");
var email = document.getElementById("mail");
var pass = document.getElementById("clave");
var submit = document.getElementById("submit");

form.onsubmit = function (e) {
    if (email.value === "" || pass.value === "") {
        e.preventDefault();
        alert("Completa ambos campos, por ejemplo:\nUsuario: ejemplo@ejemplo.com\nClave: Debe contener al menos 8 caracteres");
    }
    else if (!/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/.test(email.value)) {
        e.preventDefault();
        alert("El formato del Usuario es incorrecto\nUsuario: ejemplo@ejemplo.com");
    } else if (pass.value.length < 8) {
        e.preventDefault();
        alert("La clave debe tener al menos 8 caracteres");
    }
    else {
        submit.form.action = "bienvenido_V02.html"
    }
}








