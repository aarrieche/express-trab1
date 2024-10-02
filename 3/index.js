const express = require('express');
const app = express();

const fakeAuthMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];

  if (token) {
    next();
  } else {
    res.status(401).json({ error: '401: Não Autorizado' });
  }
};

app.get('/autenticacao', fakeAuthMiddleware, (req, res) => {
  res.json({ message: 'Acessado com token ok!' });
});

app.get('/', (req, res) => {
  res.json({ message: 'Bem-vindo a rota' });
});


const port = 3001;
app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});
