/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boas vindas ao jogo de BlackJack!")

if(confirm("Quer iniciar uma nova rodada?")) {

   const cartasUser = [comprarCarta(), comprarCarta()];
   const cartasPc = [comprarCarta(), comprarCarta()];

   console.log(cartasUser, cartasPc)

   const somaUser = cartasUser[0].valor + cartasUser[1].valor;
   const somaPc = cartasPc[0].valor + cartasPc[1];

   console.log(`O usuário somou ${somaUser}.`)
   console.log(`O computador somou ${somaPc}.`)

   if (somaUser > 21) {
      console.log("O computador ganhou dessa vez!")
   }

   if (somaUser < 21) {
      console.log("O usuario ganhou dessa vez!")
   }

   if (somaUser === somaPc) {
      console.log("Deu empate!")
   } else if (somaUser > somaPc) {
      console.log("O usuário ganhou dessa vez!")
   } else if (somaUser < somaPc) {
      console.log("O computador ganhou dessa vez!")
   }

} else {
   console.log("O jogo acabou")
}