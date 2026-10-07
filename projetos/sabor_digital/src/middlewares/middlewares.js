const jwt = require('jsonwebtoken');

const verificarToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ mensagem: "Token não fornecido" });
    
    const token = authHeader.split(' ')[1]; 
    if (!token) return res.status(401).json({ mensagem: "Token mal formatado" });

    try {
        const decodificado = jwt.verify(token, process.env.JWT_SECRET);
        
        req.usuarioId = decodificado.id;
        req.usuarioPapel = decodificado.papel;
        
        return next(); 
    } catch (err) {
        return res.status(401).json({ mensagem: "Token inválido ou expirado" });
    }
};

const verificarAdmin = (req, res, next) => {
    if (req.usuarioPapel !== 'admin') {
        return res.status(403).json({ mensagem: "Acesso restrito para administradores" });
    }
    return next();
};

module.exports = { verificarToken, verificarAdmin };
