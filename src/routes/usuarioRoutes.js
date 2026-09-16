const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');

const { verificarToken, verificarAdmin } = require('../middlewares/authMiddleware');

router.post('/login', authController.login);

router.get('/perfil', verificarToken, (req, res) => {
    res.json({ mensagem: `Bem-vindo ao seu perfil, usuário ${req.usuarioId}!` });
});

router.get('/admin/painel', verificarToken, verificarAdmin, (req, res) => {
    res.json({ mensagem: "Bem-vindo ao painel administrativo secreto!" });
});

module.exports = router;
