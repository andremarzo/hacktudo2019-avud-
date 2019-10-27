'use strict';
var db = require('../config/db');


module.exports = new class TurmasRepository {

    getAll() {
        let turmas = db.Turma.find().populate({
            path:"escola",
            model:"Escolas"
          }).exec();

          return turmas;
    }

   getById(id) {
        let turma = db.Turma.findById(id).populate({
            path:"escola",
            model:"Escolas"
          }).exec();
        
          return turma;
    }

    create(turma) {
        return db.Turma.create(turma);
    }

    update(id, turma) {

        const updatedturma = {            
            identificador: turma.updatedturma
        }
        return db.Turma.findByIdAndUpdate(id, updatedproduto);
    }

    async update_arrecadacao(id, turma) {

        let turma_ = await db.Turma.findById(id);        
        const updatedturma = {            
            total_arrecadado: turma_.total_arrecadado += turma.total_arrecadado
        }
        return db.Turma.findByIdAndUpdate(id, updatedturma);
    }

    delete(id) {
        return db.Turma.findByIdAndRemove(id);
    }
}

