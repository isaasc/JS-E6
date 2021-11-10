let pessoa = {
  nome: 'Isabella',
  idade: 18
};

let quadrado = {
  lados: 4,
  area: function(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  }
};

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

let menu = {
  width: 900,
  height: 50,
  backgroundColor: '#834'
};

menu.color = 'blue';

menu.esconder = function() {
  console.log('Escondi he');
};

menu.hasOwnProperty('color');
