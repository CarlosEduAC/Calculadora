const { Router } = require('express');

const { calculadoraRoutes } = require('./calculadora.routes');
const { usersRoutes } = require('./usuarios.routes');

const routes = Router();

routes.use('/usuario', usersRoutes);
routes.use('/calculadora', calculadoraRoutes);

module.exports = { routes }
