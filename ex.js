/// *** FILTER ***

// EXERCICIO 1

// const notas = [4, 7, 9, 3, 10, 5];

// const maiorQue7 = notas.filter(nota => nota >= 7)
// console.log(maiorQue7)

// EXERCICIO 2

// const palavras = ["sol", "mar", "computador", "lua", "código"];

// const palavrasGrandes = palavras.filter(palavra => palavra.length > 4)
// console.log(palavrasGrandes)

// EXERCICIO 3

// const animais = ["gato", "cachorro", "peixe", "elefante", "abelha"]

// const animalComC = animais.filter(animal => animal.startsWith("c"))
// console.log(animalComC)

/// *** FIND ***

// EXERCICIO 1

// const filmes = ["Avatar", "Batman", "Vingadores", "Matrix", "Barbie"]

// const primeiroComB = filmes.find(filme => filme.startsWith("B"))
// console.log(primeiroComB)

// EXERCICIO 2

// const numeros = [2, 4, 6, 9, 12, 15]

// const primeiroImpar = numeros.find(numero => numero % 2 !== 0)
// console.log(primeiroImpar)

// EXERCICIO 3

// const alunos = 
// [
//     { nome: "Ana", nota: 8 }, 
//     { nome: "Carlos", nota: 5 },
//     { nome: "Beatriz", nota: 9 }
// ]

// const primeiro7 = alunos.find(aluno => aluno.nota >= 7)
// console.log(primeiro7)

// *** MAP ***

// EXERCICIO 1

// const temperaturas = [20, 25, 30, 15]

// const fahrenheit = temperaturas.map(temperatura => temperatura * 1.8 + 32 + "F")
// console.log(fahrenheit)

// EXERCICIO 2

// const produtos = ["camisa", "calça", "sapato"]

// const novosProdutos = produtos.map(produto => "Produto: " + produto.toUpperCase())
// console.log(novosProdutos)

// EXERCICIO 3

// const numeros = [1, 2, 3, 4]

// const numeroQuadrados = numeros.map(numero => numero ** 2)
// console.log(numeroQuadrados)

// *** REDUCE ***

// EXERCICIO 1

// const valores = [100, 200, 50, 150]

// const valorTotal = valores.reduce((acumulador, valor) => acumulador + valor, 0)
// console.log(valorTotal)

// EXERCICIO 2

// const palavras = ["JS", "é", "muito", "legal"]

// const frase = palavras.reduce((concatenador, palavra) => concatenador + palavra + " ", "")
// console.log(frase)

// EXERCICIO 3

// const numeros = [1, 2, 3, 4, 5]

// const media = numeros.reduce((acumulador, numero) => acumulador + numero) / numeros.length
// console.log(media)

// *** DESAFIOS ***

// const livros = [
//   { titulo: "Dom Casmurro", paginas: 300 },
//   { titulo: "O Hobbit", paginas: 295 },
//   { titulo: "A Revolução dos Bichos", paginas: 112 }
// ]

// const maisPaginas = livros.filter(livro => livro.paginas > 200)

// const titulos = livros.map(livro => livro.titulo)

// const totalPaginas = livros.reduce((acumulador, livro), acumulador + livro, 0)

// console.log("a")
// console.log(titulos)
// console.log(totalPaginas)
