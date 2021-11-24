/*
Operador de desestruturação. É uma forma de extrair de dentro de objetos seus atributos
(ou elementos de um array). Novo recurso do ES2015.
*/

const pessoa = {
    nome: 'Ana',
    idade: 6,
    endereco: {
        logradouro: 'Rua Farias',
        numero: 1000
    }
}

const {
    nome,
    idade
} = pessoa
console.log(nome, idade)

const {
    nome: n,
    idade: i
} = pessoa
console.log(n, i)

const {
    sobrenome,
    bem_humorado = true
} = pessoa
console.log(sobrenome, bem_humorado)

const {
    endereco: {
        logradouro: l,
        numero: num,
        cep
    }
} = pessoa
console.log(l, num, cep)
// Cuidado ao desestruturar dados aninhados.