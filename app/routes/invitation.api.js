const express = require('express');
const router = express.Router();
const  { sendInvitation, getInvitation } = require('../controllers/invitation.controller');

router.post('/', sendInvitation);
router.get('/:id', getInvitation);

module.exports = router;