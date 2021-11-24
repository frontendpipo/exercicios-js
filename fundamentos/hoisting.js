// Entendendo o hoisting.
console.log('a =', a)
var a = 2
console.log('a =', a)
/*
O hoisting é o 'içamento' da variável 'var' acima do código,
de modo que a variável já está declarada mesmo não estando definida.
*/
console.log('b =', b)
let b = 2
console.log('b =', b)
// O mesmo não acontece com 'let'