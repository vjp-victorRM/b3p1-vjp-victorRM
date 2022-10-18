
function asignaColores(){

    let colores = ["red","blue","green","yellow"];
    let color = this.style.backgroundColor;
    let indice = colores.indexOf(color);
    switch (event.button){
        case 1:
            if(indice == colores.length-1){
                indice=0;
            }
            else{
                indice++;
            }
            this.style.backgroundColor=colores[indice];
            break;
        case 2:
            if(color == "blue"){
                indice++;
                this.style.backgroundColor[indice];
            }
            break;
        case 3:
            if(color == "green"){
                indice++;
                this.style.backgroundColor[indice];
            }
            break;

        case 4:
            if(color == "yellow"){
                indice++;
                this.style.backgroundColor[indice];
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
