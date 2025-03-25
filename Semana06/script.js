window.onload = function() {
    let div = document.getElementById("calculadora");

    let div_resultado = document.createElement("div");
    div_resultado.setAttribute("class", "div_resultado");
    div_resultado.setAttribute("id", "resultado");

    let resultado_valor = document.createTextNode("0");
    div_resultado.appendChild(resultado_valor);
    div.appendChild(div_resultado);

    let div_elementos = document.createElement("div");
    div_elementos.setAttribute("class", "div_elementos");

    div.appendChild(div_elementos);

    let div_row1 = document.createElement("div");
    div_row1.setAttribute("class", "row");

    div_elementos.appendChild(div_row1);

    //ac
    let div_ac = document.createElement("div");
    div_ac.setAttribute("class", "elemento especial");
    div_ac.setAttribute("id", "ac")

    let valor_ac = document.createTextNode("AC");
    div_ac.appendChild(valor_ac);

    //+/-
    let div_mais_menos = document.createElement("div");
    div_mais_menos.setAttribute("class", "elemento especial");
    div_mais_menos.setAttribute("id", "mais_menos");

    let valor_mais_menos = document.createTextNode("+/-");
    div_mais_menos.appendChild(valor_mais_menos);

    //%
    let div_porcentagem = document.createElement("div");
    div_porcentagem.setAttribute("class", "elemento especial");

    div_row1.appendChild(div_ac)
    div_row1.appendChild(div_mais_menos)

    let div_row2 = document.createElement("div");
    div_row2.setAttribute("class", "row");

    div_elementos.appendChild(div_row2);

    let div_row3 = document.createElement("div");
    div_row3.setAttribute("class", "row");

    div_elementos.appendChild(div_row3);

    let div_row4 = document.createElement("div");
    div_row4.setAttribute("class", "row");

    div_elementos.appendChild(div_row4);

    let div_row5 = document.createElement("div");
    div_row5.setAttribute("class", "row");

    div_elementos.appendChild(div_row5);
}