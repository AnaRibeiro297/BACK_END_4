const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// Substitua o caminho abaixo pelo local correto do seu modelo de Usuário
const Usuario = require('../models/Usuario'); 

const login = async (req, res) => {
    const { email, senha } = req.body;

    // Validação básica de entrada
    if (!email || !senha) {
        return res.status(400).json({ mensagem: "E-mail e senha são obrigatórios" });
    }

    try {
        const usuario = await Usuario.findOne({ email }); // Se usar Sequelize, mude para: await Usuario.findOne({ where: { email } })

        if (!usuario) {
            return res.status(401).json({ mensagem: "E-mail ou senha incorretos" });
        }

        const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
        if (!senhaCorreta) {
            return res.status(401).json({ mensagem: "E-mail ou senha incorretos" });
        }

        const token = jwt.sign(
            { id: usuario._id || usuario.id, papel: usuario.papel }, 
            process.env.JWT_SECRET, 
            { expiresIn: '8h' }
        );

        return res.status(200).json({
            mensagem: "Login realizado com sucesso",
            token,
            usuario: {
                id: usuario._id || usuario.id,
                email: usuario.email,
                papel: usuario.papel
            }
        });

    } catch (error) {
        console.error("Erro no login:", error);
        return res.status(500).json({ mensagem: "Erro interno no servidor" });
    }
};

module.exports = { login };
