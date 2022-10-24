/*

Expresion regular Dni /^\d{8}[a-zA-Z]$/
^[\d]{1,3}\.?[\d]{3,3}\.?[\d]{3,3}$
 Expresion regular Fecha ^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$

 http://idesweb.es/proyecto/proyecto-prac06-js-expresiones-regulares-dom
 https://donnierock.com/2011/11/05/validar-un-dni-con-javascript/
 https://aprenderaprogramar.com/foros/index.php?topic=3905.0
 https://www.lawebdelprogramador.com/foros/JavaScript/1745662-Validar-DNI-no-real-de-un-formulario.html
 https://lacodigoteca.com/javascript/validar-campos-formulario-html-js-php/
 https://uniwebsidad.com/libros/javascript/capitulo-7/validacion
 */

function validarDNI() {
    var d = document.getElementById("dni").value;

    var reg =new RegExp("^[a-zA-Z0-9]{5,10}$");

    if (d.match(reg)){
        alert ("El formato es el correcto");
        return true;
    } else {
        alert ("El formato es incorrecto");
        return false;
    }

}

function Fecha(){
    let f = document.getElementById("fecha").value;
    let expreg =new RegExp(/^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/);
    if(expreg.test(f)){
        alert("Fecha válida");

    }else{
        alert("Fecha incorrecta");

    }
}

function validarId() {
    var id = document.getElementById("id").value;

    var reg =new RegExp(/^[A-Z][a-z]+[.]$/);

    if (id.match(reg)){
        alert ("El formato es el correcto");
    } else {
        alert ("El formato es incorrecto");
    }

}

