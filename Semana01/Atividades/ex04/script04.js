let dado = prompt("Digite algo: ")

function identificarTipo(dado){
    let numero = parseInt(dado);
    let tipo;
    if(isNaN(numero)){
        tipo = typeof dado; //string
        return tipo;
    }
    else{
        tipo = typeof numero; //int
        return tipo;
    }
}


if(confirm("Deseja descobrir o tipo do dado inserido por você?")){
    alert("O tipo do dado é: "+ identificarTipo(dado) + ".")
}
else{
    alert("Obrigado por visitar esta página!")
}