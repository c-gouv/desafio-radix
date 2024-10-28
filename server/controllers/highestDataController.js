const database = require('../database/config');

const highestDataController = async (range) => {
    console.log(range)
    let rangeValue = '';
    let periodoQuery = "DATE_FORMAT(DATE(timestamp), '%d/%m/%Y')";
    console.log(range);
    switch (range) {
        case '24h':
            rangeValue = '24 HOUR';
            periodoQuery = `DATE_FORMAT(timestamp, '%H:%i:%s')`
            break;
        case '48h':
            rangeValue = '48 HOUR';
            periodoQuery = `DATE_FORMAT(timestamp, '%H:%i:%s')`
            break;
        case '1s':
            rangeValue = '7 DAY';
            break;
        case '1m':
            rangeValue = '30 DAY';
            break;
        default:
            throw new Error("Invalid time range specified");
    }

    const query = `
        SELECT equipmentId, ${periodoQuery} as periodo, value 
        FROM registros 
        WHERE timestamp >= DATE_SUB(NOW(), INTERVAL ${rangeValue})
        ORDER BY value DESC
        LIMIT 8; `
    ;

    try {
        const resultados = await database.executarUnico(query);
        return resultados;
    } catch (error) {
        console.error('Erro ao buscar os valores:', error.message); // Log da mensagem de erro
        throw new Error(`Erro no banco de dados: ${error.message}`); // Mensagem mais clara
    }
};

const allAvgController = async (range, filter) => {
    let rangeValue = '';
    switch (range) {
        case '24h':
            rangeValue = '24 HOUR';
            break;
        case '48h':
            rangeValue = '48 HOUR';
            break;
        case '1s':
            rangeValue = '7 DAY';
            break;
        case '1m':
            rangeValue = '30 DAY';
            break;
        default:
            throw new Error("Invalid time range specified");
    }

    const query = `
        SELECT equipmentId, AVG(value) as avg_value
        FROM registros 
        WHERE timestamp >= DATE_SUB(NOW(), INTERVAL ${rangeValue})
        GROUP BY equipmentId
        ORDER BY avg_value ${filter}
        LIMIT 8; `
    ;

    try {
        const resultados = await database.executarUnico(query);
        return resultados;
    } catch (error) {
        console.error('Erro ao buscar os valores:', error.message); // Log da mensagem de erro
        throw new Error(`Erro no banco de dados: ${error.message}`); // Mensagem mais clara
    }
};


module.exports = {
    highestDataController,
    allAvgController
};