// _________Exercícios de interpretação de código_________

// 1
// a - 10 e 50
// b - O computador executaria as funcoes mas nada apareceria no console.
// As respostas ficariam salvas em uma memoria temporaria,
// porque elas nao estao sendo atribuidas a nenhuma variavel.

// 2
// a - Essa funcao recebe o texto do user, verifica se tem "cenoura" e coloca essa em caixa baixa.
// b
// 1 - eu gosto de cenoura
// 2 - cenoura é bom pra vista
// 3 - cenouras crescem na terra

//__________Exercícios de escrita de código_____________

// 1
// a
function escreveFrase() {
  console.log("Eu sou João, tenho 28 anos, moro em São Paulo e sou estudante.")
}
escreveFrase();

// b
const nome = prompt("Nome:")
const idade = Number(prompt("Idade:"))
const cidade = prompt("Cidade:")
const profissao = prompt("Profissao")
  
function cadastro(nome, idade, cidade, profissao) {
  return (
    `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`
  )
}
console.log(cadastro(nome, idade, cidade, profissao));

// 2
// a
function somar(num1, num2) {
  const resultado = num1 + num2
  return console.log(resultado)
}
somar(58, 87);

// b
function verificar(num3, num4) {
  const maiorIgual = num3 >= num4
  return console.log(maiorIgual)
}
verificar(45, 59);

// c
function par(number) {
  const parOuNao = number % 2 === 0
  return console.log(parOuNao)
}
par(5);

// d
function mensagem(text) {
  const tamanho = text.length
  const minusculas = text.toLowerCase()
  return console.log(tamanho, minusculas)
}
mensagem("EU SOU O JOHNNATAN DA NOVA GERACAO");

// 3
const num1 = Number(prompt("Digite um numero:"))
const num2 = Number(prompt("Digite outro numero:"))
console.log("Numeros inseridos:", num1, "e", num2)

function soma(num1, num2) {
  const resultadoSoma = num1 + num2
  return "Soma:", resultadoSoma
}
soma(num1, num2);

function subtracao(num1, num2) {
  const resultadoSubtracao = num1 - num2
  return "Diferenca:", resultadoSubtracao
}
subtracao(num1, num2);

function multiplicacao(num1, num2) {
  const resultadoMultiplicacao = num1 * num2
  return "Multiplicacao:", resultadoMultiplicacao
}
multiplicacao(num1, num2);

function divisao(num1, num2) {
  const resultadoDivisao = num1 / num2
  return "Divisao:", resultadoDivisao
}
divisao(num1, num2);

//_______________________DESAFIOS_________________________

// 1
// a
const funcaoImprime = (parametro) => {
  return console.log(parametro)
}
funcaoImprime("sei la o que escrever");

// b
const doisValores = (valor1, valor2) => {
  const somaValores = valor1 + valor2;
  funcaoImprime(somaValores);
}
doisValores(50, 80);

// 2
const pitagoras = (cateto1, cateto2) => {
  const quadradoCateto1 = cateto1 * cateto1;
  const quadradoCateto2 = cateto2 * cateto2;
  const somaQuadradoCatetos = quadradoCateto1 + quadradoCateto2;
  const hipotenusa = Math.sqrt(somaQuadradoCatetos);
  return(
    hipotenusa
  )
}
console.log(pitagoras(4, 5));