<<<<<<< HEAD:src/swagger.js
// 1. Importamos a biblioteca e já a executamos chamando ()
const swaggerAutogen = require('swagger-autogen')();

// 2. Definimos as informações básicas da nossa API
=======
const swaggerAutogen = require('swagger-autogen')();

>>>>>>> 4e253939f6d1227b6a015f3dd0ab95ad4a2dce1b:projetos/sabor_digital/src/swagger.js
const doc = {
    info: {
        title: 'Sabor Digital API',
        description: 'Documentação automática da API Sabor Digital utilizando Swagger Autogen',
        version: '1.0.0'
    },
    host: 'localhost:3000',
    schemes: ['http'],
<<<<<<< HEAD:src/swagger.js
    
    // 3. (Muito Importante) Configuramos que nossa API usa Token JWT
    // Isso fará o botão de "Cadeado" (Authorize) aparecer na tela!
=======
>>>>>>> 4e253939f6d1227b6a015f3dd0ab95ad4a2dce1b:projetos/sabor_digital/src/swagger.js
    securityDefinitions: {
        bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT'
        }
    }
};

<<<<<<< HEAD:src/swagger.js
// 4. Onde o arquivo JSON mágico será salvo?
const outputFile = './swagger_output.json';

// 5. Qual arquivo o robô deve ler para encontrar nossas rotas?
// Ele vai ler o index.js de rotas, que por sua vez importa todas as outras!
const endpointsFiles = ['./src/routes/index.js']; 

// 6. Finalmente, mandamos o robô trabalhar!
swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    console.log("Documentação do Swagger gerada com sucesso!");
});
=======
const outputFile = './swagger_output.json';
const endpointsFiles = ['./src/routes/index.js']; 

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    console.log("Documentação do Swagger gerada com sucesso!");
});
>>>>>>> 4e253939f6d1227b6a015f3dd0ab95ad4a2dce1b:projetos/sabor_digital/src/swagger.js
