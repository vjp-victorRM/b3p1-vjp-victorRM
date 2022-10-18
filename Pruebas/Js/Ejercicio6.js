function creaMatriz(){
    let contenedor = document.querySelector("#contenedorGeneral");
    for (var i = 0; i < 10; i++){
        let saltodeLinea = document.createElement("br");
        contenedor.appendChild(saltodeLinea);
        for (var j = 0; j < 10; j++){
            let filas = document.createElement("button");
            contenedor.appendChild(filas);
            filas.style.width = "25px";
            filas.style.height = "25px";
            filas.style.margin = "10px";
        }

    }

}
creaMatriz();

function asignaColores(){

    let colores = ["red","blue","green","yellow"];
    let color = this.style.backgroundColor;
    switch (colores){
        case 1:
            if(color = ""){
                button.addEventListener("click",button);
                let indice = colores.indexOf(color);
                indice++;
                this.style.backgroundColor[indice];
            }
            break;
        case 2:

    }
}

