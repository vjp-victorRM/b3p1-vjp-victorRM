'use strict'


document.addEventListener("DOMContentLoaded",function () {
   document.getElementById("cargarRestaurantes").addEventListener("click",cargarRestaurantes);
});




function cargarRestaurantes(event) {


   let peticionAjax = new XMLHttpRequest();
   peticionAjax.addEventListener("readystatechange", procesarPeticion);
   peticionAjax.open("GET", "https://raw.githubusercontent.com/fredericsangar/backupOpendataCCJSON/master/restaurantes.json");
   peticionAjax.send();

}

function pintarInfoMonumento(restaurante){
   let tabla = document.getElementById("tabla");
   tabla.innerHTML

   let cadenaDevuelta = "";
   cadenaDevuelta+="Value" +restaurante.value+"\n";
   cadenaDevuelta+="Nombre" +restaurante.rdfs_label.value+"\n";
   cadenaDevuelta+="Web" +objetoMonumento.geo_lat.value+"\n";
   cadenaDevuelta+="Direccion" +objetoMonumento.geo_long.value+"\n";
   cadenaDevuelta+="Máximo Aforo"+restaurante.om_capacidadPersonas.value;
   return cadenaDevuelta;

}

function procesarPeticion(event){
   if(this.readyState == 4 && this.status == 200){
      let objetoResultado = JSON.parse(this.responseText);
      procesarResultado(objetoResultado);
   }
}

function procesarResultado(objetoResultado){
   let cont = 0;
   for(let restaurante of objetoResultado.results.bindings){
      pintarInfoMonumento(restaurante);
      cont++;
   }
}
