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


let obra_teatro = {
    titulo: " La Celestina ",
    fecha_estreno: " 12 - 12 - 2022 ",
    director: {
        nombre: "Francisco",
        apellidos: "Quevedo",
        nacimiento: 1968,
        obra: ["El Burlon de Sevilla","El Estudiante de Salamanca","Platero y yo"]
    },
    actores: [
       {
            nombre: "Paco",
            edad: 28,
            representaciones:15
        },
        {
            nombre: "Laura",
            edad: 34,
            representaciones:55
        },
        {
            nombre: "Carla",
            edad: 45,
            representaciones:105
        }

    ],

    getActores(){
        return " los actores son " + this.actores[this.nombre,this.edad,this.representaciones];
    },

    getDirector(){
        return this.director.nombre + "-" + this.director.apellidos + " ,nació en " + this.director.nacimiento + " , sus obras destacadas son: " +this.director.obra;
    },

    getInfo(){
        return "El nombre de la obra es " + this.titulo + "se estrena el " + this.fecha_estreno + " ,su director es: " + this.getDirector() + " y los actores son: " + this.getActores();
    }
};

console.log(obra_teatro.getInfo());

