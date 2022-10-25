let inputText = document.querySelector(".entrada");
console.log(inputText);
const expresions = {
    dni: /^\d{8}[a-zA-Z]$/,
    fecha : /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/,
    id: /^[-_]|^[a-z]/
}

function validarDNI() {
    if (expresions["dni"].test(inputText.value) === true){
        alert ("El formato es el correcto");
    } else {
        alert ("El formato es incorrecto");
    }

}

function Fecha(){
    if(expresions["fecha"].test(inputText.value) === true){
        alert("Fecha válida");

    }else{
        alert("Fecha incorrecta");

    }
}

function validarId() {
    if(expresions["id"].test(inputText.value) === true){
        alert ("El formato es el correcto");
    } else {
        alert ("El formato es incorrecto");
    }

}

