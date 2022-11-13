const precoEtanol = 5;
const precoGasolina = 6;
const tipoCombustivel = "gasolina";
const kmPorLitro = 10;
const kmRodados = 100;
let precoFinal;

if (tipoCombustivel === "etanol") {
  precoFinal = (kmRodados / kmPorLitro) * precoEtanol;
} else {
  precoFinal = (kmRodados / kmPorLitro) * precoGasolina;
}
console.log("O preco final eh: ", precoFinal);
