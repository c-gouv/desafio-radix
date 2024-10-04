// let ambienteProcesso= 'producao';
let ambienteProcesso= 'desenvolvimento;'
let caminhoEnv = ambienteProcesso == 'producao' ? '.env' : '.env.dev'
require('dotenv').config({ path: caminhoEnv });

const express = require("express");
const cors = require("cors");
const app = express();
const portaApp = process.env.APP_PORT;
const hostApp = process.env.APP_HOST;
const corsOptions = {
    origin: `http://${hostApp}:5173`
}

// Chamando as rotas
const indexRouter = require("./routes/index");
// const csvRouter = require("./routes/csvRouter");

// Usando as rotas
app.use(cors(corsOptions));
app.use("/api", indexRouter);
// app.use("/csv", csvRouter);

app.listen(portaApp, function(){
    console.log(`
    O AMBIENTE DA APLICAÇÃO É: ${ambienteProcesso}
    O CAMINHO PARA A APLICAÇÃO É: http://${hostApp}:${portaApp}`)
});