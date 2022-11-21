
const numeros = [10,233,32,323,44,3,5,50,10,98,23];
let i=0;

function gets(){
    let valor = numeros[i];
    i++;
    return valor;
}

function print(texto){
    console.log(texto);
}

module.exports = {gets,print};