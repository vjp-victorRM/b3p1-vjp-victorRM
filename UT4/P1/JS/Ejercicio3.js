class Ciclomotor {
    constructor(marca, aceleración, desaceleración) {
        this.numRuedas = 2;
        this.velocidadMáxima = 120;
        this.velocidadActual = 0;
        this.marca = marca;
        this.aceleración = aceleración;
        this.desaceleración = desaceleración;
        this.encendida = false;
    }

    arrancar() {
        this.encendida = true;
        console.log("Se mete gira la llave, la moto arranca");
        return this.encendida;
    }

    acelerar() {

        if (this.arrancar()) {
            this.velocidadActual += this.aceleración;

        }


    }

    frenar() {
        do {
            this.velocidadActual = this.velocidadActual - this.desaceleración;
        } while (this.velocidadActual < 0)
    }

    mostrarInfo() {
        console.log(
            "------------" + this.marca + "-----------" +
            "\n" + "Número de ruedas: " + this.numRuedas + "\n" +
            "Velocidad máxima " + this.velocidadMáxima + "\n" +
            "Velocidad actual: " + this.velocidadActual + "\n" +
            "Aceleración: " + this.aceleración + "\n" +
            "Desaceleración: " + this.desaceleración + "\n" +
            "Encendida: " + this.encendida)
    }
}

/*
let ciclomotor = new Ciclomotor("Kamawaki",70,20);
console.log("La moto inicialmente");
ciclomotor.mostrarInfo();
console.log("La moto tras acelerar");
ciclomotor.acelerar();
ciclomotor.mostrarInfo();
console.log("La moto tras arrancarla y acelerar:");
ciclomotor.arrancar();
ciclomotor.acelerar();
ciclomotor.mostrarInfo();
console.log("Volvemos a acelerar");
ciclomotor.acelerar();
ciclomotor.mostrarInfo();
console.log("Frenamos la moto:");
ciclomotor.frenar();
ciclomotor.mostrarInfo();

 */

class Motocross extends Ciclomotor {
    constructor(marca, aceleracion, desaceleración) {
        super(marca, aceleracion, desaceleración);
        this.velocidadMáxima = 90;
        this.marchaActual = 0;
    }

    arrancar() {
        console.log("Se levanta la pata de cabra");
        super.arrancar();

    }
    acelerar() {
        super.acelerar();
        if  (this.velocidadActual = 0) {
            this.marchaActual = 0;
        } else if ((this.velocidadActual > 0) || (this.velocidadActual < 10)) {
            this.marchaActual = 1;
        } else if ((this.velocidadActual > 10) || (this.velocidadActual < 30)) {
            this.marchaActual = 2;
        } else if (this.velocidadActual > 30) {
            this.marchaActual = 3;

        }
    }

    frenar() {
        super.frenar();
        if (this.velocidadActual = 0) {
            this.marchaActual = 0;
        } else if ((this.velocidadActual > 0) || (this.velocidadActual < 10)) {
            this.marchaActual = 1;
        } else if ((this.velocidadActual > 10) || (this.velocidadActual < 30)) {
            this.marchaActual = 2;
        } else if (this.velocidadActual > 30) {
            this.marchaActual = 3;

        }

    }


}

console.log("\n\n Pruebas de la moto de motocros\n\n");

let motoMotoCross = new Motocross("Honda",10,5);
console.log("LA MOTO DE MOTOCROS INICIALMENTE:");
motoMotoCross.mostrarInfo();
console.log("LA MOTO TRAS ACELERAR: ");
motoMotoCross.acelerar();
motoMotoCross.mostrarInfo();

console.log("LA MOTO TRAS ARRANCARLA Y ACELERAR:");
motoMotoCross.arrancar();
motoMotoCross.acelerar();
motoMotoCross.mostrarInfo();

console.log("VOLVEMOS A ACELERAR");
motoMotoCross.acelerar();
motoMotoCross.mostrarInfo();

console.log("FRENAMOS LA MOTO:");
motoMotoCross.acelerar();
motoMotoCross.mostrarInfo();

console.log("FRENAMOS LA MOTO:");
motoMotoCross.frenar();
motoMotoCross.mostrarInfo();




