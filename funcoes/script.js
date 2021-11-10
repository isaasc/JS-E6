function terceiraIdade(idade) {
  if (typeof idade !== 'number') {
    return 'Passe uma idade'
  } else if (idade >= 60) {
    return 'É idoso'
  } else {
    return 'É novinho'
  }
}

function faltaVisitar(visitados) {
  var totalPaises = 193
  return `Falta visitar ${totalPaises - visitados} paises`
}
