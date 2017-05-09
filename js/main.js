function validarFormularioContacto(){
    //recoger los valores de la vista
    var pdni = document.getElementById("dni").value;
    //evaluarlos
    if(validarDni(pdni)){ //en funcion de si estan bien o mal o se envia o no
        alert("Es valido");
    }else{
        alert("No Es valido");

    }
    return false;
}

function validarDni(dni) {
    var valido =true;
    numero = parseInt(dni.substr(0,dni.length-1),10);
    letr = dni.substr(dni.length-1,1);
    numero = numero % 23;
    letra='TRWAGMYFPDXBNJZSQVHLCKET';
    letra=letra.substring(numero,numero+1);
    if (letra!=letr.toUpperCase()) {
        valido = false;
    }
    return valido;
}
