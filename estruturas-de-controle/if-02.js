function teste1(num) {
    if (num > 7)
        console.log(num)

    console.log('Final')
}

teste1(6)
teste1(8)

// O console.log('Final') foi executada em ambos os números pois está fora do bloco "if".

function teste2(num) {
    if (num > 7); {
        console.log(num)
    }
}

teste2(6)
teste2(8)

/*
O console.log(num) foi executado nos dois números pois, por conta do ponto e vírgula,
a sentença de código 'if' está vazia. Cuidado com ';', não usar com bloco if/estruturas de controle.
*/