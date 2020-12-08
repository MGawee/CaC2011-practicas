

var form = document.querySelector("form");
var email = document.getElementById("email");
var nombre = document.getElementById("nCompleto");
var usuario = document.getElementById("nUsuario");
var pass = document.getElementById("pass");
var submit = document.getElementById("submit");

form.onsubmit = function (e) {
    if (email.value === "" || nombre.value === "" || usuario.value === "" || pass.value === "") {
        e.preventDefault();
        alert("Completa todos los campos, por ejemplo:\nEmail: ejemplo@ejemplo.com\nNombre: Debe contener al menos 5 caracteres\nUsuario: Debe contener al menos 5 caracteres\nClave: Debe contener al menos 8 caracteres");
    } else if (!/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/.test(email.value)) {
        e.preventDefault();
        alert("El formato del mail es incorrecto\nUsuario: ejemplo@ejemplo.com");
    } else if (nombre.value.length < 5 || !/^[a-zA-Z\s]+$/.test(nombre.value)) {
        e.preventDefault();
        alert("El nombre debe contener al menos 5 caracteres, los mismos no pueden ser números ni caracteres especiales")
    } else if (pass.value.length < 8) {
        e.preventDefault();
        alert("La clave debe tener al menos 8 caracteres");
    }
    else {
        submit.form.action = ""
    }
}







