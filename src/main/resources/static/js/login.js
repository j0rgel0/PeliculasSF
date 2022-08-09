let botonEnviar = document.querySelector("#botonEnviar");
let txtEmail = document.getElementById("email");
let txtContrasena = document.getElementById("contrasena");

botonEnviar.addEventListener("click", (event) => {
    event.preventDefault();
    const validaciones = [];
    validaciones.email = validarEmail(txtEmail.value);
    validaciones.password = validarContraseña(txtContrasena.value);

    if (validaciones.email && validaciones.password) {
        login({ username: txtEmail.value, password: txtContrasena.value });
    }

});

function login(usuario) {
    fetch('http://127.0.0.1:8080/api/login/',
        {
            body: JSON.stringify(usuario),
            method: 'POST',
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
        .then(response => response.json())
        .then(response => {
            if (!response.accesToken) {
                swal("El correo o la contraseña son incorrectos.", "", "danger");
            } else {
                localStorage.setItem("token", response.accesToken);
                document.getElementById("errorValidacion").style = 'display: none';
                window.location.href = "index.html"        
            }
        })
        .catch(error => {
            swal("Ocurrio un error al registrar el producto", "", "danger");
        });
}
