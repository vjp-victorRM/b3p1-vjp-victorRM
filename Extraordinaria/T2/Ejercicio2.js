function cadenaReves(cadena1,cadena2){
    if(typeof cadena1 !== 'string' || typeof cadena2 !== 'string'){
        console.log("Error.Uno de los argumentos no es una cadena")
    }

    let revescad1= cadena1.split("").reverse().join("");
    let revescad2= cadena2.split("").reverse().join("");
    if(revescad1 === cadena2){
        console.log("La cadena " + cadena1 + " es igual a " + cadena2 + " al revés" )
    } else if (revescad2 === cadena1){
        console.log("La cadena " + cadena2 + " es igual a " + cadena1 + " al revés" )
    }
}

cadenaReves("Pedro","ordeP");
cadenaReves("anitnegrA","Argentina");
