// 1
// a - false
// b - false
// c - true
// d - boolean

// 2
// O problema é que o prompt retorna strings.

// 3
// Ele terá que envolver os prompt dentro dos parenteses de um Number.
// Dessa forma ele ja converte as respostas para tipo number e depois soma.


// 1
const idade = Number(prompt("Digite sua idade:"))

const idadeAmigo = Number(prompt("Digite sua idade:"))

const compara = idade > idadeAmigo

console.log("Sua idade é maior do que a do seu melhor amigo? -", compara)

const diferenca = idade - idadeAmigo

console.log(diferenca)

// 2
const numeroPar = Number(prompt("Digite um numero par:"))

console.log(numeroPar % 2)

// O padrão é zero porque todo número par dividido por dois tem resto zero.

// Se o usuário digitar um número ímpar o resto da divisão desse número será impresso no console.

3
const idadeAnos = Number(prompt("Digite sua idade em anos:"))

console.log(idadeAnos * 12)
console.log(idadeAnos * 365)
console.log(idadeAnos * 8760)

// 4
const primeiroNumero = Number(prompt("Digite um numero:"))

const segundoNumero = Number(prompt("Digite outro numero:"))

const maior = primeiroNumero > segundoNumero
console.log("O primeiro numero é maior que segundo? - ",maior)

const igual = primeiroNumero === segundoNumero
console.log("O primeiro numero é igual ao segundo? - ",igual)

const divisivel = primeiroNumero % segundoNumero === 0
console.log("O primeiro numero é divisível pelo segundo? - ",divisivel)

const divisivel2 = segundoNumero % primeiroNumero === 0
console.log("O segundo numero é divisível pelo primeiro? - ",divisivel2)