var perguntas = [
    { pergunta: "Qual é o resultado de 5 + 3?", resposta: "8" },
    { pergunta: "Qual é o resultado de 12 - 7?", resposta: "5" },
    { pergunta: "Qual é o resultado de 3 * 4?", resposta: "12" },
    { pergunta: "Qual é o resultado de 15 / 3?", resposta: "5" }
];

var indicePerguntaAtual = 0;

function exibirPergunta() {
    var perguntaAtual = perguntas[indicePerguntaAtual];
    var container = document.getElementById("perguntas-container");

    var perguntaDiv = document.createElement("div");
    perguntaDiv.classList.add("pergunta");

    var perguntaParagrafo = document.createElement("p");
    perguntaParagrafo.textContent = perguntaAtual.pergunta;

    var respostaInput = document.createElement("input");
    respostaInput.type = "text";

    var verificarBotao = document.createElement("button");
    verificarBotao.textContent = "Verificar";
    verificarBotao.onclick = function() {
        verificarResposta(perguntaAtual.resposta);
    };

    perguntaDiv.appendChild(perguntaParagrafo);
    perguntaDiv.appendChild(respostaInput);
    perguntaDiv.appendChild(verificarBotao);

    container.innerHTML = ""; // Limpar o conteúdo anterior
    container.appendChild(perguntaDiv);
}

function verificarResposta(respostaCorreta) {
    var respostaUsuario = document.querySelector(".pergunta input").value;

    if (respostaUsuario === respostaCorreta) {
        alert("Parabéns! Resposta correta.");
        proximaPergunta();
    } else {
        alert("Ops! Resposta incorreta. Tente novamente.");
    }
}

function proximaPergunta() {
    indicePerguntaAtual++;

    if (indicePerguntaAtual < perguntas.length) {
        exibirPergunta();
    } else {
        alert("Você concluiu todas as perguntas!");
        // Aqui você pode adicionar ações adicionais após concluir todas as perguntas
    }
}

// Iniciar a primeira pergunta
exibirPergunta();
