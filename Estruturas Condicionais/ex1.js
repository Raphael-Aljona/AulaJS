// *** NIVEL BASICO ***
// 1. **Verificar maioridade:**

// let idade = parseInt(prompt("Digite sua idade:"))

// if (idade >= 18){
//     alert("Você é maior de idade")
// } else {
//     alert("Você é menor de idade")

// }


// 2. **Verificar se um número é positivo ou negativo:**

// let num = prompt("Digite um número")

// if(num > 0){
//     alert("Número positivo");
// } else alert("Número negativo")


// 3. **Aprovação em uma prova:**

// let nota = parseFloat(prompt("Digite sua nota"))

// if(nota >= 60 && nota <= 100){
//     alert("Aprovado")
// } else if (nota < 0 || nota > 100){
//     alert("Digite um numero entre 0 a 100")
// } else alert("Reprovado")

// 4. **Verificar se um número é positivo, negativo ou zero:**

// let num = prompt("Digite um numero")

// if(num > 0){
//     alert("Número positivo")
// } else if (num < 0){
//     alert("Número negativo")
// } else {
//     alert("Zero")
// }


// 5. **Classificação de idade:**

// let idade = parseInt(prompt("Insira sua idade"))

// if (idade > 0 && idade <= 12){
//     alert("Criança")
// } else if (idade >= 13 && idade <= 17){
//     alert("Adolescente")
// } else if (idade >= 18){
//     alert("Adulto")
// } else {
//     alert("Digite uma idade válida")
// }

// 6. **Verificar se um número é par ou ímpar:**

// let num = parseFloat(prompt("Digite um número")) 

// if (num % 2 == 0){
//     alert(num + " é par")
// } else alert(num + " é impar")

// **LISTA INTERMEDIARIA**

//   1. **Calculadora simples:**

// let num1 = parseFloat(prompt("Digite um número"));
// let operacao = prompt("Digite uma operação(+, -, * ou /)")
// let num2 = parseFloat(prompt("Digite outro número"))
// let resultado = 0;

// if (operacao == "+"){
//     resultado = (num1 + num2)
// } else if (operacao == "-"){
//     resultado = (num1 - num2)
// } else if (operacao == "*"){
//     resultado = (num1 * num2)   
// } else if (operacao == "/"){
//     resultado = (num1 / num2)   
// }
// alert("O resultado é " + resultado)

// 2. **Maior entre três números:**

// let num = alert("escreva 3 números")
// let n1 = parseFloat(prompt("Número 1"))
// let n2 = parseFloat(prompt("Número 1"))
// let n3 = parseFloat(prompt("Número 1"))
// let resultado = 0;

// if(n1 > n2 && n1 > n3){
//     resultado = n1;
//     alert("O primeiro número ("  + resultado +") é o maior: ")

// }else if(n2 > n1 && n2 > n3){
//     resultado = n2;
//     alert("O segundo número ("  + resultado +") é o maior: ")

// } else if (n3 > n1 && n3 > n2){
//     resultado = n3;
//     alert("O terceiro número ("  + resultado +") é o maior: ")
// }

// 3. **Desconto em compras:**

// let valor = parseFloat(prompt("Digite o valor de sua compra"))

// if(valor > 100){
//     valor = valor - (valor * 0.1)
//     alert("Parabéns você ganhou um desconto de 10%, agora sua compra é: " + valor)
// } else alert("O valor de sua compra é: " + valor)

// 4. **Sistema de login simples:**

// let usuario = prompt("Digite seu nome de usuário")
// let senha = prompt("Digite sua senha")

// if(usuario == "admin" && senha == "1234"){
//     alert("Login bem sucedido")
// }


// ### ***Nível Avançado***

// 1. **Classificação de triângulos:**

// let lado1 = parseInt(prompt("Digite o numero 1"))
// let lado2 = parseInt(prompt("Digite o numero 2"))
// let lado3 = parseInt(prompt("Digite o numero 3"))

// if(lado1 != lado2 && lado1 != lado3){
//     alert("Escaleno")
// }

// else if(lado1 == lado2 && lado1 != lado3){
//     alert("isosceles")
// }
// else if(lado1 != lado2 && lado1 == lado3){
//     alert("isosceles")
// }
// else if(lado1 == lado2 && lado2 == lado3){
//     alert("Equilatero")
// }

// 2. **Conversão de notas para conceitos:**

//   let nota = parseInt(prompt("Digite a nota: "))
// if (nota > 100 || nota < 0) {
//  alert("digite uma nota valida")}
//  if(nota >= 90){
//  alert("Nivel A")}
//  if(nota < 90 && nota > 80){
//  alert("Nivel B")}
//  if(nota < 80 && nota > 70){
//  alert("Nivel C")}
//  if(nota < 70 && nota > 60){
//  alert("Nivel D")}

// 3. **Cálculo de IMC:**

// let peso = parseFloat(prompt("Digite quantos KG você pesa (ex: 70)"))
// let altura = parseFloat(prompt("Digite quanto metros vc tem de altura (ex: 1.72)"))

// let IMC = peso / (altura * altura)

// if (IMC < 18.5) {
//     console.log("Abaixo do peso")
// } else if (IMC < 24.9) {
//     console.log("Peso normal")
// } else if (IMC < 29.9) {
//     console.log("Sobrepeso")
// } else if (IMC < 34.9) {
//     console.log("Obesidade grau 1")
// } else if (IMC < 39.9) {
//     console.log("Obesidade grau 2")
// } else if (IMC >= 40.0) {
//     console.log("Obesidade grau 3")
// } else {
//     console.log("O valor inserido é invalido")
// }

// 4. **Validação de ano bissexto:**

// let ano = parseFloat(prompt("Digite o Ano"))
// let bissexto = false

//  if(ano % 400 == 0){
//   bissexto = true}
//  else if(ano % 100 == 0){
//   bissexto = false}
//  else if(ano % 4 == 0){
//   bissexto = true}

//   if(bissexto == true){
//     alert("Ano Bissexto")
//   }
//   else{
//     alert("Ano normal")
//   }

