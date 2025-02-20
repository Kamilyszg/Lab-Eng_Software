let input = prompt("Digite um número", "");
let numero = Number(input); // poderia ser 'let numero = +input'

if(isNaN(numero))
    alert("O valor inserido não é um número!");
else{
    let operacao = numero % 2;
    switch(operacao){
        case 0:
            //document.write("O número inserido é par.")
            alert("O número inserido é par!");
            break;
        case 1:
            alert("O número inserido é ímpar!")
            break;
        default:
            alert("Valor inválido!");
    }
}