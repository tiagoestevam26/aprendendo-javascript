/*
Exercício para achar o valor final de uma compra considerando o método de pagamento escolhido.
*/

/*
(Antes de aplicá-lo em funções)
const valor = 1000;

const avistaDebito = false;
const avistaDinheiroPix = false;
const prazoDuasvezes = false;
const prazoMaior = true;

if (avistaDebito) {
    console.log(valor - ((10 * valor) / 100));
}
else if (avistaDinheiroPix) {
    console.log(valor - ((15 * valor) / 100));
}
else if (prazoDuasvezes) {
    console.log(valor);
}
else {
    console.log(valor + ((10 * valor) / 100));
}
*/



// avistaDebito = 1, avistaDinheiroPix = 2, prazoDuasvezes = 3, prazoMaior = 4;
function calculaPrecoFinal(tipo, valor){
    if (tipo === 1) {
        console.log(valor - ((10 * valor) / 100));
    }
    else if (tipo === 2) {
        console.log(valor - ((15 * valor) / 100));
    }
    else if (tipo === 3) {
        console.log(valor);
    }
    else {
        console.log(valor + ((10 * valor) / 100));
    }
}
calculaPrecoFinal(4,1000);