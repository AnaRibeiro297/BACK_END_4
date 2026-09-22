# 🎮 Exercício: Documentando uma Loja de Jogos

Neste exercício, você recebeu o código de uma **API de uma Loja de Jogos** que já está 100% pronta e funcional, criada com o padrão MVC.

## 🎯 O Seu Desafio

Sua missão é atuar como o **Arquiteto de Software** deste projeto. Você deve instalar e configurar o **Swagger / OpenAPI** para documentar todas as rotas existentes, tornando a API usável para a equipe de Front-end e para possíveis integrações com outras lojas.

### 📝 Passo a Passo da Missão:

1. **Instalação das Bibliotecas**
   - Instale as bibliotecas `swagger-ui-express` e `swagger-autogen` usando o npm.
   
2. **Criação do Script Autogen**
   - Na pasta `src/`, crie o arquivo `swagger.js`.
   - Configure as informações básicas (Título: "API Loja de Jogos", Versão, etc).
   - Aponte o arquivo de saída para `./swagger_output.json` e as rotas para `['./src/routes/index.js']`.

3. **Geração Inicial**
   - Rode o comando `node src/swagger.js` para gerar o seu contrato JSON pela primeira vez.

4. **Integração no App.js**
   - Modifique o arquivo `src/app.js` importando o `swagger-ui-express` e o arquivo JSON que foi gerado.
   - Crie a rota `/api-docs` para renderizar a interface gráfica do Swagger.

5. **Documentação Avançada (A Avaliação Final)**
   - O schema esperado de um jogo possui os campos: `nome` (string), `desenvolvedora` (string), `preco` (number) e `anoLancamento` (number).
   - Você tem **DUAS OPÇÕES** para concluir este desafio. Escolha o caminho que preferir:
     - **Opção A (O Caminho do Autogen):** Abra o `src/controllers/JogoController.js`, preencha o schema no comentário de modelo que deixamos lá e rode o script do `swagger-autogen` novamente.
     - **Opção B (O Caminho do Engenheiro do Futuro):** Pegue todo o código desta API, envie para uma Inteligência Artificial (ChatGPT, Gemini, Claude, etc.) usando um bom Prompt de Engenharia, e peça para a IA gerar o arquivo `swagger_output.json` inteiro para você! (Se escolher isso, não precisará usar o autogen).

6. **Validação Final**
   - Rode a aplicação (`npm start` ou `node --watch src/server.js`) e entre em `http://localhost:3001/api-docs`. (Atenção, a porta da loja de jogos é a 3001).
   - Teste o cadastro de um novo jogo pelo próprio Swagger!

Boa sorte, Engenheiro! 🚀
