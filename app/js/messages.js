document.addEventListener("DOMContentLoaded", async function () {

    const resposta = await fetch("data/messages.json");
    const dados = await resposta.json();

    const mensagens = dados.mensagens;
    let indiceAtual = 0;
    let intervalo;

    const elemento = document.getElementById("mensagem-ti");
    const areaMensagem = document.querySelector(".message-area");

    function mostrarMensagem() {
        elemento.style.opacity = 0;
        setTimeout(() => {
            elemento.textContent = mensagens[indiceAtual];
            elemento.style.opacity = 1;
        }, 200);
    }

    function proximaMensagem() {
        indiceAtual = (indiceAtual + 1) % mensagens.length;
        mostrarMensagem();
        reiniciarRotacao();
    }

    function iniciarRotacao() {
        intervalo = setInterval(proximaMensagem, 300000);
    }

    function reiniciarRotacao() {
        clearInterval(intervalo);
        iniciarRotacao();
    }

    areaMensagem.addEventListener("click", proximaMensagem);

    mostrarMensagem();
    iniciarRotacao();
});
