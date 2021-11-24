let valor //Não inicializada.
console.log(valor)
//Undefined pois não foi atribuído nenhum valor a ela.
valor = null
//A variável não tem nenhum valor, nem endereço de memória.
console.log(valor)

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //Evite atribuir undefined.
console.log(!!produto.preco)
console.log(produto)