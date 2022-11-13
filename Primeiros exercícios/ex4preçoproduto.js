/*
Exercício para achar o valor final de uma compra considerando o método de pagamento escolhido.
*/

const valor = 1000;

const avistaDebito = false;
const avistaDinheiroPix = false;
const prazoDuasvezes = false;
const prazoMaior = true;

if (avistaDebito) {
  console.log(valor - (10 * valor) / 100);
} else if (avistaDinheiroPix) {
  console.log(valor - (15 * valor) / 100);
} else if (prazoDuasvezes) {
  console.log(valor);
} else {
  console.log(valor + (10 * valor) / 100);
}
