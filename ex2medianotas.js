/*
Exercício para calcular a média de 3 notas escolares e retornar se a pessoa foi reprovada,
está de recuperação ou foi aprovada.
*/


const primeiraNota = 6;
const segundaNota = 6;
const terceiraNota = 6;

const media = (primeiraNota + segundaNota + terceiraNota) / 3;

console.log('A media eh ', media, ' hein!!!!');

if (media < 5) {
    console.log('REPROVADO!!!')
}
else if (media >= 5 && media <= 7) {
    console.log('RECUPERACAO!!!!')
}
else {
    console.log('APROVADO!!!!!!!')
}