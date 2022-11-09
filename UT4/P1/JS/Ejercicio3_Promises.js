
let boton = document.addEventListener("DOMContentLoaded",function (){
    boton.addEventListener("click",pintarMuseo())
});
function peticion() {
    let peticionAjax = new XMLHttpRequest();
    peticionAjax.addEventListener("readystatechange", procesarPeticion);
    peticionAjax.open("GET", "https://raw.githubusercontent.com/fsangar/backupOpendataCCJSON/master/museos.json");
    peticionAjax.send();
}


function procesarPeticion(event){
    if(this.readyState == 4 && this.status == 200){
        let objetoResultado = JSON.parse(this.responseText);
        procesarResultado(objetoResultado);
    }
}

function pintarMuseo(objetoMuseo){
    let contenendor = document.getElementById('contenedorTabla')
    contenendor.innerHTML =
        <tr>Nombre</tr>
        <tr>Latitud</tr>
        <tr>Longitud</tr>
        <tr>Url Web</tr>;
    let tabla = document.createElement("tr");
    tabla.innerHTML =
    <td>objetoMuseo.rdfs_label.value</td>
    <td>objetoMuseo.geo_lat.value</td>
    <td>objetoMuseo.geo_long.value</td>
    <td>objetoMuseo.uri.value</td>;
}


