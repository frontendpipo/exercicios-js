//Como criar objetos em JavaScript de forma literal.
const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preço = 4998.90
//'nome' e 'preço' são propriedades criadas por mim como identificadores.
prod1['Desconto Legal'] = 0.40 //Evitar atributos com espaço.
console.log(prod1)
// 
const prod2 = {
    nome: 'Camisa Polo',
    preço: 79.90
}

console.log(prod2)
//JSON é um formato textual de objeto. Objeto é atributos, comportamento etc.