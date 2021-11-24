// Situação de erro e mecanismo de tratamento de erro.
function tratarErroELancar(erro) {
    //throw new Error('...')
    throw 10
}
// O bloco throw é o que será lançado no console.
function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    }
// O bloco 'try' é onde o erro deve ser inserido.
    catch(e) {
        tratarErroELancar(e)
    }
// O bloco catch joga o erro para ser lançado na função dentro de 'throw'.
    finally {
        console.log('final')
    }
// O bloco 'finally' será lançado no console também, dando erro ou não.
    
}
/*
O método try/catch/throw é utilizado no caso de erros para 'limpar' a área onde é mostrado o erro
e deixá-la mais acessível ao usuário.
*/
const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj)