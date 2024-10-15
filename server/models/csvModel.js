const database = require('../database/config');
const { PROCESS, SUCCESS, ERROR } = require('../middlewares/logMessages')

async function inserirCsvRegistros(registros){
    console.log(PROCESS + "Estabelecendo conexão com o banco")
    
    return database.executarMultiplos(async (conexao) => {
        console.log(PROCESS, "INSERINDO NO BANCO");
        for(const registro of registros){
            var instrucaoSql = `INSERT INTO registros (equipmentId, timestamp, value) VALUES (?, ?, ?)`;
            await conexao.query(instrucaoSql, [registro.equipmentId, registro.timestamp, registro.value]);
        }
    })   
}

module.exports = inserirCsvRegistros;