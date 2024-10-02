const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.json());

app.post('/produtos', (req, res) => {
    const produto = req.body;
    produto.id = Date.now(); 

    res.status(201).json(produto);
});

app.listen(port, () => {
    console.log(`Rodando no http://localhost:${port}`);
});
