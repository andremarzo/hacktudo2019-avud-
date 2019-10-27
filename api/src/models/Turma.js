var mongoose = require('mongoose');
var Schema = mongoose.Schema;
////////////////////////////////// Default de Toda Model


/// Declara Schema da Model
var TurmaSchema = new Schema({
    identificador_turma: String,
    escola: [{ type: Schema.Types.ObjectId, ref: 'Escolas' }],
    total_arrecadado: Number
});

/// Seta a Model no Mongoose
var Turma = mongoose.model('Turmas', TurmaSchema);

/// Exporta a Model
module.exports = Turma;