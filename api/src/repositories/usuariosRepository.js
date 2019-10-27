'use strict';
var db = require('../config/db');


module.exports = new class UsuariosRepository {

    getAll() {
        let usuarios = db.Usuario.find().populate({
            path:"turma",
            model:"Turmas",
            populate : {
                path:"escola",
                model:"Escolas",
              }
          }).populate({
            path:"empresa",
            model:"Empresas"}).exec();

          return usuarios;
        }

    getById(id) {
        let usuario = db.Usuario.findById(id).populate({
            path:"turma",
            model:"Turmas",
            populate : {
                path:"escola",
                model:"Escolas",
              }
          }).populate({
            path:"empresa",
            model:"Empresas"}).exec();

          return usuario;
    }

    create(usuario) {
        return db.Usuario.create(usuario);
    }

    update(id, usuario) {

        const updatedusuario = {
            nome: usuario.nome,
            sobrenome: usuario.sobrenome,
            email: usuario.email,
            cpf: usuario.cpf
        }

        return db.Usuario.findByIdAndUpdate(id, updatedusuario);
    }

    delete(id) {
        return db.Usuario.findByIdAndRemove(id);
    }
}

