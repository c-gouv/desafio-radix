const { inserirCsvRegistros } = require('../models/csvModel');
const { PROCESS, SUCESS, ERROR } = require('../middlewares/logMessages')
const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');

const etlArquivos = async(req, res) => {
    const caminhoArquivo = path.join(__dirname,'..', 'uploads', req.file.filename);
    console.log(SUCESS, "Caminho e arquivo csv encontrados");

    const headerModelo = ['equipmentId', 'timestamp', 'value'];
    const registros = [];
    let isValid = true;

    console.log(PROCESS, "Transformando csv em objeto")
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
        console.log(SUCESS, "Arquivo csv lido e transformado em objeto")

        try{
            console.log(PROCESS, "Inserindo no banco")
            await inserirCsvRegistros(registros);
            fs.unlinkSync(caminhoArquivo);
            res.status(201).send('Registros inseridos com sucesso');
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