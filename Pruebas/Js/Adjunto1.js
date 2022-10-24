
function contarNumero(){
    const dni = [7,6,1,3,1,4,0,0,"A"].sort();

    console.log(dni);

    let unicosElementos = [];
    let repetidos = [];
    let contador = 1;

    for (let i = 0; i < dni.length; i++){
        if(dni[i] === dni[i + 1]){
            contador++;
        }else{
            unicosElementos.push(dni[i]);
            repetidos.push(contador);
            contador= 1;
        }
    }

    for(let j = 0; j < unicosElementos.length; j++){
        console.log("Total de numeros " +unicosElementos[j]+ ":"+repetidos[j]);
    }

}

contarNumero();

function dniResumen(){
    let arr = [7,6,1,3,1,4,0,0,"A"];

    arr.splice(2, 2);
    console.log(arr);

    console.log(arr.unshift("_"));
    console.log(arr);

    console.log(arr.push("*"))
    console.log(arr);

    console.log(arr.splice(2,0,1,"--"));
    console.log(arr);
}

 dniResumen();



function sumaNumeros(){
    let arr = [7,6,1,3,1,4,0,0,"A"];
    const valorInicial = 0;
    const sumarInicial = arr.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        valorInicial);
    console.log(sumarInicial);
}

sumaNumeros();



