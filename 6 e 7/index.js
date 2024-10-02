const express = require('express');
const app = express();
app.use(express.json());

const validarDados = (req, res, next) => {
    const { nome, email } = req.body;

    if (!nome || typeof nome !== 'string') {
        return res.status(400).json({ erro: 'Nome inválido!' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        return res.status(400).json({ erro: 'Email inválido!' });
    }

    next();
};

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ erro: 'Ocorreu um erro!' });
});


app.post('/cadastrar', validarDados, (req, res) => {
    res.status(201).json({ mensagem: 'Cadastro realizado!' });
});

app.get('/erro', (req, res) => {
    throw new Error('erro teste qualquer');
});

app.listen(3001, () => {
    console.log('rodando');
});

