const express = require('express');
const cors = require('cors');
const path = require('path');
const swaggerUi = require('swagger-ui-express');

const app = express();

const routes = require('./routes');
const swaggerDocument = require('./swagger_output.json');

// Middlewares globais
app.use(cors());
app.use(express.json());

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Servir arquivos estáticos
app.use('/public', express.static(path.join(__dirname, '..', 'public')));

// Registro de todas as rotas da API
app.use('/', routes);

module.exports = app;
