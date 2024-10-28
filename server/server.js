// let ambienteProcesso= 'producao';
let ambienteProcesso= 'desenvolvimento';
let caminhoEnv = ambienteProcesso === 'producao' ? '.env' : '.env.dev'
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
const csvRouter = require("./routes/csvRouter");
const graphDataRouter = require("./routes/graphDataRouter");
const userRouter = require("./routes/userRouter");
const highestDataRouter = require('./routes/highestDataRouter');

// Usando as rotas
app.use(express.json());
app.use(cors(corsOptions));
app.use("/upload", csvRouter);
app.use("/graphData", graphDataRouter);
app.use("/users", userRouter)
app.use("/highestData", highestDataRouter)

app.listen(portaApp, function(){
    console.log(`
    O AMBIENTE DA APLICAÇÃO É: ${ambienteProcesso}
    O CAMINHO PARA A APLICAÇÃO É: http://${hostApp}:${portaApp}`)
});