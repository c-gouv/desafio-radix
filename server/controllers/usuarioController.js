const database = require('../database/config');

const registerController = (req, res) => {
  const { nome, email, senha } = req.body;
  const userData = { nome, email, senha };

  userModel.create(userData, (err, userId) => {
    if (err) {
      console.error('Erro ao cadastrar usuário:', err);
      return res.status(500).json({ message: 'Erro ao cadastrar usuário.' });
    }
    res.status(201).json({ message: 'Usuário cadastrado com sucesso!', userId });
  });
};

const loginController = async (req, res) => {
  const { email, senha } = req.body;

  const query = 'SELECT * FROM usuarios WHERE email = ?';

  try {
    const results = await database.executarUnico(query, [email]);

    if (results.length === 0) {
      return res.status(401).json({ message: 'Email ou senha incorretos.' });
    }
    console.log(results);
    const user = results[0];

    if (senha !== user.senha) {
      return res.status(401).json({ message: 'Email ou senha incorretos.' });
    }

    res.status(200).json({ message: 'Login bem-sucedido!', userName: user.nome });
  } catch (err) {
    console.error('Erro ao buscar usuário:', err);
    return res.status(500).json({ message: 'Erro ao buscar usuário.' });
  }
};

module.exports = {
  registerController,
  loginController
};