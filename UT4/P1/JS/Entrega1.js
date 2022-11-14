let disco = {
    titulo: "American  Idiot",
    autor: "Green Day",
    año_publicacion: 2004,
    ventas: 20000000,

    getInfo() {
        return "El tiutlo es " + this.titulo + ",su autor es " + this.autor + ",se publicó en el año " + this.año_publicacion + " y vendió " + this.ventas + " copias" ;

    }
};

console.log(disco.getInfo());

let calle = {
    nombre:"Calle Cervantes",
    longitud: 2,
    establecimientos: [
        {
           nombre: "Bar Pedro"
        },
        {
            nombre: "Panadería Carlos"
        },
        {
            nombre: "Librería Andrea"
        }
    ],
    getInfo() {
        return "El nombre de la calle es " +this.nombre + " , mide " +this.longitud + " kilómetros";
    }
};

console.log(calle.getInfo());
console.log(calle.establecimientos[1].nombre);

let coche = {
    modelo: "Arkane",
    dueño: {
        nombre: "Arcadio",
        edad: "53"
    },
    marca:{
        nombre:"Renault",
        año:2017
    },
    getInfoDueño(){
        return "su nombre es " + this.dueño.nombre + " y su edad es," +  this.dueño.edad;
    },
    getInfoMarca(){
        return " ,su marca es " +this.marca.nombre + "y su año de creacion " + this.marca.año;
    },
    getInfo(){
        return "El modelo del coche es " + this.modelo + " su dueño es " +this.getInfoDueño() + "su marca es " +this.getInfoMarca();
    }
}

console.log(coche.getInfo());

