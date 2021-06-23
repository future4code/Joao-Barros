// 1 - a
// O codigo verifica se o numero eh par.

// b
// Para os numeros pares.

// c
// impares

// 2 - a
// verificar qual eh a fruta e passar o preco.

// b
// O preço da fruta maca é R$ 2.25.

// c
// imprimiria o preco errado de 5 porque continuaria ate o default, esquecendo o preco de cima.

// 3 - a
// recebendo um numero do user.

// b
// se fosse 10 ele imprimiria a primeira messagem. se fosse -10 nao imprimiria nada.

// c
// havera um erro nos dois casos, porque a variavel "mensagem" esta declarada dentro de um escopo filho e sendo acessada fora dele no escopo pai que nao tem acesso ao filho.

// _____________________Exercícios de escrita de código___________________

// 1
const podeDirigir = () => {
  const idade = Number(prompt("Idade"));

  if (idade > 18) {
    console.log("Pode dirigir.");
  } else {
    console.log("Nao pode dirigir");
  }
};
podeDirigir();

// 2
const turno = () => {
  const periodo = prompt(
    "digitar M (matutino) ou V (Vespertino) ou N (Noturno)"
  ).toLowerCase();

  if (periodo === "m") {
    return console.log("Bom Dia!");
  } else if (periodo === "v") {
    return console.log("Boa Tarde!");
  } else {
    return console.log("Boa Noite!");
  }
};
turno();

// 3
const turnoComCase = () => {
  const periodo = prompt(
    "digitar M (matutino) ou V (Vespertino) ou N (Noturno)"
  ).toLowerCase();

  switch (periodo) {
    case "m":
      console.log("Bom Dia!");
      break;
    case "v":
      console.log("Boa Tarde!");
      break;
    case "n":
      console.log("Boa Noite!");
    default:
      console.log("sei la entao");
  }
};
turnoComCase();

// 4
const filme = prompt("qual o gênero de filme que vão assistir").toLowerCase();
const preco = Number(prompt("preco do ingresso"));

const resposta = (filme, preco) => {
  if (filme === "fantasia" && preco <= 15) {
    const lanche = prompt(
      "qual lanche vai querer? pipoca, chocolate, doces, etc"
    );
    console.log("Bom filme!");
    console.log("Aproveite o seu", lanche);
  } else {
    console.log("Escolha outro filme :(");
  }
};
resposta(filme, preco);

// Desafio 2
const sistemaDeVendas = () => {
  const nome = prompt("nome completo");
  const tipoDeJogo = prompt(
    "Tipo de jogo: IN indica internacional; e DO indica doméstico;"
  ).toLowerCase();
  const etapaDeJogo = prompt(
    "Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final"
  ).toLowerCase();
  const categoria = Number(
    prompt("Categoria: pode ser as opções 1, 2, 3 ou 4.")
  );
  const quantidade = Number(prompt("Quantidade de ingressos"));

  let precoUnitario

  switch (etapaDeJogo) {
    case "sf":
      switch (categoria) {
        case 1: precoUnitario = 1320
          break;
        case 2: precoUnitario = 880
          break;
        case 3: precoUnitario = 550
          break;
        case 4: precoUnitario = 220
          break;
        default:
          break;
      }
      break;
    case "dt":
      switch (categoria) {
        case 1: precoUnitario = 660
          break;
        case 2: precoUnitario = 440
          break;
        case 3: precoUnitario = 330
          break;
        case 4: precoUnitario = 170
          break;
        default:
          break;
      }
      break;
    case "fi":
      switch (categoria) {
        case 1: precoUnitario = 1980
          break;
        case 2: precoUnitario = 1320
          break;
        case 3: precoUnitario = 880
          break;
        case 4: precoUnitario = 330
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }

  if (tipoDeJogo === 'in') {
    precoUnitario = precoUnitario * 4.1
  }

  let valorTotal = precoUnitario * quantidade

  let textoTipo;
  if (tipoDeJogo === 'do') {
    textoTipo = 'Domestico';
  } else if (tipoDeJogo === 'in') {
    textoTipo = 'Internacional'
  }

  let TextoEtapa;
  if (etapaDeJogo === 'sf') {
    textoEtapa = 'Semi-final';
  } else if (etapaDeJogo === 'dt') {
    textoEtapa = 'Decisao terceiro e quarto'
  } else {
    textoEtapa = 'Final'
  }

  console.log("---Dados da compra---")
  console.log("Nome do cliente:", nome)
  console.log("Tipo do jogo:", textoTipo)
  console.log("Etapa do jogo:", textoEtapa)
  console.log("Categoria:", categoria)
  console.log("Quantidade de Ingressos:", quantidade)
  console.log("---Valores---")
  console.log("Valor do ingresso:", precoUnitario.toFixed([2]))
  console.log("Valor total:", valorTotal.toFixed([2]))
};
sistemaDeVendas()
