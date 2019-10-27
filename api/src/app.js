const express = require('express');
const app = express();
const bodyParser = require("body-parser");

//Rotas
const index = require('./routes/index');

//encoded usado nos Forms
app.use(bodyParser.urlencoded({
    extended: true
}));
//encoded usado nos Forms
app.use(bodyParser.json());

//detecta todas as rotas na pasta routes
app.use('/', index);


module.exports = app;