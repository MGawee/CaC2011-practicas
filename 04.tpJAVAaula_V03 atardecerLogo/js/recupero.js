var form = document.querySelector("form");
var email = document.getElementById("email");
var submit = document.getElementById("submit");

form.onsubmit = function (e) {
    if (email.value === "" || !/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/.test(email.value)) {
        e.preventDefault();
        alert("Coloca tu dirección de email para que podamos restablecer tu contraseña: ejemplo@ejemplo.com");
    }
    // else if (!/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/.test(email.value)) {
    //     e.preventDefault();
    //     alert("El formato del Usuario es incorrecto\nUsuario: ejemplo@ejemplo.com");
    // }
    else {
        submit.form.action = ""
    }
}

