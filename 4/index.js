const express = require('express');
const app = express();
const port = 3001;

const produtos = [
    { id: 1, nome: 'Nike SB', categoria: 'tenis', preco: 299 },
    { id: 2, nome: 'Air Force One', categoria: 'tenis', preco: 599 },
    { id: 3, nome: 'Camiseta Dry fit', categoria: 'roupas', preco: 89 },
    { id: 4, nome: 'Short Dry fit', categoria: 'roupas', preco: 79 },
];

app.get('/produtos', (req, res) => {
    const { categoria, precoMax } = req.query;

    let resultado = produtos;
    if (categoria) {
        resultado = resultado.filter(produto => produto.categoria === categoria);
    }

    if (precoMax) {
        resultado = resultado.filter(produto => produto.preco <= Number(precoMax));
    }

    res.json(resultado);
});

app.listen(port, () => {
    console.log(`Rodando no http://localhost:${port}`);
});
