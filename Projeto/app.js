const livros = require("./database")

// pegar um input do usuario
const readline = require('readline-sync')
const entradaInicial = readline.question("Deseja buscar um livro? S/N ")
 //sim -mostrar as categorias disponiveis , perguntar qual categoria escolher 

if (entradaInicial.toLocaleUpperCase() === "S"){
    console.log("Essas sãp as categorias disponivéis: ")
    console.log('Evolução',"/Progrmação de Computadores","/Python",
    '/Algoritmos e lógica de programação')
    const entradaCategoria = readline.question("Qual categoria você escolhe: ")
    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)
    console.table(retorno)
} 
else {
    const livrosOrdenados = livros.sort((a,b)=> a.paginas - b.paginas)
    console.log('Estes são todos os livros disponivéis')
    console.table(livrosOrdenados)

}

 // se nao mostrar todos os livros diponivel , enm ordem crescente por paginas 

