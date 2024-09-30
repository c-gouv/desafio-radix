const express = require("express");
const path = require("path");
const mysql = require("mysql");
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