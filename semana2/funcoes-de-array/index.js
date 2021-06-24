// 1
// Três novos arrays com o nome, o apelido e o index de cada objeto dentro do array.

// 2
// Cria um novo array contendo o elemento.nome dos objetos do array antigo.

// 3
// O novoArrayC vai retonar o elemento.apelido de todos os objetos que tiverem esse elemento diferente de 'Chijo'.

// Escrita

// 1 - a
const pets = [
  { nome: "Lupin", raca: "Salsicha"},
  { nome: "Polly", raca: "Lhasa Apso"},
  { nome: "Madame", raca: "Poodle"},
  { nome: "Quentinho", raca: "Salsicha"},
  { nome: "Fluffy", raca: "Poodle"},
  { nome: "Caramelo", raca: "Vira-lata"},
]

const novoArrayA = pets.map((item, index, array) => {
  return item.nome
})

console.log(novoArrayA)

// b
const novoArrayB = pets.filter((item, index, array) => {
  return item.raca === "Salsicha"
})

console.log(novoArrayB)

// c
const novoArrayC = pets.filter((item, index, array) => {
  if (item.raca === "Poodle") {
    console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`)
  }
})

// 2 - a
const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]
// b
const desconto = produtos.map(({ nome, preco }) => {
  const precoFinal = +(preco - preco * 0.05).toFixed([2])

  return {
    nome: nome,
    preco: precoFinal
  }
})
console.log(desconto)

// c
const bebidas = produtos.filter((item) => {
  const arrayBebidas = item.categoria === "Bebidas"

  return arrayBebidas
})
console.log(bebidas)

// d
const ype = produtos.filter((item) => {
  const produtosYpe = item.nome.includes("Ypê")

  return produtosYpe
})
console.log(ype, typeof ype)

// e
const arrayFrases = ype.map(({ nome, preco }) => {
  return `Compre ${nome} por ${preco}`
})
console.log(arrayFrases)

// desafios

// 1 - a
const pokemons = [
  { nome: "Bulbasaur", tipo: "grama" },
  { nome: "Bellsprout", tipo: "grama" },
  { nome: "Charmander", tipo: "fogo" },
  { nome: "Vulpix", tipo: "fogo" },
  { nome: "Squirtle", tipo: "água" },
  { nome: "Psyduck", tipo: "água" },
]

const ordemAlfabetica = pokemons.reduce((acc, {nome}) => {
  const resultado = acc.push(nome)
  return resultado.sort
}, [])
console.log(ordemAlfabetica)