document.addEventListener("click", function (evento) {
    const categoriaCabecalho = evento.target.closest(".categoria-cabecalho");
    const subcategoriaCabecalho = evento.target.closest(".subcategoria-cabecalho");
    const problemaCabecalho = evento.target.closest(".problema-cabecalho");

    if (categoriaCabecalho) {
        const categoria = categoriaCabecalho.closest(".categoria");
        categoria.classList.toggle("ativa");
    }

    if (subcategoriaCabecalho) {
        const subcategoria = subcategoriaCabecalho.closest(".subcategoria");
        subcategoria.classList.toggle("ativa");
    }

    if (problemaCabecalho) {
        const problema = problemaCabecalho.closest(".problema");
        problema.classList.toggle("ativo");
    }
});
