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
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
 });

module.exports = app;