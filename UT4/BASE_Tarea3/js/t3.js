'use strict';

let peticionAjax = new XMLHttpRequest();
peticionAjax.addEventListener("readystatechange", procesarPeticion);
peticionAjax.open("GET", "https://jsonplaceholder.typicode.com/posts");
peticionAjax.send();


function procesarPeticion() {
    if (this.readyState == 4 && this.status == 200) {
        let objetoPost = JSON.parse(this.responseText);
        procesarResultado(objetoPost);
    }
}

function procesarResultado(objetoPost) {
    for (let i = 0; i < objetoPost.length; i++) {
        pintarPost(objetoPost[i]);
        console.log(i);
    }

}

function pintarPost(objetoPost) {
    let caja = document.createElement("div");
    let contenedor = document.querySelector("#contenedorEntradas");
    caja.innerHTML =
        ` <div class="entrada">
            <p><strong>TITULO</strong>${objetoPost.title}</p>
            <div>
                <p><strong>Contenido</strong>: contenido</p>
                <button id="boton1" class="mostrarUsuario" >Usuario del Post</button>
                <button class="mostrarComentarios">Mostrar comentarios</button>
                <div class="usuario d-none">
                    <p><strong>NOMBRE USUARIO: </strong> Nombre</p>
                </div>
                <div class="comentarios d-none">
                    <p><strong>Comentarios: </strong></p>
                    <p> - Comentario1: </p>
                    <p> - Comentario 2: </p>
                </div>
            </div>
        </div>`;
    contenedor.appendChild(caja);
    caja.querySelector(".mostrarUsuario").addEventListener("click",function (){
        caja.querySelector(".usuario").classList.toggle("d-none");
        let usuarioCaja = caja.querySelector(".usuario");
        if(usuarioCaja.className.includes("d-none")){
            cargarUsuario(post.userId,div);
        }else{
            usuarioCaja.classList.toggle("d-none");
        }
    })
    caja.querySelector(".mostrarComentarios").addEventListener("click",function (){
        caja.querySelector(".comentarios").classList.toggle("d-none");
    })

}



