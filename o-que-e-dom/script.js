// Retorne o url da página atual utilizando o objeto window
const hrefPagina = window.location.href;
console.log(hrefPagina);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const elementoAtivo = document.getElementsByClassName('ativo');
// Retorne a linguagem do navegador
const linguagemNav = window.navigator.language;
console.log(linguagemNav);

// Retorne a largura da janela
const larguraJanela = window.innerWidth;
console.log(larguraJanela);