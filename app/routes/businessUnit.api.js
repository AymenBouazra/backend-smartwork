const express = require('express');
const router = express.Router();

const { getAll, getOne, create, update, delete: deleteBusinessUnit } = require('../controllers/businessUnit.controller');

router.get('/', getAll);
router.get('/:id', getOne);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', deleteBusinessUnit);

module.exports = router;