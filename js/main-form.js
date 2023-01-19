function valForm()
{
    console.log("acceso establecido a la");
    var vNom=$("#Nombre").val();
    var vMail=$("#correo").val();
    var vTel=$("#Telefono").val();
    var vDirec=$("#Direccion").val();
    var vMensaje=$('#mensaje').val();

    ///validar campo Nombre
    if(vNom=="" || VNom==Null){
        err_Color("Nombre");
        err_vacio('nombre',);
        return false;
    } else{
        var expresion=/^[a-zA-ZñÑáéíúÁÉÍÓÚ]*$/;
        if(!expresion.test(vNom)){
            err_Color("nombre");
            err_Contenido("No se permiten caracter especial o numero");
            return false;
        }
    }
    

    //validar correo
    if(vMail=="" || vMail==null ){
        err_Color("correo");
        err_Contenido("Correo");
        return false;
    }else{
        var expresion=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        if(expresion.test(vMail)){
            err_Color("correo");
            err_Contenido("Correo, Formato no valido");
            return false;
        }
    }

      ///validar campo Telefono
      if(vTel=="" || vTel==Null){
        err_Color("Telefono");
        err_vacio('telefono',);
        return false;
    } else{
        var expresion=/^[0123456789+]*$/;
        if(!expresion.test(vTel)){
            err_Color("nombretelefono");
            err_Contenido("No se permiten caracter especial o letras");
            return false;
        }
    }

    ///validar campo Direccion
    if(vDirec=="" || vDirec==Null){
        err_Color("TDireccion");
        err_vacio('direccion',);
        return false;
    } else{
        var expresion=/^[a-zA-ZñÑáéíúÁÉÍÓÚ]*$/;
        if(!expresion.test(vTel)){
            err_Color("nombretelefono");
            err_Contenido("No se permiten caracter especial o numero");
            return false;
        }
    }
    


    $("form").submit();
    return true; 

}


function err_Contenido(dato){
    $alert("error de ingreso:"+dato);

}

function err_Color(dato){
    $("#"+dato).css('border','1px solid #dd5144');

}

function Colordefault(dato){
    $("dato+dato").css('broder', '1px solid #999');
}

$("input").focus(function(){
    Colordefault("nombre");
    Colordefault("correo");
})