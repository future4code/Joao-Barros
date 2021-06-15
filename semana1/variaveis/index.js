// 1
// 10
// 10, 5

// 2
// 10, 10, 10

// 3
// tempoTrabalho
// remuneracaoDia

let nome = prompt("Nome")

let idade = prompt("Idade")

console.log(typeof idade, typeof nome)

// 1 - D
// O tipo undefined foi impresso porque eu não atribui valores às variáveis.

// 1 - F
// O tipo mudou para objeto.

console.log(`Olá ${nome}, você tem ${idade} anos.`)

let pergunta1 = prompt("Você está usando uma roupa azul hoje?")

let pergunta2 = prompt("Você está usando casaco hoje?")

let pergunta3 = prompt("Você está usando sapato hoje?")

console.log(`Você está usando uma roupa azul hoje? - ${pergunta1}`)

console.log(`Você está usando casaco hoje? - ${pergunta2}`)

console.log(`Você está usando sapato hoje? - ${pergunta3}`)

// 3

let a = 10
let b = 25

let c = a

a = b
b = c

console.log(a, b)

let numero1 = parseInt(prompt("Digite um número"))
let numero2 = parseInt(prompt("Digite outro número"))

let x = numero1 + numero2
let y = numero1 * numero2

console.log(typeof x, typeof y)

console.log(x, y)