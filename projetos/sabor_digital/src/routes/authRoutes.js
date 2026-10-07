const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/UsuarioController');

<<<<<<< HEAD:src/routes/authRoutes.js
router.post('/registrar', UsuarioController.registrar);
router.post('/login', UsuarioController.login);

module.exports = router;
=======
// Rota para cadastrar um novo usuário (Pode ser aberta ou bloqueada no futuro)
router.post('/registrar', UsuarioController.registrar);

// Rota de Login (Recebe email e senha, devolve o token)
router.post('/login', UsuarioController.login);

module.exports = router;
>>>>>>> 4e253939f6d1227b6a015f3dd0ab95ad4a2dce1b:projetos/sabor_digital/src/routes/authRoutes.js
