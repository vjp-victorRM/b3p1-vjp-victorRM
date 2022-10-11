/*
1
 */

var primerAtributo = document.querySelector("#div1 a");
console.log(primerAtributo.getAttribute("title"));

/*
2
 */

var primerEnlace = document.querySelector("#div1 > a");
console.log(primerEnlace);

/*
3
 */

var segundoEnlace = document.querySelector("#div1 > p > a");
console.log(segundoEnlace.textContent);

/*
4
 */

var clase = document.querySelector(".linkNormal:nth-of-type(2)");
console.log(clase.getAttribute("href"));

/*
5
 */

var clase2 = document.querySelector(".linkNormal[title ^= Spider]");
console.log(clase2.innerHTML + "-"+clase2.nodeType);

/*
6
 */

var clase3 = document.querySelector(".linkNormal[title ^= Spider]+a");
console.log(clase3.innerHTML);

/*
7
 */

var clase4 = document.querySelector(".linkNormal");
for (let i = 0; i < clase4.length; i++) {
    console.log(clase4[i].title);
}

/*
8
 */

var clase5 = document.querySelector("a[title^=Spider]").nextElementSibling;
let clase5_2 = document.querySelector("a[title^=Spider]").previousElementSibling;
console.log(clase5.innerHTML);






