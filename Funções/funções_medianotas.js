function confereMedia(media) {
  if (media < 5) {
    console.log("REPROVADO!!!");
  } else if (media >= 5 && media <= 7) {
    console.log("RECUPERACAO!!!!");
  } else {
    console.log("APROVADO!!!!!!!");
  }
}

function calculaMedia(nota1, nota2, nota3) {
  const media = (nota1 + nota2 + nota3) / 3;
  console.log("A media eh: ", media);
  confereMedia(media);
}

calculaMedia(6, 6, 6);
