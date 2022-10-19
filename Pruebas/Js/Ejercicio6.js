let colores = ["red","blue","green","yellow"]

function asignaColores(event){

    let color = this.style.backgroundColor;
    let posicion = colores.indexOf(color);
    switch (event.button){
        case 0:
            posicion = (posicion + 1) % colores.length ;
            this.style.backgroundColor = colores[posicion];
            break;
        case 1:
            this.style.backgroundColor = "";
            break;
        case 2:
            if (posicion == -1 || posicion == 0){
                this.style.backgroundColor = colores[colores.length-1];
            }
            else{
                this.style.backgroundColor = colores[posicion-1];
            }
            break;

    }
}

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

            filas.addEventListener("mouseup",asignaColores);

        }
    }

}
creaMatriz();
