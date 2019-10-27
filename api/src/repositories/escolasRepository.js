'use strict';
var db = require('../config/db');


module.exports = new class EscolasRepository {

    getAll() {
        return db.Escola.find();
    }

    getById(id) {
        return db.Escola.findById(id);
    }

    create(escola) {
        return db.Escola.create(escola);
    }

    update(id, escola) {

        const updatedescola = {
            cod_cliente: escola.cod_cliente
           
        }

        return db.Escola.findByIdAndUpdate(id, updatedescola);
    }

    delete(id) {
        return db.Escola.findByIdAndRemove(id);
    }
}

