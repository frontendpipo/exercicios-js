const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
/*
O operador ternário foi utilizado acima na parte
"nota >=7 ? 'Aprovado' : 'Reprovado'",
de modo que a função arrow retornou o resultado no console sem utilizar 'return'.
É composto por três partes:
 A primeira parte com uma expressão que irá retornar true ou false.
 Ponto de interrogação, if true.
 Dois pontos, o else.
*/
console.log(resultado(7.1))
console.log(resultado(6.7))