// Añadiendo funciones para validar campos de los formularios con expresiones regulares.

function validarEmail(email) {
    let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const success = regex.test(email); 
    if(!success) {
        document.getElementById("errorEmail").style = 'display';
        document.getElementById("errorEmail").innerHTML = "El correo no está correcto.<br>";
    } else {
        document.getElementById("errorEmail").style = 'display:none';
    }
    return success;
}

function validarNombre(nombre) {
    let regex = /[^0-9\.\,\"\?\!\;\:\#\$\%\&\(\)\*\+\-\/\<\>\=\@\[\]\\\^\_\{\}\|\~]+/;
    const success = regex.test(nombre); 
    if(!success) {
        document.getElementById("errorNombre").style = 'display';
        document.getElementById("errorNombre").innerHTML = "El nombre no está correcto.<br>";
    } else {
        document.getElementById("errorNombre").style = 'display:none';
    }
    return success;
}
 
function validarContraseña(contraseña) {
    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    const success = regex.test(contraseña); 
    if(!success) {
        document.getElementById("errorContrasena").style = 'display';
        document.getElementById("errorContrasena").innerHTML = "La contraseña debe contener al menos 8 caracteres, una mayúscula, una minúscula y un número.<br>";
    } else{
        document.getElementById("errorContrasena").style = 'display:none';
    }
    return success;
}

function validarConfirmaTuContrasena(contrasena,repiteContrasena){
    const success = contrasena === repiteContrasena ? true : false;
    if(!success) {
        document.getElementById("errorContrasenaConfirma").style = 'display';
        document.getElementById("errorContrasenaConfirma").innerHTML = "Las contraseñas no coinciden.<br>";
    } else{
        document.getElementById("errorContrasenaConfirma").style = 'display: none';
    }
    return success;
}




