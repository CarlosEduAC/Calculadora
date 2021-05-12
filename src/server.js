const express = require('express');
const app = express();

app.use(express.json());

app.post('/calculadora', (request, response) => {
  const { parcelaA, parcelaB, operador } = request.body;

  let resultado = 0;

  if (typeof parcelaA === 'string' || typeof parcelaB === 'string') {
    throw new Error('Coloca um valor válido, seu arrombado!');
  }

  switch (operador) {
    case '+': 
      resultado = parcelaA + parcelaB;
      break;
    case '-': 
      resultado = parcelaA - parcelaB;
      break;
    case 'x': 
      resultado = parcelaA * parcelaB;
      break;
    case '/': 
      resultado = parcelaA / parcelaB;
      break;
    default: 
      throw new Error('Coloca um operador válido, seu arrombado!');
  }

  return response.status(201).json({ resultado: resultado });
});

app.listen(3333, () => {
  console.log('🚀 Server is running!');
});