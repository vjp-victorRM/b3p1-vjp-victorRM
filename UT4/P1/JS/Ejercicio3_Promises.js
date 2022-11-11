let boton = document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("boton").addEventListener("click", cargarMuseos());
});

function cargarMuseos() {
    let peticionAjax = new XMLHttpRequest();
    peticionAjax.addEventListener("readystatechange", procesarPeticion);
    peticionAjax.open("GET", "https://raw.githubusercontent.com/fsangar/backupOpendataCCJSON/master/museos.json");
    peticionAjax.send();
}


function procesarPeticion(event) {
    if (this.readyState == 4 && this.status == 200) {
        let objetoMuseo = JSON.parse(this.responseText);
        procesarResultado(objetoMuseo);
    }
}

function pintarMuseo(objetoMuseo) {
    let contenendor = document.getElementById('contenedorTabla');
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

function procesarResultado(objetoMuseo) {
    let cabecera = document.getElementById("contenedorTabla")
    cabecera.innerHTML = <tr>Nombre</tr>, <tr>Latitud</tr>, <tr>Longitud</tr>, <tr>Url Web</tr>
    for (let museo of objetoMuseo.results.bindings) {
        console.log(pintarMuseo(objetoMuseo));
    }
}





