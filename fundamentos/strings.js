const escola = "Cod3r"

console.log(escola.charAt(4))

//Serve para mostrar que letra está no quarto 'índice' da sua string. Começa do zero.

console.log(escola.charAt(5))

//Não vai retornar nada, pois não tem cinco índices na string "Cod3r".

console.log(escola.charCodeAt(3))

//Valor do índice 3 na tabela ASC/Unicode.

console.log(escola.indexOf('3'))

console.log(escola.substring(0, 3))

//Ele vai imprimir todas as índices da string até as índices que destacamos.

console.log('Escola '.concat(escola).concat("!"))

/*'Concatenar' é adicionar informações à string e imprimi-las.
 Nesse caso, foi adicionada a palavra 'Escola' e depois o ponto de exclamação "!".
 Não faz diferença se usa crase ou aspas.*/

console.log(escola.replace(3, 'e'))

//Substituir o número 3 pela letra 'e'.

console.log('Ana, Maria, Pedro'.split(','))

//Gerou um 'array' com três elementos agrupados.