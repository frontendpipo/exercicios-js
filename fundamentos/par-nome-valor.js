// Par nome/valor.

const saudacao = 'Olá' // Contexto léxico I
function exec() {
    const saudacao = 'Fala' // Contexto léxico II
    return saudacao
}


// Objetos são grupos aninhados de pares nome/valor.
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Cambuci',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)