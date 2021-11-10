// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
let data = {
  nome: 'Isabella',
  sobrenome: 'Campos',
  idade: 18,
  sexo: 'feminino',
  graduando: true,
  curso: 'Sistemas de Informação',
};

// Crie um método no objeto anterior, que mostre o seu nome completo
data.nomeCompleto = function() {
  return `${this.nome} + ${this.sobrenome}`;
}

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
};

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

let dog = {
  raca: 'labrador',
  cor: 'preto',
  idade: 10,
  latir(pessoa) {
    if(pessoa === true) {
      return 'latir!';
    } else {
      return 'sem pessoas por perto';
    };
  }
};

