const express = require('express');
const { create, findAll, findOne, update, delete: deleteWorkspace } = require('../controllers/workspace.controller');

const router = express.Router();

router.post('/', create);
router.get('/', findAll);
router.get('/:id', findOne);
router.put('/:id', update);
router.delete('/:id', deleteWorkspace);

module.exports = router;