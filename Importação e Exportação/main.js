
const { gets, print } = require('./FunçõesAuxiliares');


let i, j, aux = 0;
let quant = gets();

for(i=0; i<quant; i++){
    j = gets();
    console.log(j);
    if(j>aux){
        aux = j;
    } 
}

console.log("A maior nota eh:", aux);