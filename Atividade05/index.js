const express = require('express');
const estoque = require('./estoque');
const app = express();

app.get('/adicionar/:id/:nome/:qtd', function (req, res) {
    let id = req.params.id;
    let nome = req.params.nome;
    let qtd = parseInt(req.params.qtd);
    let produto = estoque.criarProduto(id, nome, qtd);
    estoque.adicionarProduto(produto);
    res.send(produto);
});

app.get('/listar', function (req, res) {
    res.send(estoque.listarProdutos());
});

app.get('/remover/:id', function (req, res) {
    let id = req.params.id;
    estoque.removerProduto(id);
    res.send(id);
});

app.get('/editar/:id/:qtd', function (req, res) {
    let id = req.params.id;
    let novaQuantidade = parseInt(req.params.qtd);

    let resultado = estoque.editarProduto(id, novaQuantidade);

    if (resultado.success) {
        res.send(resultado.message);
    } else {
        res.status(404).send(resultado.message);
    }
});

const PORT = 8080;
app.listen(PORT, function () {
    console.log('App rodando na porta ' + PORT);
});
