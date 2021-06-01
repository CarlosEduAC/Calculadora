const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const historico = [];

const usuarios = [];

app.post('/cadastro', (request, response) => {
  const { nome, email, senha } = request.body;

  const existeUsuario = usuarios.find(usuario => usuario.email === email);

  if (existeUsuario) {
    throw new Error('Usuário já cadastrado');
  }

  usuarios.push({ nome, email, senha });

  return response.status(201).json({ resultado: { nome, email, senha } });
});

app.post('/calculadora', (request, response) => {
  const { parcelaA, parcelaB, operador } = request.body;

  let resultado = 0;

  if (typeof parcelaA === 'string' || typeof parcelaB === 'string') {
    throw new Error('Coloca um valor válido!');
  }

  switch (operador) {
    case '+':
      resultado = parcelaA + parcelaB;
      break;
    case '-':
      resultado = parcelaA - parcelaB;
      break;
    case '*':
      resultado = parcelaA * parcelaB;
      break;
    case '/':
      resultado = parcelaA / parcelaB;
      break;
    default:
      throw new Error('Coloca um operador válido!');
  }

  if (!resultado) {
    throw new Error('Operação não suportada!');
  }

  historico.push({
    parcelaA,
    parcelaB,
    operador,
    resultado
  })

  return response.status(201).json({ resultado: resultado });
});

app.get('/historico', (request, response) => {
  return response.status(200).json({ historico });
});

app.listen(3003, () => {
  console.log('🚀 Server is running!');
});