// var csvModel = require('../models/csvModel');
const csv = require('csv-parser');
const fs = require('fs');

function etlArquivos(req, res){
    const caminhoArquivo = path.join(__dirname, '../uploads', req.file.filename);

    const headerModelo = ['equipmentId', 'timestamp', 'value'];
    const registros = [];
    let isValid = true;

    fs.createReadStream('')
    .pipe(csv({}))
    .on('headers', (headers) => {
        if (!headerModelo.every(col => headers.includes(col))) {
            isValid = false;
        }
    })
    .on('data', (data) => registros.push(data))
    .on('end', () => {
        if(!isValid){
            fs.unlinkSync(caminhoArquivo);
            return res.status(400).json({error: 'O CSV não possui uma das seguinte colunas: equipmentId; timestamp; value'});
        }

        fs.unlinkSync(caminhoArquivo)
        res.status(200).json({message: 'Arquivo CSV lido com sucesso', data: registros});
    })
    .on('error', (error) => {
        fs.unlinkSync(caminhoArquivo);
        res.status(500).json({error: 'Não foi possível ler o arquivo CSV:' + error.message});
    });
}

module.exports= {
    etlArquivos
};