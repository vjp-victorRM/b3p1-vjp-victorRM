/*
console.log(window.outerWidth+"-"+window.outerHeight);

window.open("https://www.google.com");

console.log(window.screen.width+"-"+window.screen.height);
console.log(window.screen.availWidth+"-"+window.screen.availHeight);

console.log(window.navigator.userAgent);

var variable = "Hola";
console.log(window.variable);
console.log(history.length);

window.navigator.geolocation.getCurrentPosition(function (posicion) {
    console.log("Latitud : "+posicion.coords.latitude + "Longitud" +posicion.coords.longitude);
})

 */
/*
let num = 1;

let idInterval = setInterval(function (){
    console.log(num++);
    if(num > 10){
        clearInterval(idInterval)
    }
}, 5000);

function multiply(num1,num2){
    console.log(num1 * num2);
}

setTimeout(multiply, 5000, 6, 7);

 */
/*
document.documentElement;
document.head
document.body
document.getElementById("id");
document.getElementsByClassName("class");
document.getElementsByTagName("p");


let head = document.head;
console.log(body.childNodes);
element.children;
element.parentNode;
console.nextSibling;
element.previousSibling;
element.nextElementSibling;
element.previousElementSibling;

 */
/*Prueba 6
let elemento = document.createElement("p");
let nodo = document.createTextNode("Este es el párrafo final");
elemento.appendChild(nodo);
document.body.appendChild(elemento);
*/

/*Prueba7
const elementosP = document.getElementsByTagName("p");

console.log("Antes de borrar");
for(let item of elementosP){
    console.log(item);
}
let elementos = document.getElementsByClassName('parrafos');
console.log(elementos);
for(let item of elementos){
    item.remove();
}


console.log("Despues de borrar");
for(let item of elementosP){
    console.log(item);
}
*/

/*Ejercicio 1*/

var elementosP = document.getElementById("primerelemento");

while (elementosP){
    console.log(elementosP.nodeName);
    console.log(elementosP.nodeType);
    console.log(elementosP.nodeValue);
    console.log(elementosP.textContent);
    elementosP = elementosP.nextElementSibling;
}




