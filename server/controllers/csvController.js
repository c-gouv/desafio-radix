const inserirCsvRegistros = require('../models/csvModel');
const { PROCESS, SUCCESS, ERROR } = require('../middlewares/logMessages')
const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');

const etlArquivos = async(req, res) => {
    const caminhoArquivo = path.join(__dirname,'..', 'uploads', req.file.filename);

    const headerModelo = ['equipmentId', 'timestamp', 'value'];
    const registros = [];
    let isValid = true;

    fs.createReadStream(caminhoArquivo)
    .pipe(csv({}))
    .on('headers', (headers) => {
        if (!headerModelo.every(col => headers.includes(col))) {
            isValid = false;
        }
    })
    .on('data', (data) => registros.push(data))
    .on('end', async () => {
        if(!isValid){
            fs.unlinkSync(caminhoArquivo);
            return res.status(400).json({error: 'O CSV não possui uma das seguinte colunas: equipmentId; timestamp; value'});
        }
        try{
            await inserirCsvRegistros(registros);
            fs.unlinkSync(caminhoArquivo);
            res.status(201).send('Registros inseridos com SUCCESSo');
        } catch{
            fs.unlinkSync(caminhoArquivo);
            res.status(500).send('Erro ao inserir registros');
            console.log(ERROR, "Erro ao inserir registros")
        }
    })
    .on('error', (error) => {
        fs.unlinkSync(caminhoArquivo);
        res.status(500).json({error: 'Não foi possível ler o arquivo CSV:' + error.message});
    });
}

module.exports= { etlArquivos };