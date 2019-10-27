'use strict';

const EscolasRepository = require('../repositories/escolasRepository');


exports.get = (req, res) => {
    EscolasRepository.getAll()
                .then((escola) => {            
                    res.status(200).send(escola);
                }).catch(err => res.status(500).send(err))
};

exports.getById = (req, res) => {
    const _id = req.params.id;

    EscolasRepository.getById(_id)
        .then((escola) => {
            res.status(200).send(escola);
        }).catch(err => res.status(500).send(err))
};

exports.post = (req, res) => {
    const vm = req.body;
    EscolasRepository.create(vm)
        .then((escola) => {
            res.status(200).send(escola);
        }).catch(err => res.status(500).send(err))
};

exports.put = (req, res) => {
    const _id = req.params.id;
    const vm = req.body;

    EscolasRepository.update(_id, vm)
        .then((escola) => {
            res.status(201).send(escola);
        }).catch(err => res.status(500).send(err))
};

exports.delete = (req, res) => {
    EscolasRepository.delete(req.params.id)
        .then(() => {
            res.status(200).send('registro deletado com sucesso!');
        }).catch(err => console.error.bind(console, `Error ${err}`))
};