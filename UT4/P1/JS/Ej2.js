/*
let monumento = {
    "uri": {
        "type": "uri",
        "value": "http://opendata.caceres.es/recurso/turismo/monumentos/Monumento/23-concatedral-de-santa-maria"
    },
    "geo_long": {
        "datatype": "http://www.w3.org/2001/XMLSchema#decimal",
        "type": "typed-literal",
        "value": "-6.37004029561"
    },
    "geo_lat": {
        "datatype": "http://www.w3.org/2001/XMLSchema#decimal",
        "type": "typed-literal",
        "value": "39.4745659792"
    },
    "owl_sameAs": {
        "type": "uri",
        "value": "http://opendata.caceres.es/recurso/cultura-ocio/religion/CentroReligioso/26-concatedral-de-santa-maria"
    },
    "om_tipoMonumento": {
        "type": "literal",
        "value": "Concatedral"
    },
    "rdfs_label": {
        "type": "literal",
        "value": "Concatedral de Santa Maria"
    },
    "om_tieneEnlaceSIG": {
        "type": "uri",
        "value": "http://sig.caceres.es/serweb/fichasig/fichatoponimia.php?mslink=1163"
    },
    "schema_address_addressLocality": {
        "type": "literal",
        "value": "Cáceres"
    },
    "schema_address_addressCountry": {
        "type": "literal",
        "value": "ES"
    }
};

console.log("El nombre del monumento es " +monumento.rdfs_label.value);
console.log("El tipo de monumento es: " +monumento.om_tipoMonumento.value);

monumento.pintarInfo = function (){
  console.log(monumento.rdfs_label.value) ;
  console.log(monumento.om_tipoMonumento.value);
  console.log(monumento.geo_lat.value);
  console.log(monumento.geo_long.value);
  console.log(monumento.uri.value);
};

console.log(monumento.pintarInfo());

 */

class Usuario {
    constructor(nombre) {
        this.nombre = nombre;
        this.tipo = 1;
    }

    saludo(){
        console.log(`Hola,soy ${this.nombre}`);
    }

    decirTipo(){
        console.log("Soy un usuario de tipo" +this.tipo);
    }
}

class Administrador extends Usuario {
    constructor(nombre) {
        super(nombre);
        this.tipo = 2;
    }

    decirTipo() {
        super.decirTipo();
        console.log("Y también soy un administrador")
    }
}

let admin = new Administrador("antonio");
admin.saludo();
admin.decirTipo();







