// Neste exemplo iremos criar uma função, definir atributos internos dessa função, e acessar utilizando a notação-ponto.
console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
// A notação ponto é utilizada acima para dar'nome' à constante 'obj1'.
console.log(obj1.nome)

function obj(nome) {
    this.nome = nome
    this.exec = function () {
        console.log('Exec...')
    }
}

const obj2 = new obj('Cadeira')
const obj3 = new obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()
// A notação ponto facilita na hora de criar nomes, deixando o código mais enxuto e simples.