
//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18

let idade=8
if (idade >=18) {
    console.log ("Você é maior de 18")
} else {
    console.log ("Você é menor de 18")
}

//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true

let humano=true
if (idade >=18 && humano === true){
    console.log ("Você é humano ou tem mais de 18")
} else {
    console.log ("Você não é humano ou é não é maior de 18")
}

//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro
let mes="julho"
if (mes=== "janeiro" || mes==="dezembro"){
    console.log ("voce nasceu em janeiro ou dezembro")
} else{
    console.log (`voce nasceu no mes ${mes}`)
}

//*** Exercícios bônus
//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R
let nome="carol"
if (nome.substring(0,1)==="r"){
    console.log ("seu nome começa com R")
}else {
    console.log ("seu nome não começa com R")
}

//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E
let sobrenome="Oliveira"
if (sobrenome.length >6 || nome.substring(0,1)==="E"){
    console.log ("seu sobrenome tem mais de 6 letras ou seu nome começa com E")
} else{
    console.log ("seu sobrenome nao tem mais de 6 letras ou seu nome não começa com E")
}