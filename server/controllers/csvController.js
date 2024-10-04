var csvModel = require('../models/csvModel');

function importarArquivos(req, res){
    const csv = require('csv-parser');
    const fs = require('fs');
    
    const registros = [];

    fs.createReadStream('')
    .pipe(csv({}))
    .on('data', (data) => registros.push(data))
    .on('end', () => {
        console.log('registros')
    });
}