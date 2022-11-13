class carro {
  marca;
  cor;
  gastoMedio;
  constructor(marca, cor, gastoMedio) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedio = gastoMedio;
  }
}

function calculaPrecoFinal(carro) {
  let precoFinal;
  const kmRodados = 100;
  const precoGasolina = 6;
  precoFinal = kmRodados * carro.gastoMedio * precoGasolina;
  console.log(
    "O preco final do carro",
    carro.cor,
    "e da marca",
    carro.marca,
    "é: ",
    precoFinal
  );
}

function main() {
  const carro1 = new carro("Fiat", "vermelho", 1);
  calculaPrecoFinal(carro1);
  const carro2 = new carro("Ferrari", "preta", 5);
  calculaPrecoFinal(carro2);
}

main();
