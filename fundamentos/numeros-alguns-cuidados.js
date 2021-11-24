console.log(7 / 0)
//Console retorna "Infinity".

console.log("10" / 2)
//Como a linguagem tem tipagem fraca, tenta converter o dado em um número.

console.log("Show!" * 2)
//NaN= Not a Number.

console.log(0.1 + 0.7)
//console.log(10.toString())

console.log((10.345).toFixed(2))

console.log('3' + 2)
/*Como é uma string (está entre crases), a função não vai somar, e sim concatenar.
Se fosse utilizado um '-', ele iria subtrair normalmente, pois o símbolo de adição
já está familiarizado com a linguagem de strings, já o símbolo de subtração não.*/