//Dado um array de numeros, deve-se imprimir os pares.

function main() {
  let i;
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      console.log(numeros[i]);
    }
  }
}

main();
