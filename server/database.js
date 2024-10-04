const mysql = require("mysql2/promise");

// Config conexão banco
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// Função q executa os comandos
async function executar(instrucao) {
  try {
    const [resultados] = await pool.query(instrucao);
    return resultados;
  } catch (erro) {
    console.error("Erro ao executar a consulta:", erro);
    throw erro;
  }
}

module.exports = {
  executar,
};