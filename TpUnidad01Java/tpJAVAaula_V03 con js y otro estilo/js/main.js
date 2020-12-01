var form = document.querySelector("form");
var nUsuario = document.getElementById("nUsuario");
var pass = document.getElementById("pass");
var submit = document.getElementById("submit");

form.onsubmit = function (e) {
    if (nUsuario.value === "" || pass.value === "") {
        e.preventDefault();
        alert("Completa ambos campos, por ejemplo:\nUsuario: Debe contener al menos 5 caracteres)\nClave: Debe contener al menos 8 caracteres");
    }
    else if (nUsuario.value.length < 5) {
        e.preventDefault();
        alert("El formato del Usuario es incorrecto\nUsuario: Debe contener al menos 5 caracteres");
    } else if (pass.value.length < 8) {
        e.preventDefault();
        alert("La clave debe tener al menos 8 caracteres");
    }
    else {
        submit.form.action = "/login.jsp"
    }
}

