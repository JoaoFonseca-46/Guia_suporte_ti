document.querySelectorAll(".menu-item").forEach(item => {
    item.addEventListener("click", async function () {

        document.querySelectorAll(".menu-item")
            .forEach(i => i.classList.remove("active"));

        this.classList.add("active");

        const secao = this.getAttribute("data-section");

        document.getElementById("section-title").textContent =
            this.textContent;

        const dados = await carregarSecao(secao);
        renderizarSecao(dados);
    });
});
