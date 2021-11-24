const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()
//Os valores foram impressos normalmente porque 'let' tem também um escopo de bloco, ao contrário de 'var'.