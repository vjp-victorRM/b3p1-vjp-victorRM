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
        console.log(
            "------ TRABAJADOR ----------" +
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
        let cont = 0;
        let cadena = "INFORMACION DEL RESTAURANTE"
        for (let trabajador of this.trabajadores) {
            console.log(
            cadena += this.nombre + trabajador
            "\n" + Trabajador.pintarInfo()
            )
            cont++;
        }
        return cadena;


    }

    getPagosSemanales() {
        return Trabajador.getSaldoSemanal();
    }
}

let restaurante = new Restaurante("La tapería");
restaurante.pintarInfo();

restaurante.anadirTrabajador(new Trabajador("Pepe", 40, 10));
restaurante.anadirTrabajador(new Trabajador("Pepe", 35, 15));
restaurante.anadirTrabajador(new Trabajador("Pepe", 20, 10));
restaurante.pintarInfo();

console.log("Mantener a los trabajadores del restaurante cuesta: " + restaurante.getPagosSemanales());