//1
var nome = prompt("Insira o seu nome")
var idade = prompt("Insira a sua idade")

//2
var AnoAtual = 2022
var AnoNascimento = AnoAtual - idade
var ParImpar
var ParImparAno

//3
console.log("Nome: " + nome + " e Idade: " + idade)

if (idade % 2 == 0){
    ParImpar = ("Par")
}else{
    ParImpar = ("Impar")
}

if (AnoNascimento % 2 == 0){
    ParImparAno = ("Par")
}else{
    ParImparAno = ("Impar")
}

console.log("Olá " + nome + " você tem " + idade + " anos que é um número " + ParImpar + " e nasceu no ano: " + AnoNascimento + " que é um número " + ParImparAno)

//4
if (idade >= 18){
    console.log("Está liberado o consumo de bebida alcoólica")
}else{
    console.log("Espere um pouco mais")
}