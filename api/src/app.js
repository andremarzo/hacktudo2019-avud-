const express = require('express');
const app = express();
const bodyParser = require("body-parser");
var cors = require('cors')

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

app.use(cors())
app.options('*', cors());

module.exports = app;