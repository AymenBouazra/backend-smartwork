const express = require('express');
const { register, login, getUser, updateUserAndLogin, resetPassword, forgotPassword } = require('../controllers/auth.controller');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.put('/updateAndLogin/:id', updateUserAndLogin);
router.post('/user', getUser);
router.post('/forgotPassword', forgotPassword);
router.put('/resetPassword/:token', resetPassword);

module.exports = router;