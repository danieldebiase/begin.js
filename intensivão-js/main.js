/*
1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
*/

//alert('Hello word')

/*
2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
*/

//let numberO = Number(prompt(`digite o primeiro número`))
//let numberT = Number(prompt(`digite o segundo número`))
//
//let sum = numberO + numberT
//
//alert(`A soma dos números inseridos é` + sum)


/*
3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
    
    💡 Para saber o tipo de dado você pode usar, use o operador `typeof`
*/

//let question = prompt('Digite qualquer coisa: ')


//if (!isNaN(Number(question))) {
//  alert("É um número")
//} else {
//  alert("Não é um número")
//}

/*
4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
*/

//let question = prompt('Digite qualquer coisa: ')


//if (isNaN(question)) {
//  alert("É uma string")
//} else {
//  alert("Não é uma string")
//}

/*
5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
*/

//let question = prompt("Digite um valor");
//
//if (typeof question === "boolean") {
//    alert("É um booleano");
//} else {
//    alert("Não é um booleano");
//}


/*
5. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
*/

//let numberO = Number(prompt(`digite o primeiro número`))
//let numberT = Number(prompt(`digite o segundo número`))
//
//let sub = numberO - numberT
//
//alert(`A subtração dos números inseridos é ` + sub)

/*
7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
*/

//let numberO = Number(prompt(`digite o primeiro número`))
//let numberT = Number(prompt(`digite o segundo número`))
//
//let mult = numberO * numberT
//
//alert(`A multiplacação dos números inseridos é ` + mult)


/*
8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
*/

//let numberO = Number(prompt(`digite o primeiro número`))
//let numberT = Number(prompt(`digite o segundo número`))
//
//let div = numberO / numberT
//
//alert(`A divisão dos números inseridos é ` + div)


/*
9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
*/

let question = Number(prompt(`digite um número`))

if (question % 2 == 0) {
  alert(`Não é um número par, o número é ímpar`)
} else {
  alert(`Não é um número ímpar, o número é par`)
}