const mysql = require('mysql2');
require('dotenv').config();

const configConexao = mysql.createPool ({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
});

// Executa apenas uma instrução por vez
async function executarUnico(sql, params = []) {
    const conexao = await configConexao.getConnection();
    try {
        const [resultados] = await conexao.query(sql, params);
        return resultados;
    } catch (error) {
        console.error('Erro ao excutar instrução:', error);
        throw error;
    } finally {
        conexao.release();
    }
};
  
// Executa várias instruções de um mesmo tipo de uma vez, além de permitir rollback caso dê erro
async function executarMultiplos(transactionCallback) {
    const conexao = await pool.getConnection();
    try {
        await conexao.beginTransaction();
        const resultados = await transactionCallback(conexao);
        await conexao.commit();
        return resultados;
    } catch (error) {
        await conexao.rollback();
        console.error('Erro ao executar a transação:', error);
        throw error;
    } finally {
        conexao.release();
    }
};
  
module.exports = {
    configConexao,
    executarUnico,
    executarMultiplos
};