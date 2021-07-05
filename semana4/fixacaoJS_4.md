```js

function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  const numero = arrayDeNumeros.filter((num) => num === numeroEscolhido)
  
  if (numero.length) {
    return `O número ${numeroEscolhido} aparece ${numero.length}x`
  } else {
    return "Número não encontrado"
  }
}

```