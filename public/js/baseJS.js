const nome = "Gabriel Iancovski";
let nome2 = "Gabriel";

let pessoa = {
    nome: "Jorge",
    idade: 27,
    trabalho: "TI"
}

let nomes = ["Gabriel", "João", "Pedro"];

let pessoas = [
    {
        nome: "Gabriel",
        idade: 23,
        trabalho: "TI"
    },
    {
        nome: "Maria",
        idade: 20,
        trabalho: "Cozinheira"
    }
];

function imprimirPessoa(pessoaDefault){
    console.log("Nome: ");
    console.log(pessoa.nome);
    console.log("Idade: ");
    console.log(pessoa.idade);
    console.log("Profissão: ");
    console.log(pessoa.trabalho);
}

console.log(pessoas);

function adicionarPessoa(pessoa){
    pessoas.push(pessoa)
}

adicionarPessoa({ nome: "Raquel", idade: 23, trabalho: "Contabilista"})

console.log(pessoas);

imprimirPessoas();