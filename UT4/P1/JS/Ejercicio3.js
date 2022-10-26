class Ciclomotor{
    constructor(marca,aceleración,desaceleración) {
        this.numRuedas = 2;
        this.velocidadMáxima = 120;
        this.velocidadActual = 0;
        this.marca = marca;
        this.aceleración = aceleración;
        this.desaceleración = desaceleración;
        this.encendida = false;
    }

    arrancar(){
        this.encendida = true;
        console.log("Se mete gira la llave, la moto arranca");
    }

    acelerar(){

            if (this.arrancar()) {
                this.velocidadActual = this.velocidadActual + this.aceleración;
            }

    }

    frenar(){
        do {
            this.velocidadActual = this.velocidadActual - this.desaceleración;
        }while(this.velocidadActual > 0)
    }

    mostrarInfo(){
            console.log(
                "------------" +this.marca+"-----------"+
         "Número de ruedas: " +this.numRuedas +
        "Velocidad máxima" + this.velocidadMáxima +
        "Velocidad actual" + this.velocidadActual+
        "Aceleración" + this.aceleración +
       "Desaceleración"+ this.desaceleración +
        "Encendida" +  this.encendida)
    }
}

let ciclomotor = new Ciclomotor("2",120,0,"Kawasaki",70,20 ,false);
ciclomotor.mostrarInfo();
ciclomotor.acelerar();
ciclomotor.mostrarInfo();