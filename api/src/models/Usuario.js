var mongoose = require('mongoose');
var Schema = mongoose.Schema;
////////////////////////////////// Default de Toda Model


/// Declara Schema da Model
var UsuarioSchema = new Schema({    
    nome: String,
    sobrenome: String,
    email: String, 
    cpf: String,
    turma: {
        type: Schema.Types.ObjectId,
        required: false,
        ref: 'Turmas'
     },
     empresa: {
        type: Schema.Types.ObjectId,
        required: false,
        ref: 'Empresas'
     }
});

/// Seta a Model no Mongoose
var Usuario = mongoose.model('Usuario', UsuarioSchema);

/// Exporta a Model
module.exports = Usuario;