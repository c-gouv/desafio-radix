// let ambiente_processo= 'producao';
let ambiente_processo= 'desenvolvimento;'

let caminhoEnv = ambiente_processo == 'producao' ? '.env' : '.env.dev'
require('dotenv').config({ path: caminhoEnv });

const express = require("express");
const cors = require("cors");
const path = require("path");
const mysql = require("mysql");
const PORTA_APP = process.env.APP_PORT;
const HOST_APP = process.env.APP_HOST;
const corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
}

const app = express();

// chamando as rotas
const indexRouter = require("./src/routes/indexRouter");

// usando as rotas
app.use(cors(corsOptions));

app.use("/", indexRouter);

// configurando pra mexer em arquivo JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'build')));

app.listen(PORTA_APP, function(){
    console.log(`
    O AMBIENTE DA APLICAÇÃO É: ${ambiente_processo}
    O CAMINHO PARA A APLICAÇÃO É: http://${HOST_APP}:${PORTA_APP}`)
});