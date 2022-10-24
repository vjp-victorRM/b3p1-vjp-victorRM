let inputText = document.querySelector(".entrada");
console.log(inputText);

function validarDNI() {
    var d = document.getElementsByClassName("entrada");
    console.log(inputText.value);
    var reg =new RegExp("^[a-zA-Z0-9]{5,10}$");

    if (reg.test()){
        alert ("El formato es el correcto");
    } else {
        alert ("El formato es incorrecto");
    }

}

function Fecha(){
    let f = document.getElementsByClassName("entrada");
    console.log(inputText.value);
    let expreg =new RegExp(/^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/);
    if(expreg.test(f)){
        alert("Fecha válida");

    }else{
        alert("Fecha incorrecta");

    }
}

function validarId() {
    var id = document.getElementById("id").value;

    var reg =new RegExp(/^[a-z][A-Z]/);

    if (id.match(reg)){
        alert ("El formato es el correcto");
    } else {
        alert ("El formato es incorrecto");
    }

}

