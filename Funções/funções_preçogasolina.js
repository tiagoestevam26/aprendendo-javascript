/*
Exercício para achar o preço final de uma viagem de carro, considerando o preço do combustível o
tipo de combustível, quantos km o carro roda por litro e quantos km de viagem.
*/

function calculaPrecoFinal(tipoCombustivel, kmPorLitro, kmRodados) {
  let precoFinal;
  const precoEtanol = 5;
  const precoGasolina = 6;
  if (tipoCombustivel === "etanol") {
    precoFinal = (kmRodados / kmPorLitro) * precoEtanol;
    console.log("O preco final eh: ", precoFinal);
  } else {
    precoFinal = (kmRodados / kmPorLitro) * precoGasolina;
    console.log("O preco final eh: ", precoFinal);
  }
}
calculaPrecoFinal("etanol", 10, 100);
