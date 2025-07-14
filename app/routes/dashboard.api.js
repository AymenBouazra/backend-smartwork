const express = require('express');
const { getDailyOccupancy } = require('../controllers/dashboard.controller');
const router = express.Router();

router.get('/occupancy', getDailyOccupancy);

module.exports = router;
