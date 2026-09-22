# 👨‍🏫 Guia do Professor: Resolução da Livraria ao Vivo

Este guia é um passo a passo prático para você copiar e colar durante a sua aula ao vivo ao resolver o exercício da **Livraria de E-books** junto com os alunos.

---

### Passo 1: Preparando o Terreno
No terminal, dentro da pasta `exercicios/livraria_ebooks`, instale as bibliotecas base (mostre para eles o porquê de cada uma):
```bash
npm install swagger-ui-express swagger-autogen
```

### Passo 2: Criando o "Robô" (Autogen)
Crie o arquivo `src/swagger.js`. Esse é o cara que vai ler nossas rotas e cuspir o JSON.
Cole o código abaixo:

```javascript
const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'API Livraria de E-books',
        description: 'Documentação automática gerada em aula',
        version: '1.0.0'
    },
    host: 'localhost:3000',
    schemes: ['http'],
};

// Aqui definimos que o JSON deve ser gerado DENTRO da pasta src
const outputFile = './swagger_output.json'; 
const endpointsFiles = ['./routes/index.js']; // Apontamos para o arquivo central de rotas

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    console.log("Documentação gerada com sucesso!");
});
```

### Passo 3: Gerando o Contrato
No terminal, rode o script do robô:
```bash
node src/swagger.js
```
*(Mostre para os alunos que o arquivo `swagger_output.json` acabou de nascer magicamente na pasta `src`)*.

### Passo 4: Exibindo a Tela (App.js)
Abra o `src/app.js` e faça a "pintura" do JSON gerado usando o Express.
Modifique o arquivo para ficar assim:

```javascript
const express = require('express');
const cors = require('cors');
// 1. Importando o swagger UI e o arquivo gerado
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');

const app = express();
const routes = require('./routes');

app.use(cors());
app.use(express.json());

// 2. Criando a rota de visualização
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(routes);

module.exports = app;
```

### Passo 5: O Momento "Uau" (Analise o Controller)
Mostre a tela do Swagger rodando (`npm start` -> `localhost:3000/api-docs`). 
Abra o método de POST e mostre que o body está perfeitamente documentado. 
Em seguida, abra o `src/controllers/LivroController.js` e mostre o comentário mágico:
```javascript
/*  #swagger.parameters['body'] = {
        in: 'body',
        description: 'Dados do novo livro',
        schema: {
            $titulo: 'Clean Architecture',
            $autor: 'Robert C. Martin',
            $preco: 105.90,
            paginas: 432
        }
    }
*/
```
**Conclusão da Aula:** Diga aos alunos que esse é o poder da documentação viva! O Controller gera a tela. O próximo passo (Loja de Jogos) será o desafio onde eles próprios farão esses comentários ou usarão Inteligência Artificial para gerar tudo.
