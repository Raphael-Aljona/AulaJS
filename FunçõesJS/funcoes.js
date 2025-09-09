// FILTER

//FILTRAR NÚMEROS MAIOR QUE 2
// const numeros = [1, 2, 3, 4, 5, 6]

// const maiorQueDois = numeros.filter(numero => numero > 2);
// console.log(maiorQueDois)

// FILTRAR NOMES

// let nomes = ["Ana", "Bruno", "Carlos", "Eva", "Fernanda"]

// const nomesLongos = nomes.filter(nome => nome.length > 5)

// console.log(nomesLongos)

// FILTRAR NUMEROS PARES

// let numeros = [1, 2, 3, 4, 5, 6]

// const pares = numeros.filter(numero => numero % 2 === 0)
// console.log(pares)

// FILTRAR OBJETOS

// let pessoas = [ 
//     {nome: "Raphael", idade: 18},
//     {nome: "Claudia", idade: 12},
//     {nome: "Marcelo", idade: 38},
//     {nome: "Beatriz", idade: 24},
//     {nome: "Isabella", idade: 23},
// ]

// let adultos = pessoas.filter(pessoa => pessoa.idade >= 18)
// console.log(adultos)

// ### *** FIND ***

// const produtos = [
//     {id: 1, nome: "Teclado", preco: 800},
//     {id: 2, nome: "Mouse", preco: 50},
//     {id: 3, nome: "Monitor", preco: 700},
// ]

// const produtoCaro = produtos.find(produto => produto.preco > 500)
// console.log(produtoCaro)

//Buscar por um nome pela primeira letra

// let nomes = ["Ana", "Bruno", "Carlos", "Eva", "Fernanda"]

// let nomeEncontrado = nomes.find(nome => nome.startsWith("A"))
// console.log(nomeEncontrado)

// MAP

// const numeros = [1, 2, 3, 4, 5]

// let numerosDobrados = numeros.map(numero => numero * 2)
// console.log(numerosDobrados) 


// let pessoas = [ 
//     {nome: "Raphael", idade: 18},
//     {nome: "Claudia", idade: 12},
//     {nome: "Marcelo", idade: 38},
//     {nome: "Beatriz", idade: 24},
//     {nome: "Isabella", idade: 23},
// ]
// let nomes = pessoas.map(pessoa => pessoa.nome)
// console.log(nomes)

// let mensagem = pessoas.map(pessoa => `${pessoa.nome} tem ${pessoa.idade} anos`)
// console.log(mensagem)

// Deixar os nomes em maiusculo e adicionar um sufixo

// const nomes = ["Ana", "Bruno", "Carlos", "Eva", "Fernanda"]

// const nomesMaiusculos = nomes.map(nome => "Colaborador: " + nome.toUpperCase())
// console.log(nomesMaiusculos)

// REDUCE

// Reduz um array a um unico valor

// const numeros = [1, 2, 3, 4, 5]
// const soma = numeros.reduce((acumulador, numero) => 
//     acumulador + numero, 0
// )
// console.log(soma)

// const numeros = [1, 2, 3, 4, 5, 6]

// const maiorNumero = numeros.reduce((max, numero) => {
//     if(numero > max){
//         return numero
//     } else return max  
// }, numeros[0])
// console.log(maiorNumero)

// Contar a frequencia de palavras

// const nomes = ["Ana", "Bruno", "Carlos", "Eva", "Fernanda", "Fernanda"]

// const frequenciaNomes = nomes.reduce((repetidor, nome) => {
//     repetidor[nome] = (repetidor[nome] || 0) + 1
//     return repetidor
// }, {})
// console.log(frequenciaNomes)

// Calcular média de notas

// const notas = [5, 3, 9, 10, 10]

// const media = notas.reduce((counter, nota) => counter + nota, 0) / notas.length
// console.log(media)

// USO COMBINADO
// const usuarios = [
//     {id: 1, nome: "Alice", idade: 18},
//     {id: 2, nome: "Beatriz", idade: 18},
//     {id: 3, nome: "Carlos", idade: 35},
// ]

// const maioresDeIdade = usuarios.filter(usuario => usuario.idade > 21)

// // Encontrar o primeiro usuário com idade maior que 21

// const usuario = usuarios.find(usuario => usuario.idade > 21)

// // Criar um array apenas com nomes de usuários
// const nomesUsuarios = usuarios.map(usuario => usuario.nome)

// // Somar todas as idades dos uau´rios usnado o reduce
// const somaIdades = usuarios.reduce((total, usuario) => total + usuario.idade, 0)

// console.log("Maiores de idade: ", maioresDeIdade)
// console.log("Primeiro maior de idade: ", usuario)
// console.log("Nomes de usuários: ", nomesUsuarios)
// console.log("Soma de idades: ", somaIdades)