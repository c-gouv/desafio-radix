const database = require('../database/config');

const getData = async (range) => {
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

    query = `SELECT equipmentId, ROUND(AVG(value), 2) AS average_value
           FROM registros
           WHERE timestamp >= DATE_SUB(NOW(), INTERVAL ${rangeValue})
           GROUP BY equipmentId
           LIMIT 5;`;

    const rows = await database.executarUnico(query);

    const labels = rows.map(row => row.equipmentId);
    console.log("Labes:", labels)
    const values = rows.map(row => parseFloat(row.average_value));
    console.log("Values:", values)

    return {
        labels,
        values
    };
};

module.exports = { getData };