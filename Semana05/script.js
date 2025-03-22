window.onload = function() {
    let div = document.getElementById("contador");

    //titulo
    let div_titulo = document.createElement("div");
    div_titulo.setAttribute("class", "container_titulo");
    
    let titulo = document.createElement("h1");
    let titulo_texto = document.createTextNode("Total");
    titulo.appendChild(titulo_texto);

    div_titulo.appendChild(titulo);

    let reset = document.createElement("img");
    reset.setAttribute("src", "./imgs/ciclo.png");
    reset.setAttribute("alt", "Redefinir");
    reset.setAttribute("id", "reset")

    div_titulo.appendChild(reset);
    div.appendChild(div_titulo);

    //resultado
    let div_resultado = document.createElement("div");
    div_resultado.setAttribute("class", "resultado");
    div_resultado.setAttribute("id", "soma");


    let resultado_valor = document.createTextNode("0");
    div_resultado.appendChild(resultado_valor);
    div.appendChild(div_resultado);

    //imagens 
    let div_imagens = document.createElement("div");
    div_imagens.setAttribute("class", "container_imagens");

    let img_homem = document.createElement("img");
    img_homem.setAttribute("src", "./imgs/homem.png");
    img_homem.setAttribute("alt", "Homem");
    img_homem.setAttribute("id", "homem");
    div_imagens.appendChild(img_homem);

    let img_mulher = document.createElement("img");
    img_mulher.setAttribute("src", "./imgs/mulher.png");
    img_mulher.setAttribute("alt", "Mulher");
    img_mulher.setAttribute("id", "mulher");
    div_imagens.appendChild(img_mulher);

    div.appendChild(div_imagens);

    //botões
    let div_botoes = document.createElement("div");
    div_botoes.setAttribute("class", "container_botoes");

    let div_botoes_homem = document.createElement("div");
    let div_botoes_mulher = document.createElement("div");
    
    let add_homem = document.createElement("img");
    add_homem.setAttribute("src", "./imgs/mais.png");
    add_homem.setAttribute("alt", "Adicionar");
    add_homem.setAttribute("id", "add_homem");
    add_homem.setAttribute("class", "botao");

    div_botoes_homem.appendChild(add_homem);

    let del_homem = document.createElement("img");
    del_homem.setAttribute("src", "./imgs/menos.png");
    del_homem.setAttribute("alt", "Remover");
    del_homem.setAttribute("id", "del_homem");
    del_homem.setAttribute("class", "botao");

    div_botoes_homem.appendChild(del_homem);
    div_botoes.appendChild(div_botoes_homem);

    let add_mulher = document.createElement("img");
    add_mulher.setAttribute("src", "./imgs/mais.png");
    add_mulher.setAttribute("alt", "Adicionar");
    add_mulher.setAttribute("id", "add_mulher");
    add_mulher.setAttribute("class", "botao");

    div_botoes_mulher.appendChild(add_mulher);

    let del_mulher = document.createElement("img");
    del_mulher.setAttribute("src", "./imgs/menos.png");
    del_mulher.setAttribute("alt", "Remover");
    del_mulher.setAttribute("id", "del_mulher");
    del_mulher.setAttribute("class", "botao");
    

    div_botoes_mulher.appendChild(del_mulher);
    div_botoes.appendChild(div_botoes_mulher);

    div.appendChild(div_botoes);

    //Resultados individuais
    let div_resultados_individuais = document.createElement("div");
    div_resultados_individuais.setAttribute("class", "container_resultados");

    //homens
    let div_homem = document.createElement("div");

    let p_homem = document.createElement("p");
    let p_homem_texto = document.createTextNode("Homens");

    p_homem.appendChild(p_homem_texto);
    div_homem.appendChild(p_homem);

    let resultado_homem = document.createElement("div");
    resultado_homem.setAttribute("class", "quadrado");
    resultado_homem.setAttribute("id", "contagem_homem");

    let resultado_homem_valor = document.createTextNode("0");
    resultado_homem.appendChild(resultado_homem_valor);

    div_homem.appendChild(resultado_homem);
    div_resultados_individuais.appendChild(div_homem);

    //mulheres
    let div_mulher = document.createElement("div");

    let p_mulher = document.createElement("p");
    let p_mulher_texto = document.createTextNode("Mulheres");

    p_mulher.appendChild(p_mulher_texto);
    div_mulher.appendChild(p_mulher);

    let resultado_mulher = document.createElement("div");
    resultado_mulher.setAttribute("class", "quadrado");
    resultado_mulher.setAttribute("id", "contagem_mulher");

    let resultado_mulher_valor = document.createTextNode("0");
    resultado_mulher.appendChild(resultado_mulher_valor);

    div_mulher.appendChild(resultado_mulher);
    div_resultados_individuais.appendChild(div_mulher);

    div.appendChild(div_resultados_individuais);
    
    //funções
    let contagem_homem = 0;
    let contagem_mulher = 0;
    let soma = 0;

    document.getElementById("add_homem").addEventListener("click", ()=>{
        contagem_homem += 1;
        soma += 1;

        document.getElementById("contagem_homem").innerHTML = contagem_homem;
        document.getElementById("soma").innerHTML = soma;
    });

    document.getElementById("del_homem").addEventListener("click", ()=>{
        contagem_homem -= 1;
        soma -= 1;

        document.getElementById("contagem_homem").innerHTML = contagem_homem;
        document.getElementById("soma").innerHTML = soma;
    });

    document.getElementById("add_mulher").addEventListener("click", ()=>{
        contagem_mulher += 1;
        soma += 1;

        document.getElementById("contagem_mulher").innerHTML = contagem_mulher;
        document.getElementById("soma").innerHTML = soma;
    });

    document.getElementById("del_mulher").addEventListener("click", ()=>{
        contagem_mulher -= 1;
        soma -= 1;

        document.getElementById("contagem_mulher").innerHTML = contagem_mulher;
        document.getElementById("soma").innerHTML = soma;
    });

    document.getElementById("reset").addEventListener("click", ()=>{
        document.getElementById("contagem_homem").innerHTML = 0;
        document.getElementById("contagem_mulher").innerHTML = 0;
        document.getElementById("soma").innerHTML = 0;
    });

};