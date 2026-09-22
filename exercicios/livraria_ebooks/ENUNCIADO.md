# 📚 Exercício: Documentando uma Livraria de E-books

Neste exercício, você recebeu o código de uma **API de uma Livraria de E-books** que já está 100% pronta e funcional, criada com o padrão MVC.

## 🎯 O Seu Desafio

Sua missão é atuar como o **Arquiteto de Software** deste projeto. Você deve instalar e configurar o **Swagger / OpenAPI** para documentar todas as rotas existentes, tornando a API usável para a equipe de Front-end.

### 📝 Passo a Passo da Missão:

1. **Instalação das Bibliotecas**
   - Instale as bibliotecas `swagger-ui-express` e `swagger-autogen` usando o npm.
   
2. **Criação do Script Autogen**
   - Na pasta `src/`, crie o arquivo `swagger.js`.
   - Configure as informações básicas (Título: "API Livraria", Versão, etc).
   - Aponte o arquivo de saída para `./swagger_output.json` e as rotas para `['./src/routes/index.js']`.

3. **Geração Inicial**
   - Rode o comando `node src/swagger.js` para gerar o seu contrato JSON pela primeira vez.

4. **Integração no App.js**
   - Modifique o arquivo `src/app.js` importando o `swagger-ui-express` e o arquivo JSON que foi gerado.
   - Crie a rota `/api-docs` para renderizar a interface gráfica do Swagger.

5. **Analisando a Mágica (O Pulo do Gato)**
   - Abra o arquivo `src/controllers/LivroController.js`.
   - Repare que nós já deixamos comentários mágicos (Ex: `#swagger.parameters['body'] = ...`) nos métodos de `cadastrar` e `atualizar`.
   - Analise como o schema foi escrito. É assim que o autogen entende os campos e monta a tela bonitinha para nós!

6. **Validação Final**
   - Rode a aplicação (`npm start` ou `node --watch src/server.js`) e entre em `http://localhost:3000/api-docs`.
   - Teste o cadastro de um novo livro pelo próprio Swagger!

Boa sorte, Engenheiro! 🚀
