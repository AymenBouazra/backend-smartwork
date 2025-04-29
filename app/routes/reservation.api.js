const express = require('express');
const { createReservation, getAllReservations, getReservationById, updateReservationById, deleteReservationById } = require('../controllers/reservation.controller');

const router = express.Router();

router.post('/', createReservation);
router.get('/', getAllReservations);
router.get('/:id', getReservationById);
router.put('/:id', updateReservationById);
router.delete('/:id', deleteReservationById); 

module.exports = router;