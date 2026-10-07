const express = require('express');
const cors = require('cors');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
<<<<<<< HEAD:src/app.js

=======
const swaggerFile = require('./swagger_output.json');
>>>>>>> 4e253939f6d1227b6a015f3dd0ab95ad4a2dce1b:projetos/sabor_digital/src/app.js
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

<<<<<<< HEAD:src/app.js
module.exports = app;
=======
// Documentação da API com Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

module.exports = app;
>>>>>>> 4e253939f6d1227b6a015f3dd0ab95ad4a2dce1b:projetos/sabor_digital/src/app.js
