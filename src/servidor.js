const port = 80;

const express= require('express');
const app = express();
const bodyParser = require('body-parser');
const bancoDeDados = require('./bancoDeDados');
const { response } = require('express');

app.use(bodyParser.urlencoded({extended: true}))

app.get('/produtos', (req, res) => {
    res.send(bancoDeDados.getProdutos());
})

app.get('/produtos/:id', (req, res) =>{
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos/:id', (req, res) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.put('/produto/:id', (req, res) =>{
    const produtos = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome:req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete('/produtos/:id', (req, res) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto);
})

app.listen(port, () =>{
    console.log("Api no ar")
})