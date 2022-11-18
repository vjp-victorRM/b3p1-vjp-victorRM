let cont = -1;

class Trabajador {
    constructor(nombre, numHorasSemanales, salarioPorHora) {
        this.nombre = nombre;
        this.numHorasSemanales = numHorasSemanales;
        this.salarioPorHora = salarioPorHora;
    }

    getSaldoSemanal() {
        let saldo = this.numHorasSemanales * this.salarioPorHora;
        return saldo;

    }

    pintarInfo() {
        cont++;
        console.log(
            "Trabajador " + cont + ":" +
            "\n" + "El nombre del trabajador es: " + this.nombre +
            "\n" + "El numero de horas semanales: " + this.numHorasSemanales +
            "\n" + "El precio/hora: " + this.salarioPorHora
        )


    }
}

class Restaurante {
    constructor(nombre, trabajadores) {
        this.nombre = nombre;
        this.trabajadores = [];
    }

    anadirTrabajador(Trabajador) {

        this.trabajadores.push(Trabajador);
    }

    pintarInfo() {

        let cadena = "INFORMACIÓN DEL RESTAURANTE " + this.nombre;
        console.log(cadena);
        for (let trabajador of this.trabajadores) {
            console.log(
                trabajador.pintarInfo()
            )

        }


    }

    getPagosSemanales() {
        let total = 0;
        for (let trabajador of this.trabajadores) {
            total = total + trabajador.getSaldoSemanal();
        }
        return total;
    }
}

let restaurante = new Restaurante("La tapería");
restaurante.pintarInfo();

restaurante.anadirTrabajador(new Trabajador("Pepe", 40, 10));
restaurante.anadirTrabajador(new Trabajador("Laura", 35, 15));
restaurante.anadirTrabajador(new Trabajador("Marcos", 20, 10));
restaurante.pintarInfo();

console.log("Mantener a los trabajadores del restaurante cuesta: " + restaurante.getPagosSemanales());