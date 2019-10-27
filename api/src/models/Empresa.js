var mongoose = require('mongoose');
var Schema = mongoose.Schema;
////////////////////////////////// Default de Toda Model


/// Declara Schema da Model
var EmpresaSchema = new Schema({    
    nome: String,
    estado: String,
    municipio: String,
    bairro: String,
    telefone: String
});

/// Seta a Model no Mongoose
var Empresa = mongoose.model('Empresas', EmpresaSchema);

/// Exporta a Model
module.exports = Empresa;