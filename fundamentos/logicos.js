/*
V and F -> V
V and F -> F
F and ? -> F

V or ? -> V
F or V -> V
F or F -> F

V xor ('ou exclusivo') V -> F
V xor F -> V
F xor V -> V
F xor F -> F

(Negação lógica)!V -> F
!F -> V
*/
function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // O símbolo || é 'ou'.
    const ComprarTv50 = trabalho1 && trabalho2 // && é 'e'.
    // const ComprarTv32 = !!(trabalho1 ^ trabalho2) pode ser feito o 'ou exclusivo' dessa maneira ou da próx.
    const ComprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // Operador unário.

    return {
        comprarSorvete,
        ComprarTv50,
        ComprarTv32,
        manterSaudavel
    }
}

console.log(compras(true, true))
console.log(compras(false, false))
console.log(compras(false, true))
console.log(compras(true, false))