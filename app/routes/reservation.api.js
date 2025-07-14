const express = require('express');
const { createReservation, getAllReservations, getReservationById, updateReservationById, deleteReservationById, getMyReservations } = require('../controllers/reservation.controller');

const router = express.Router();

router.post('/', createReservation);
router.get('/my', getMyReservations);
router.get('/', getAllReservations);
router.get('/:id', getReservationById);
router.put('/:id', updateReservationById);
router.delete('/:id', deleteReservationById); 

module.exports = router;