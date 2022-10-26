/*
var obj = new Object();
obj.nombre = "Pedro";
obj["edad"] = 41;
obj.getInfo = function () {
    return "Mi nombre es " + this.nombre + " y tengo " + this.edad
};

console.log(obj.getInfo());
console.log(obj.nombre);
console.log(obj["nombre"]);

var prop = "nombre";
console.log(obj[prop]);

var obj2 = {
    nombre: "Paco",
    edad: 32,
    getInfo(){
        return "Mi nombre es " + this.nombre + "y tengo" + this.edad
    }
};

console.log(obj2.getInfo());
console.log(obj2.nombre);
console.log(obj2["nombre"]);

var prop2 = "nombre";
console.log(obj2[prop2]);

 */

var persona = {
    nombre: "Marta",
    "edad": 23,
    trabajos:[
        {
            descripcion: "Payaso del circo",
            duracion: "2003 - 2005"
        },
        {
            descripcion: "Sexador de pollos",
            duracion: "2005 - 2019"
        }
    ],
    getInfo () {
        return "Mi nombre es " + this.nombre + " y tengo " + this.edad
    }
};

console.log(persona.getInfo());
console.log(persona.trabajos[i].descripcion);
