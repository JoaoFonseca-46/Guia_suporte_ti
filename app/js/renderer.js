function renderizarSecao(dados) {
    const colunaEsquerda = document.getElementById("coluna-esquerda");
    const colunaDireita = document.getElementById("coluna-direita");

    colunaEsquerda.innerHTML = "";
    colunaDireita.innerHTML = "";

    if (!dados || !dados.categorias) return;

    dados.categorias.forEach((categoria, index) => {
        const categoriaElemento = document.createElement("div");
        categoriaElemento.classList.add("categoria");

        categoriaElemento.innerHTML = `
            <div class="categoria-cabecalho">
                ${categoria.imagem ? `
                <div class="categoria-imagem">
                    <img src="../assets/imagens/${categoria.imagem}" alt="${categoria.titulo}">
                </div>
                ` : ""}
                <div class="categoria-titulo">${categoria.titulo}</div>
            </div>
            <div class="categoria-conteudo"></div>
        `;

        const conteudoCategoria = categoriaElemento.querySelector(".categoria-conteudo");

        categoria.subcategorias?.forEach(subcategoria => {
            const subcategoriaElemento = document.createElement("div");
            subcategoriaElemento.classList.add("subcategoria");

            subcategoriaElemento.innerHTML = `
                <div class="subcategoria-cabecalho">
                    <span>${subcategoria.titulo}</span>
                </div>
                <div class="subcategoria-conteudo"></div>
            `;

            const conteudoSubcategoria = subcategoriaElemento.querySelector(".subcategoria-conteudo");

            subcategoria.problemas?.forEach(problema => {
                const problemaElemento = document.createElement("div");
                problemaElemento.classList.add("problema");

                problemaElemento.innerHTML = `
                    <div class="problema-cabecalho">
                        <span>${problema.titulo}</span>
                    </div>
                    <div class="problema-conteudo"></div>
                `;

                const conteudoProblema = problemaElemento.querySelector(".problema-conteudo");

                problema.passos?.forEach((passo, passoIndex) => {
                    const passoElemento = document.createElement("div");
                    passoElemento.classList.add("passo");
                    passoElemento.innerHTML = `<strong>Passo ${passoIndex + 1}</strong>${passo}`;
                    conteudoProblema.appendChild(passoElemento);
                });

                conteudoSubcategoria.appendChild(problemaElemento);
            });

            conteudoCategoria.appendChild(subcategoriaElemento);
        });

        if (index % 2 === 0) {
            colunaEsquerda.appendChild(categoriaElemento);
        } else {
            colunaDireita.appendChild(categoriaElemento);
        }
    });
}
