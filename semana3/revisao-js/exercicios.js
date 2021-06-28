// EXERCÍCIO 01
function inverteArray(array) {
  let novoArray = [];

  for (let i = array.length - 1; i >= 0; i--) {
    novoArray.push(array[i]);
  }
  console.log(novoArray);
  return novoArray;
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  const paresAoQuadrado = array.filter(item => {
    if (item % 2 === 0)
    return item
  }).map(item => item * item)
  return paresAoQuadrado
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  const pares = array.filter(item => {
    if (item % 2 === 0)
    return item
  })
  return pares
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  const maiorNumero = Math.max(...array)
  return maiorNumero
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2
  const booleano4 = !booleano3

  const a = booleano1 && booleano2 && !booleano4
  const b = (booleano1 && booleano2) || !booleano3
  const c = (booleano2 || booleano3) && (booleano4 || booleano1)
  const d = !(booleano2 && booleano3) || !(booleano1 && booleano3)
  const e = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)

  const respostas = [a, b, c, d, e]

  return respostas
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  let numerosPares = [];
  let par = 0;
  let i = 0;
  while (i < n) {
      numerosPares.push(par);
      par += 2;
      i++;
    }
    return numerosPares;
  }

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  const equilatero = "Equilátero";
  const isoceles = "Isósceles";
  const escoleno = "Escaleno";
  if (a === b && a === c) {
    return equilatero;
  } else if (a === b && a !== c) {
    return isoceles;
  } else {
    return escoleno;
  }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  let bigger;
  let smaller;
  if(num1 > num2){
    bigger = num1;
    smaller = num2;
  }
  if(num2 > num1){
    bigger = num2;
    smaller = num1;
  }

  const majorDivisibleByMinor = bigger % smaller === 0;
  const difference = bigger - smaller;
  console.log(bigger, smaller)
  return {
    maiorNumero: bigger,
    maiorDivisivelporMenor: majorDivisibleByMinor,
    diferenca: difference,
  };
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
