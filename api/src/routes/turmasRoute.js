const express = require('express');
const router = express.Router();
const controller = require('../controllers/turmasController')

router.get('/', controller.get);
router.get('/:id', controller.getById);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.put('/arrecadacao/:id', controller.update_arrecadacao);
router.delete('/:id', controller.delete);



module.exports = router;