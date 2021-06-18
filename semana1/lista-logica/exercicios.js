// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt("Altura"))
  const largura = Number(prompt("Largura"))
  const area = altura * largura

  return console.log(area)
}


// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Ano atual"))
  const anoDeNascimento = Number(prompt("Ano de nascimento"))
  const idade = anoAtual - anoDeNascimento

  return console.log(idade)
}
// imprimeIdade()

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = peso / (altura * altura)

  return imc
}
console.log(calculaIMC(85, 1.8))
console.log(calculaIMC(70, 1.65))

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Nome")
  const idade = Number(prompt("Idade"))
  const email = prompt("Email")

  return console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}
// imprimeInformacoesUsuario()

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Cor 1")
  const cor2 = prompt("Cor 2")
  const cor3 = prompt("Cor 3")

  const arrayDeCores = [cor1, cor2, cor3]

  return console.log(arrayDeCores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
}
console.log(retornaStringEmMaiuscula("oi"))
console.log(retornaStringEmMaiuscula("bAnAnA"))

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const pago = custo / valorIngresso
  console.log(pago)
  return pago
}
calculaIngressosEspetaculo(3000, 100)
calculaIngressosEspetaculo(5500, 50)

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const mesmoTamanho = string1.length === string2.length

  return mesmoTamanho
}
checaStringsMesmoTamanho("ola", "abc")
checaStringsMesmoTamanho("teste", "porta")
checaStringsMesmoTamanho("abc", "abcd")

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  console.log(array[0])

  return array[0]
}
retornaPrimeiroElemento([1, 2, 3])
retornaPrimeiroElemento(["Laranja", "Banana", "Maçã"])

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  console.log(array[array.length -1])

  return array[array.length -1]
}
retornaUltimoElemento([1, 2, 3, 4, 5])
retornaUltimoElemento(["Laranja", "Banana", "Maçã"])

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const primeiroElemento = array.shift()
  const ultimoElemento = array.pop()
  array.unshift(ultimoElemento)
  array.push(primeiroElemento)

  console.log(array)

  return array
}
trocaPrimeiroEUltimo([1, 2, 3, 4, 5])
trocaPrimeiroEUltimo(["Laranja", "Banana", "Maçã"])

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toLowerCase().includes(string2.toLowerCase())
}
checaIgualdadeDesconsiderandoCase("Ola", "olA")
checaIgualdadeDesconsiderandoCase("bananinha", "BANANINHA")
checaIgualdadeDesconsiderandoCase("banana", "BANANINHA")

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Ano atual"))
  const anoDeNascimento = Number(prompt("Ano de nascimento"))
  const anoEmissaoRg = Number(prompt("Ano de emissao do RG"))
  const idade = anoAtual - anoDeNascimento
  const anoCarteira = anoAtual - anoEmissaoRg
  const menosDeVinte = idade <= 20 && anoCarteira >= 5
  const vinteCinquenta = idade > 20 && idade <= 50 && anoCarteira >= 10
  const maisDeCinquenta = idade > 50 && anoCarteira >= 15

  console.log(menosDeVinte || vinteCinquenta || maisDeCinquenta)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const bissexto = ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0

  return bissexto
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const maiorDeIdade = prompt("Você tem mais de 18 anos?") == "sim"
  const ensinoMedio = prompt("Você possui ensino médio completo?") == "sim"
  const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?") == "sim"

  console.log(maiorDeIdade && ensinoMedio && disponibilidade)
}