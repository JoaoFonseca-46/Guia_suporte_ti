document.addEventListener("DOMContentLoaded", async () => {
    const dados = await carregarSecao("suporte");
    renderizarSecao(dados);
});
