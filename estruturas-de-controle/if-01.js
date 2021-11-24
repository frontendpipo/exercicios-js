function BoaNoticia(nota) {
    if (nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

BoaNoticia(8.1)
BoaNoticia(6.1)

function Verdade(valor) {
    if (valor) {
        console.log('É verdade... ' + valor)
    }
}

Verdade()
Verdade(null)
Verdade(undefined)
Verdade(NaN)
Verdade('')
Verdade(0)
Verdade(-1)
Verdade(' ')