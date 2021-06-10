const { Router } = require('express');

const { CalculadoraRepository } = require('../repositories');

const calculadoraRoutes = Router();

const calculadoraRepository = new CalculadoraRepository();

calculadoraRoutes.post('/', (request, response) => {
  const { parcelaA, parcelaB, operador } = request.body;

  const resultado = calculadoraRepository.calcular({ parcelaA, parcelaB, operador });

  return response.status(201).json({ resultado });
});

calculadoraRoutes.get('/historico', (request, response) => {
  const historico = calculadoraRepository.pegarHistorico();

  return response.status(200).json({ historico });
});

module.exports = { calculadoraRoutes };