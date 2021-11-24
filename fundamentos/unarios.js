let num1 = 1
let num2 = 2

num1++ // Forma pós fixada (acrescenta um ao operando.)
console.log(num1)
    --num1 // Forma pré fixada
console.log(num1)

console.log(++num1 == num2--) // O resultado deu 'true' pois a forma pré fixada é lida antes da comparação.
console.log(num1 == num2)