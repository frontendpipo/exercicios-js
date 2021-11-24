// Usando no âmbito de uma função.
function rand({
    min = 0,
    max = 1000
}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
const obj = {
    max: 50,
    min: 40
}
console.log(rand(obj))
console.log(rand({
    min: 955
}))
console.log(rand({}))
// O código acima gerou números aleatórios dentro do máximo e mínimo que descrevemos ao criar a função.

/*
Nesse caso ele acabou criando uma função que sempre que executada retornará um numero aleatório
entre os valores minimo (inclusivo) e maximo (exclusivo).
Math.random() retorna um numero maior ou igual a 0 e menor que 1 (Aleatório).
Mas como o que ele quer é que a função respeite o minimo e o máximo passado, ele aplica a seguinte lógica:
Math.random() * (max - min) + min;

return Math.floor(valor);

Dessa forma se o minimo for 40 e máximo 50 poderiamos ter algo dessa forma:
0.3337072081525685 * (50 - 40) + 40 // 0.3337072081525685 é um valor aleatório retornado pela Math.random()

0.3337072081525685 * (10) + 40
3.337072081525685 + 40 = 43.33707208152568

Já o Math.floor(valor)é utilizado para arendodar o numero para baixo uma vez que ele quer o numero inteiro.

Math.floor(43.33707208152568)= 43


Então na primeira parte Math.random() * (max - min)você obtem um numero aleatório
garantindo que ele não passe do valor definido em max e depois soma + min
para garantir que esse número esteja dentro do mínimo informado.
*/