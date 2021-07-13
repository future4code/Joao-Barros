// 1
// Cria um contador e abaixo um loop de 5 giros que imprime o valor do contador todas as 5 vezes.

// 2 - a
// Cria um array e depois um loop que rodará uma vez para cada item do array com for of.
// Nesse loop há uma condicional para imprimir os números menores que 18.

// b
// Com o for of eu não consigo acessar o index mas se eu definir um contador e colocar o método .entries() eu consigo.

// 3
// Será impresso no console 4 linhas com asteriscos. o número de asterias vai aumentando de 1 em 1 a cada linha.

// _____________Exercícios de escrita de código____________

// 1
const bichinhos = Number(prompt("Digite quantos bichinho você tem:"))
let nomeBichinhos = []
if (bichinhos === 0) {
  console.log("Que pena! Você pode adotar um pet!")
} else {
  for (let i = 0; i < bichinhos; i++) {
    const nome = prompt("Digite o nome deles")
    nomeBichinhos.push(nome)
  }
}
console.log(nomeBichinhos)

// 2
const arrayOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let i = 0

// a
for (let i = 0; i < arrayOriginal.length; i++) {
  console.log(arrayOriginal[i])
}

// b
for (let i = 0; i < arrayOriginal.length; i++) {
  console.log(arrayOriginal[i])
  console.log(10)
}

// c
let novoArray = []
for (let i = 0; i < arrayOriginal.length; i++) {
  if (arrayOriginal[i] % 2 === 0) {
    novoArray.push(arrayOriginal[i])
  }
}
console.log(novoArray)

// d
const arrayDeStrings = []
for (let i = 0; i < arrayOriginal.length; i++) {
  arrayDeStrings.push(`O elemento do índex ${i} é: ${arrayOriginal[i]}.`)
}
console.log(arrayDeStrings)

// e
let maiorNumero = 0
let menorNumero = 2
for (let i = 0; i < arrayOriginal.length; i++) {
  if (arrayOriginal[i] > maiorNumero) {
    maiorNumero = arrayOriginal[i]
  }
  if (arrayOriginal[i] < menorNumero) {
    menorNumero = arrayOriginal[i]
  }
}
console.log(maiorNumero, menorNumero)