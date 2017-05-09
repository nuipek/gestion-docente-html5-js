function validarFormularioContacto(){
    //recoger los valores de la vista
    var pdni = document.getElementById("dni").value;
    //evaluarlos
    if(validarDni(pdni)){ //en funcion de si estan bien o mal o se envia o no
        alert("Es valido");
    }else{
        alert("No Es valido");

    }
}

function validarDni(dni) {
    var valido =true;

    return valido;
}
