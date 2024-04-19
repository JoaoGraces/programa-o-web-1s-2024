let produtos = [];

function criarProduto(id, nome, qtd) {
    let produto = {
        id: id,
        nome: nome,
        qtd: qtd
    };
    return produto;
}

function adicionarProduto(produto) {
    produtos.push(produto);
}

function listarProdutos() {
    return produtos;
}

function removerProduto(id) {
    produtos = produtos.filter((produto) => produto.id !== id);
}

function editarProduto(id, novaQuantidade) {
    let produtoIndex = produtos.findIndex((produto) => produto.id === id);

    if (produtoIndex !== -1) {
        produtos[produtoIndex].qtd = novaQuantidade;
        return { success: true, message: `Quantidade do produto com ID ${id} atualizada para ${novaQuantidade}.` };
    } else {
        return { success: false, message: 'Produto não encontrado.' };
    }
}

module.exports = {
    criarProduto,
    adicionarProduto,
    listarProdutos,
    removerProduto,
    editarProduto
};
