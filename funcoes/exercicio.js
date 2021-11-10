// Crie uma função para verificar se um valor é Truthy
function isTruthy (dado) {
  return !!dado;
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado) {
  return lado * 4;
}

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return nome + ' ' + sobrenome;
}
console.log(nomeCompleto('Isabella', 'Campos'));

// Crie uma função que verifica se um número é par
function isEven(valor) {
  if(valor % 2 == 0) {
    return 'é par'
  } else {
    return 'é ímpar..'
  }
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDado(valor) {
  return typeof valor
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function() {
  console.log('Isabella Campos')
});

// Corrija o erro abaixo
// function precisoVisitar(paisesVisitados) {
//   var totalPaises = 193;
//   return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
// }
// function jaVisitei(paisesVisitados) {
//   return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
// }
// precisoVisitar(20);
// jaVisitei(20);
// poderia apenas jogar a var totalPaises para fora, tornando uma var global tbm...

function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Existem ${totalPaises} países no mundo, já visitei ${paisesVisitados}, faltando apenas ${totalPaises - paisesVisitados}`
}
console.log(precisoVisitar(20));
