/*
document.getElementById("normalDiv").style.boxSizing="border-box";
document.getElementById("normalDiv").style.maxWidth="200px";
document.getElementById("normalDiv").style.padding="50px";
document.getElementById("normalDiv").style.color="white";
document.getElementById("normalDiv").style.background="red";



window.addEventListener("load",function (){
  console.log("Bien");
});

document.addEventListener("DOMContentLoaded",function (){
   console.log("Se ha parseado y cargado correctamente el DOM");
});
*/
function despuesDeCargar(){

    let id = document.getElementById("contenedorGeneral");

    id.style.height = "200px";
    id.style.width = "200px";
    id.style.backgroundColor = "grey";
    id.style.color = "blue";
    id.style.border = "1px solid red";

    window.addEventListener("resize", function () {
        contenedor.innerText = window.innerWidth + "-" + window.innerHeight;
    });
}

document.addEventListener("DOMContentLoaded",despuesDeCargar);

window.onbeforeunload = function (){
    return "Se cierra con un mensaje";
}







