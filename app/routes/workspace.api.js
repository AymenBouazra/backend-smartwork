const express = require('express');
const { create, getAvailableWorkspaces, findAll, findOne, update, deleteOne } = require('../controllers/workspace.controller');
const router = express.Router();

router.post('/', create);
router.get('/available', getAvailableWorkspaces);
router.get('/', findAll);
router.get('/:id', findOne);
router.put('/:id', update);
router.delete('/:id', deleteOne);

module.exports = router;