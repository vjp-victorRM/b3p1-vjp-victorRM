/*
let peticionAjax = new XMLHttpRequest();
peticionAjax.addEventListener("readystatechange", procesarPeticion);
peticionAjax.open("GET","http://www.google.es");
peticionAjax.send();

function procesarPeticion(event){
    if(this.readyState == 4 && this.status == 200){
        console.log(this.responseText);
    }
}

 */

function pintarHola(){console.log("Hola")}
setTimeout(pintarHola,500);

let funcion = setTimeout(pintarHola(),500);
console.log(funcion);

let funcionlambda = setTimeout(pintarHola,500) => {

}

let funcion4 =



    setTimeout(pintarHola,500);










