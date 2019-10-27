var mongoose = require('mongoose');
var dotenv = require('dotenv').config();

mongoose.connect(process.env.MONGO_URL, {
useUnifiedTopology: true,
useNewUrlParser: true,})
.then(() => console.log('Pica two Fly'))
.catch(err => {
console.log(Error, err.message);
});
////////////////////////Não alterar//////////////////////////


////// Declara as Models
const Escola = require('../models/Escola')
const Usuario = require('../models/Usuario')
const Turma = require('../models/Turma')
const Empresa = require('../models/Empresa')

///// Exporta as Models
module.exports = { Escola, Usuario, Turma, Empresa };

