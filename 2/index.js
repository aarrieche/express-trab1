const express = require('express');
const app = express();

const port = 3001;

app.get('/saudacao/:nome', (req, res) => {
  const nome = req.params.nome;
  res.send(`Olá ${nome}!`); 
});

app.listen(port, () => {
  console.log(`Rodando em http://localhost:${port}`);
});
