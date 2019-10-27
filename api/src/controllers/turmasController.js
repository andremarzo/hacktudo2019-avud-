'use strict';

const TurmasRepository = require('../repositories/TurmasRepository');


exports.get = (req, res) => {
    TurmasRepository.getAll()
                .then((turmas) => {            
                    res.status(200).send(turmas);
                }).catch(err => res.status(500).send(err))
};

exports.getById = (req, res) => {
    const _id = req.params.id;

    TurmasRepository.getById(_id)
        .then((turma) => {
            res.status(200).send(turma);
        }).catch(err => res.status(500).send(err))
};

exports.post = (req, res) => {
    const vm = req.body;
    TurmasRepository.create(vm)
        .then((turma) => {
            res.status(200).send(turma);
        }).catch(err => res.status(500).send(err))
};

exports.put = (req, res) => {
    const _id = req.params.id;
    const vm = req.body;

    TurmasRepository.update(_id, vm)
        .then((turma) => {
            res.status(201).send(turma);
        }).catch(err => res.status(500).send(err))
};


exports.update_arrecadacao = (req, res) => {
    const _id = req.params.id;
    const vm = req.body;

    TurmasRepository.update_arrecadacao(_id, vm)
        .then((turma) => {
            res.status(201).send(turma);
        }).catch(err => res.status(500).send(err))
};

exports.delete = (req, res) => {
    TurmasRepository.delete(req.params.id)
        .then(() => {
            res.status(200).send('registro deletado com sucesso!');
        }).catch(err => console.error.bind(console, `Error ${err}`))
};