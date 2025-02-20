let numero = prompt("Digite um número: ")
parseInt(numero)

function calcularFatorial(numero){
    let resultado = numero;
    for(let i = numero - 1; i > 1; i--){
        resultado *= i;
    }
    return resultado;
}

if(isNaN(numero) || numero < 0)
    alert("Valor inválido!");
else{
    alert("O fatorial de " + numero + " é igual a " + calcularFatorial(numero)+".")
}