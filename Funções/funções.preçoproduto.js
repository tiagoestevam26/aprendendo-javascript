// avistaDebito = 1, avistaDinheiroPix = 2, prazoDuasvezes = 3, prazoMaior = 4;
function calculaPrecoFinal(tipo, valor) {
  if (tipo === 1) {
    console.log(valor - (10 * valor) / 100);
  } else if (tipo === 2) {
    console.log(valor - (15 * valor) / 100);
  } else if (tipo === 3) {
    console.log(valor);
  } else {
    console.log(valor + (10 * valor) / 100);
  }
}
calculaPrecoFinal(4, 1000);
