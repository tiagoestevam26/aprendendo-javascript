function escreveNome(nome) {
  return('O ' + nome);
}


function verMaioridade(idade) {
  if (idade >= 18) {
    console.log(escreveNome('Tiago'),"é maior de idade!!");
  } else {
    console.log(escreveNome('Tiago'),"é menor de idade!!");
  }
}

verMaioridade(11);
