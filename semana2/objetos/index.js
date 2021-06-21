// 1
// Matheus Nachtergaele
// Virginia Cavendish
// {canal: "Globo", horario: "14h"}

// 2 - a
// {nome: "Juca", idade: 3, raca: "SRD"}
// {nome: "Juba", idade: 3, raca: "SRD"}
// {nome: "Jubo", idade: 3, raca: "SRD"}

// b
// Faz uma copia do antigo objeto e mantem os dados originais.

// 3 - a
// false
// undefined

// b
// O valor undefined no console se deve ao fato de nao temos passado nenhum valor a propriedade "altura".

const pessoa = {
  nome: "Amanda", 
  apelidos: ["Amandinha", "Mandinha", "Mandi"]
}
const imprime = (pessoa) => {
  console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)
}
imprime(pessoa)

const novaPessoa = {
  ...pessoa,
  apelidos: ["joao", "joaozinho", "johnny"]
}
imprime(novaPessoa)

// 2
const objeto1 = {
  nome: "joao",
  idade: 28,
  profissao: "desenvolvedor"
}
const objeto2 = {
  nome: "diogo",
  idade: 34,
  profissao: "agente"
}
const retornaArray = () => {
  const novoObjeto1 = {...objeto1}
  const novoObjeto2 = {...objeto2}
  const array = [
    novoObjeto1.nome, 
    novoObjeto2.nome, 
    novoObjeto1.nome.length, 
    novoObjeto2.nome.length,
    novoObjeto1.idade,
    novoObjeto2.idade,
    novoObjeto1.profissao,
    novoObjeto2.profissao,
    novoObjeto1.profissao.length,
    novoObjeto2.profissao.length
  ]
    return array
}
console.log(retornaArray())

// 3 - a
const carrinho = []

// b
const fruta1 = {
  nome: "uva",
  disponibilidade: true,
}
const fruta2 = {
  nome: "banana",
  disponibilidade: true,
}
const fruta3 = {
  nome: "pera",
  disponibilidade: true,
}

// c
const adicionaNoCarrinho = (fruta1, fruta2, fruta3) => {
  carrinho.push(fruta1, fruta2, fruta3)
}
adicionaNoCarrinho(fruta1, fruta2, fruta3)

// d
console.log(carrinho)

// desafios

// 1
const criaPessoa = () => {

  const nome = prompt("Nome")
  const idade = prompt("Idade")
  const profissao = prompt("Profissao")

  const pessoa = {
    nome: nome,
    idade: idade,
    profissao: profissao
  }
  console.log(pessoa)
  console.log(typeof pessoa)


}
// criaPessoa()

// 2
const recebeFilmes = () => {

  const lancamento1 = Number(prompt("Ano de lancamento"))
  const nome1 = Number(prompt("Nome do filme"))

  const lancamento2 = Number(prompt("Ano de lancamento do segundo filme"))
  const nome2 = Number(prompt("Nome do outro filme"))

  const verificacao = lancamento1 > lancamento2
  const mesmoAno = lancamento1 = lancamento2

  console.log("O primeiro filme foi lançado antes do segundo?", verificacao)
  console.log("O primeiro filme foi lançado no mesmo ano do segundo?", mesmoAno)
}

// 3
const checaDisponibilidade = (object) => {

  const disponibilidade = {...object, disponibilidade: false}

  return disponibilidade
}
console.log(checaDisponibilidade(fruta1))