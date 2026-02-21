async function carregarSecao(secao) {
    const resposta = await fetch(`data/${secao}.json`);
    if (!resposta.ok) return null;
    return await resposta.json();
}
