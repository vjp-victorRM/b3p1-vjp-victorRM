/*

Expresion regular Dni /^\d{8}[a-zA-Z]$/
^[\d]{1,3}\.?[\d]{3,3}\.?[\d]{3,3}$
 Expresion regular Fecha ^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$

 http://idesweb.es/proyecto/proyecto-prac06-js-expresiones-regulares-dom
 https://donnierock.com/2011/11/05/validar-un-dni-con-javascript/
 https://aprenderaprogramar.com/foros/index.php?topic=3905.0
 https://www.lawebdelprogramador.com/foros/JavaScript/1745662-Validar-DNI-no-real-de-un-formulario.html
 */

function DNI(){
    let d = document.getElementById("dni").value;
    let expreg = /^[\d]{1,3}\.?[\d]{3,3}\.?[\d]{3,3}$/;
    if(expreg.test(d)){
        console.log("DNI válido");

    }else{
        console.log("DNI incorrecto");

    }
}

function Fecha(){
    let f = document.getElementById("fecha").value;
    let expreg = /^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/;
    if(expreg.test(f)){
        alert("Fecha válida");

    }else{
        alert("Fecha incorrecta");

    }
}

