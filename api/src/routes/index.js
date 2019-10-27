const express = require('express');
const router = express.Router();
//////////// import routes here
const indexRouter = require('./indexRouter');
const escolasRoute = require('./escolasRoute');
const usuariosRoute = require('./usuariosRoute');
const turmasRoute = require('./turmasRoute');
const empresasRoute = require('./empresasRoute');

//////////// define routes api here
router.use('/api/', indexRouter);
router.use('/api/escolas', escolasRoute);
router.use('/api/usuarios', usuariosRoute);
router.use('/api/turmas', turmasRoute);
router.use('/api/empresas', empresasRoute);

module.exports = router;