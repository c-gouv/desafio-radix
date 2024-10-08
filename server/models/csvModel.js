const database = require('../database/config');

async function inserirCsvRegistros(registros){
    return database.executarMultiplos(async (conexao) => {
        for(const registro of registros){
            var instrucaoSql = `INSER INTO Registro (equipmentId, timestamp, value) VALUES (?, ?, ?)`;
            await conexao.query(instrucaoSql, [registro.equipmentId, registro.timestamp, registro.value]);
        }
    })   
}

module.exports = inserirCsvRegistros;