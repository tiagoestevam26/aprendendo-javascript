class pessoa {
  nome;
  peso;
  altura;
  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }
}

function calculaImc(pessoa) {
  let imc;
  imc = pessoa.peso / Math.pow(pessoa.altura, 2);
  console.log("O imc de", pessoa.nome, "eh", imc.toFixed(2));
  return imc;
}

function confereIMC(imc) {
  if (imc < 18.5) {
    console.log("ABAIXO DO PESO");
  } else if (imc >= 18.5 && imc <= 25) {
    console.log("PESO NORMAL");
  } else if (imc > 25 && imc <= 30) {
    console.log("ACIMA DO PESO");
  } else if (imc > 30 && imc <= 40) {
    console.log("OBESO");
  } else {
    console.log("OBESIDADE GRAVE");
  }
}

function main() {
  const jose = new pessoa("José", 70, 1.75);
  confereIMC(calculaImc(jose));
  const marcelin = new pessoa("Marcelo", 75, 2.1);
  confereIMC(calculaImc(marcelin));
  const catia = new pessoa("Catia", 65, 1.55);
  confereIMC(calculaImc(catia));
}

main();
