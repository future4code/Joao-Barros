```js

function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 const fixo = 2000;
 const bonus = qtdeCarrosVendidos * 100
 const comissao = valorTotalVendas * 0.05;
 const salarioFinal = fixo + comissao + bonus;
 
 return salarioFinal

}

```