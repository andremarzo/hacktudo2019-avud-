'use strict';
var db = require('../config/db');


module.exports = new class EmpresasRepository {

    getAll() {
        return db.Empresa.find();
    }

    getById(id) {
        return db.Empresa.findById(id);
    }

    create(escola) {
        return db.Empresa.create(escola);
    }

    update(id, empresa) {

        const updateempresa = {
            telefone: empresa.telefone
           
        }

        return db.Empresa.findByIdAndUpdate(id, updateempresa);
    }

    delete(id) {
        return db.Empresa.findByIdAndRemove(id);
    }
}

