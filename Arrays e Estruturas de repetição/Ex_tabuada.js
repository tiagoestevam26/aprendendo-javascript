//Dado um número, deve-se imprimir a sua respectiva tabuada.

function imprimeTabuada(numero) {
  let i;
  console.log("A tabuada do", numero, "é: ");
  for (i = 1; i <= 10; i++) {
    console.log(numero * i);
  }
}

function main() {
  const numero = 6;
  imprimeTabuada(numero);
}

main();
