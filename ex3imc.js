/*
Exercício para achar o imc de uma pessoa através de seu peso e altura, e retornar sua situação de acordo com o valor encontrado.
*/

/*
(Antes de aplicá-lo em funções)
const peso = 80;
const altura = 1.75;

const imc = peso / (Math.pow(altura,2));

console.log('O imc eh ', imc,' hein!!!!');

if(imc < 18.5){
    console.log('ABAIXO DO PESO')
}
else if(imc >= 18.5 && imc <= 25){
    console.log('PESO NORMAL')
}
else if(imc > 25 && imc <= 30){
    console.log('ACIMA DO PESO')
}
else if(imc > 30 && imc <= 40){
    console.log('OBESO')
}
else{
    console.log('OBESIDADE GRAVE')
}
*/

function calculaIMC(peso,altura){
    const imc = peso / (Math.pow(altura,2));
    console.log("O imc eh: ", imc.toFixed(2));
    confereIMC(imc);
}

function confereIMC(imc){
    if(imc < 18.5){
        console.log('ABAIXO DO PESO')
    }
    else if(imc >= 18.5 && imc <= 25){
        console.log('PESO NORMAL')
    }
    else if(imc > 25 && imc <= 30){
        console.log('ACIMA DO PESO')
    }
    else if(imc > 30 && imc <= 40){
        console.log('OBESO')
    }
    else{
        console.log('OBESIDADE GRAVE')
    }
}

calculaIMC(80,1.75);