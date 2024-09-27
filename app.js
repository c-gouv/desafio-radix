let express = require("express");
let path = require("path");
require('dotenv/config');

let app = express();

// chamando as rotas
let indexRouter = require("./src/routes/index");


// usando as rotas
app.use("/", indexRouter);

// configurando pra mexer em arquivo JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));


