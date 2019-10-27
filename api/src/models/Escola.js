var mongoose = require('mongoose');
var Schema = mongoose.Schema;
////////////////////////////////// Default de Toda Model


/// Declara Schema da Model
var EscolaSchema = new Schema({    
    nome: String,
    estado: String,
    municipio: String,
    bairro: String
});

/// Seta a Model no Mongoose
var Escola = mongoose.model('Escolas', EscolaSchema);

/// Exporta a Model
module.exports = Escola;