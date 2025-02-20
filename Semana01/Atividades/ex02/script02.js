let numero = prompt("Digite um número inteiro positivo:", "");
numero = parseInt(numero);

function identificarPrimo(numero){
    let soma = 0;
    for (let i=2; i<numero; i++){
        if(numero % i == 0)
            soma += 1;
    }
    return soma;
}

if(isNaN(numero) || numero < 0)
    alert("Valor inválido!");
else{
    if(numero === 1 || identificarPrimo(numero) > 0){
        alert("O número inserido não é primo");
    } else if(numero === 2 || numero === 3){
        alert("O número inserido é primo");
    } else if(identificarPrimo(numero) === 0){
        alert("O número inserido é primo");
    } else
        alert("Valor inválido!");
}