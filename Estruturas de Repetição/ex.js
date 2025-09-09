// <!-- Nível Básico -->

// EXERCICIO 1

// for (let i = 1; i <= 10; i++){
//     console.log(i)
// }

// EXERCICIO 2

// let n = parseInt(prompt("Digite um número inteiro"))
// let resultado;

// for(i = 1; i <= 10; i++){
//     resultado = n * i
//     console.log(resultado)
// }

// EXERCICIO 3

// let n = parseInt(prompt("Digite um número inteiro"))
// let resultado = 0;
// let n1 = 0;

// for(i = 0; i < n; i++){
//     resultado = n1 + i
//     n1 = resultado
// }
// resultado = n1 + n
// console.log(resultado)

// *** NIVEL INTERMEDIARIO ***

// EXERCICIO 1

// for (i = 0; i <= 50; i++){
//     if(i % 2 == 0){
//         console.log(i)
//     }
// }

// EXERCICIO 2

// let aleatorio = Math.floor(Math.random() * 100) + 1;
// numero = parseInt(prompt("Digite um valor entre 0 a 100"))
// console.log(aleatorio)

// while (numero != aleatorio){
//     if (numero < aleatorio){
//         numero = parseInt(prompt("O valor que foi inserido é menor que o resultado"))
//     } else if (numero > aleatorio){
//         numero = parseInt(prompt("O valor que foi inserido é maior que o resultado"))
//     }
// }
// alert("Parabéns você acertou o número")

// EXERCICIO 3

// let numero = parseInt(prompt("Digite um número"))

// while (numero > 0){
//     numero--
//     console.log(numero)
// }

// <!-- *** Nível Avançado *** -->

// EXERCICIO 1

// let n = parseInt(prompt("Digite um inteiro positivo"))
// let soma = 0;
// while(n > 0){
//     soma += n % 10;
//     n = Math.floor(n / 10);
// }
// alert(soma)
