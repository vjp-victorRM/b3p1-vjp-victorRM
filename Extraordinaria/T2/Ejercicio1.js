function comparaCadenas(cad1,cad2){
    if(typeof cad1 !== 'string' || typeof cad2 !== 'string'){
        console.log("Error.Uno de los argumentos no es una cadena")
    }
    if(cad1.length > cad2.length){
        console.log("La cadena " + cad1 + " es de mayor longitud que " + cad2);
    }else if (cad2.length > cad1.length){
        console.log("La cadena " + cad2 + " es de mayor longitud que " + cad1);
    }
}

comparaCadenas("Mi nombre es Jose Antonio","Me llamo  Pedro");
comparaCadenas("Francia segunda","Argentina campeona del mundo");
comparaCadenas("Coche",12);