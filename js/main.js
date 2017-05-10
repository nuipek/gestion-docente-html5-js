$.noConflict();
jQuery(document).ready(function($) {
    // Code that uses jQuery's $ can follow here.
    $("#contactForm").on("submit",validarFormularioContacto);


    function validarFormularioContacto(){
        //recoger los valores de la vista
        var pdni = $("#dni").val();
        //evaluarlos
        var enviado= validarDni(pdni); //en funcion de si estan bien o mal o se envia o no
        if(enviado){
            $("#contactForm").submit();//se envia el Formulario(Consumir REST)
        }else {
            //mostar mensaje de error
            $("#dni").siblings("div.text-error").text("El DNI esta mal formado");
            //text y html
        }
        return false;
    }
});
function validarDni(dni) {
    var valido = true;
    var letrasMin = "trwagmyfpdxbnjzsqvhlcket";
    var letrasMay = letrasMin.toUpperCase();
    var tamano = dni.length;
    var letra = dni.charAt(tamano -1);
    var numero= dni.substring(0,tamano-1);

   if(isNaN(parseInt(numero,10))
       || tamano != 9
       || !isNaN(letra))

   {
       valido=false;
   }

    else
   {

       if (letra != letrasMin.charAt(numero % 23)&&
           letra != letrasMay.charAt(numero % 23))
       {
           valido = false;
       }
   }
    
    return valido;
}

