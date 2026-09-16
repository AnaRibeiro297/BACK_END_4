const salt = await bcrypt.genSalt(10);
const senhaHash = await bcrypt.hash(senha, salt);

const senhaCorreta = await bcrypt.compare(senhaDigitada, usuario.senha);

const token = jwt.sign(
  { id: usuario.id, papel: usuario.papel }, 
  process.env.JWT_SECRET,
  { expiresIn: '8h' }
);
