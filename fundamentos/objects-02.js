console.log(typeof Object)
console.log(typeof new Object())

const cliente = function () {}
console.log(typeof cliente)
console.log(typeof new cliente)

class Produto {}
console.log(typeof Produto)
console.log(typeof new Produto())

/*
O que significa instanciar uma função?

Imagina que vc tem no seu sistema Funcionário e todos funcionários tem um nome, um cargo e um salário.
A estrutura dizendo que o Funcionário tem esses atributos pode ser a função
e quando vc usa o new com uma função vc cria um objeto e esse processo é chamado instanciação.

Cada objeto criado respeita a estrutura dada pela função, mas os valores dos atributos são diferentes
para cada objeto criado (ou instanciado).
Então respeitando a estrutura de que todo Funcionário tem 3 atributos (nome, cargo e salário),
os objetos teriam seus próprios valores, por exemplo:

    // A função define a estrutura do objeto gerado com o new
    function Funcionario(nome, cargo, salario) {
        this.nome = nome
        this.cargo = cargo
        this.salario = salario
    }
     
    const funcionario1 = new Funcionario('Ana Silva' , 'Analista de TI', 8400)
    const funcionario2 = new Funcionario('Pedro Mesquita' , 'Gerente', 15600)
    const funcionario3 = new Funcionario('Rafael Souza' , 'Contador', 10512.50)

Gerando algo assim:

    Funcionário 1: Ana Silva, Analista de TI, R$ 8.400,00
    Funcionário 2: Pedro Mesquita, Gerente, R$ 15.600,00
    Funcionário 3: Rafael Souza, Contador, R$ 10.512,50

O que significa chamar o construtor?

Quando o new é chamado usando um função estamos chamando uma função construtora.
Esse termo está relacionado ao fato que estamos construindo um objeto a partir de uma função,
por isso o nome construtor.
Chamar o construtor significa chamar uma função para criar um objeto.
*/
