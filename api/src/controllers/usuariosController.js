'use strict';

const UsuariosRepository = require('../repositories/usuariosRepository');


exports.get = (req, res) => {
    UsuariosRepository.getAll()
                .then((usuario) => {            
                    res.status(200).send(usuario);
                }).catch(err => res.status(500).send(err))
};

exports.getById = (req, res) => {
    const _id = req.params.id;

    UsuariosRepository.getById(_id)
        .then((usuario) => {
            res.status(200).send(usuario);
        }).catch(err => res.status(500).send(err))
};

exports.post = (req, res) => {
    const vm = req.body;
    UsuariosRepository.create(vm)
        .then((usuario) => {
            res.status(200).send(usuario);
        }).catch(err => res.status(500).send(err))
};

exports.put = (req, res) => {
    const _id = req.params.id;
    const vm = req.body;

    UsuariosRepository.update(_id, vm)
        .then((usuario) => {
            res.status(201).send(usuario);
        }).catch(err => res.status(500).send(err))
};

exports.delete = (req, res) => {
    UsuariosRepository.delete(req.params.id)
        .then(() => {
            res.status(200).send('registro deletado com sucesso!');
        }).catch(err => console.error.bind(console, `Error ${err}`))
};