window.onload = function() {
    let calculadora = document.getElementById("calculadora");

    let tela = document.createElement("div");
    tela.setAttribute("class", "tela");

    let resultadoFinal = document.createElement("div"); 
    resultadoFinal.setAttribute("id", "resultadoFinal"); 
    resultadoFinal.appendChild(document.createTextNode("0")); 

    let botoes = document.createElement("div");
    botoes.setAttribute("class", "botoes");

    tela.appendChild(resultadoFinal)
    calculadora.appendChild(tela);
    calculadora.appendChild(botoes);
    
    // linha 1

    // botões de função
    let ac = document.createElement("div");
    ac.setAttribute("class", "botao funcao");
    ac.setAttribute("id", "ac");
    ac.appendChild(document.createTextNode("AC"));

    let maisMenos = document.createElement("div");
    maisMenos.setAttribute("class", "botao funcao");
    maisMenos.setAttribute("id", "maisMenos");
    maisMenos.appendChild(document.createTextNode("+/-"));

    let porcentagem = document.createElement("div");
    porcentagem.setAttribute("class", "botao funcao");
    porcentagem.setAttribute("id", "porcentagem");
    porcentagem.appendChild(document.createTextNode("%"));

    botoes.appendChild(ac);
    botoes.appendChild(maisMenos);
    botoes.appendChild(porcentagem);

    // operador
    let divisao = document.createElement("div");
    divisao.setAttribute("class", "botao operador");
    divisao.setAttribute("id", "divisao");
    divisao.appendChild(document.createTextNode("÷"));

    botoes.appendChild(divisao);

    // linha 2

    let sete = document.createElement("div");
    sete.setAttribute("class", "botao");
    sete.setAttribute("id", "sete")
    sete.appendChild(document.createTextNode("7"));

    let oito = document.createElement("div");
    oito.setAttribute("class", "botao");
    oito.setAttribute("id", "oito");
    oito.appendChild(document.createTextNode("8"));

    let nove = document.createElement("div");
    nove.setAttribute("class", "botao");
    nove.setAttribute("id", "nove");
    nove.appendChild(document.createTextNode("9"));

    // operador 
    let multiplicacao = document.createElement("div");
    multiplicacao.setAttribute("class", "botao operador");
    multiplicacao.setAttribute("id", "multiplicacao");
    multiplicacao.appendChild(document.createTextNode("x"));

    botoes.appendChild(sete);
    botoes.appendChild(oito);
    botoes.appendChild(nove);
    botoes.appendChild(multiplicacao);

    // linha 3

    let quatro = document.createElement("div");
    quatro.setAttribute("class", "botao");
    quatro.setAttribute("id", "quatro");
    quatro.appendChild(document.createTextNode("4"));

    let cinco = document.createElement("div");
    cinco.setAttribute("class", "botao");
    cinco.setAttribute("id", "cinco");
    cinco.appendChild(document.createTextNode("5"));

    let seis = document.createElement("div");
    seis.setAttribute("class", "botao");
    seis.setAttribute("id", "seis");
    seis.appendChild(document.createTextNode("6"));

    // operador 
    let menos = document.createElement("div");
    menos.setAttribute("class", "botao operador");
    menos.setAttribute("id", "menos");
    menos.appendChild(document.createTextNode("-"));

    botoes.appendChild(quatro);
    botoes.appendChild(cinco);
    botoes.appendChild(seis);
    botoes.appendChild(menos);

    // linha 4

    let um = document.createElement("div");
    um.setAttribute("class", "botao");
    um.setAttribute("id", "um");
    um.appendChild(document.createTextNode("1"));

    let dois = document.createElement("div");
    dois.setAttribute("class", "botao");
    dois.setAttribute("id", "dois");
    dois.appendChild(document.createTextNode("2"));

    let tres = document.createElement("div");
    tres.setAttribute("class", "botao");
    tres.setAttribute("id", "tres");
    tres.appendChild(document.createTextNode("3"));

    // operador 
    let mais = document.createElement("div");
    mais.setAttribute("class", "botao operador");
    mais.setAttribute("id","mais");
    mais.appendChild(document.createTextNode("+"));

    botoes.appendChild(um);
    botoes.appendChild(dois);
    botoes.appendChild(tres);
    botoes.appendChild(mais);

    // linha 5

    let zero = document.createElement("div");
    zero.setAttribute("class", "botao zero");
    zero.setAttribute("id", "zero");
    zero.appendChild(document.createTextNode("0"));

    let virgula = document.createElement("div");
    virgula.setAttribute("class", "botao");
    virgula.setAttribute("id", "virgula");
    virgula.appendChild(document.createTextNode(","));

    // operador

    let igual = document.createElement("div");
    igual.setAttribute("class", "botao operador");
    igual.setAttribute("id", "igual");
    igual.appendChild(document.createTextNode("="));

    botoes.appendChild(zero);
    botoes.appendChild(virgula);
    botoes.appendChild(igual);

    // funcoes de funcionamento

    let valorAtual = "";
    let valorAnterior = null;
    let operacao = null;

    function atualizarResultado(valor){
        resultadoFinal.innerHTML = valor;
    }

    document.querySelectorAll(".botao").forEach(botao => { //seleciona todos os botões da calculadora
        botao.addEventListener("click", () => { //percorre cada botão e adiciona um click
            let valor = botao.textContent; //pega o conteúdo
            if (!isNaN(valor) || valor === ",") { //verifica se é número ou vírgula
                valorAtual += valor; //concatena na string
                atualizarResultado(valorAtual); //exibe na tela
            }
        });
    });

    document.querySelectorAll(".botao.operador:not(#igual)").forEach(botao =>{ //selecionar todos os operadores com exceção do igual
        botao.addEventListener("click", () =>{
            if (valorAtual !== "") { 
                valorAnterior = parseFloat(valorAtual.replace(",", "."));
                operacao = botao.textContent;
                valorAtual = ""; 
                atualizarResultado(operacao);
            };
        });
    });

    document.getElementById("igual").addEventListener("click", ()=>{
        if(valorAnterior !== null && operacao !== null && valorAtual !== ""){
            let resultado;
            let numAtual = parseFloat(valorAtual.replace(",", "."));

            switch (operacao) {
                case "+":
                    resultado = valorAnterior + numAtual;
                    break;
                case "-":
                    resultado = valorAnterior - numAtual;
                    break;
                case "x":
                    resultado = valorAnterior * numAtual;
                    break;
                case "÷":
                    resultado = numAtual !== 0 ? valorAnterior / numAtual : "Erro";
                    break;
            
                default:
                    resultado = "Erro";
            }

            atualizarResultado(resultado);
            valorAtual = resultado.toString();
            valorAnterior = null;
            operacao = null;
        }
    });

    document.getElementById("ac").addEventListener("click", ()=>{
        valorAtual = "";
        valorAnterior = null;
        operacao = null;

        atualizarResultado("0")
    });

    document.getElementById("maisMenos").addEventListener("click", ()=>{
        if(valorAtual !== ""){
            let aux = parseFloat(valorAtual.replace(",", "."));
            aux *= -1;
            valorAtual = aux.toString();
            atualizarResultado(valorAtual);
        }
    });

    document.getElementById("porcentagem").addEventListener("click", ()=>{
        if(valorAtual !== ""){
            let aux = parseFloat(valorAtual.replace(",", "."));

            if (valorAnterior !== null && operacao !== null) {
                aux = (valorAnterior * aux) / 100;
            }
            else{
                aux = aux / 100;
            }
            valorAtual = aux.toString();
            atualizarResultado(valorAtual);
        }
    });

    document.getElementById("virgula").addEventListener("click", () => {
        if (!valorAtual.includes(",")) { //verificando se o valorAtual já não contém uma vírgula
            valorAtual += ",";  
            atualizarResultado(valorAtual); //exibição
        }
    });
}