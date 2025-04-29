const Reservation = require('../models/reservation'); 

exports.createReservation = async (req, res) => {
 try {
 const reservation = new Reservation(req.body);
 await reservation.save();
 res.status(201).send(reservation);
 } catch (error) {
 res.status(400).send(error);
 }
};

exports.getAllReservations = async (req, res) => {
 try {
 const reservations = await Reservation.find();
 res.status(200).send(reservations);
 } catch (error) {
 res.status(500).send(error);
 }
};

exports.getReservationById = async (req, res) => {
 try {
 const reservation = await Reservation.findById(req.params.id);
 if (!reservation) {
  return res.status(404).send();
 }
 res.status(200).send(reservation);
 } catch (error) {
 res.status(500).send(error);
 }
};

exports.updateReservationById = async (req, res) => {
 try {
 const reservation = await Reservation.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
 if (!reservation) {
  return res.status(404).send();
 }
 res.status(200).send(reservation);
 } catch (error) {
 res.status(400).send(error);
 }
};

exports.deleteReservationById = async (req, res) => {
 try {
 const reservation = await Reservation.findByIdAndDelete(req.params.id);
 if (!reservation) {
  return res.status(404).send();
 }
 res.status(200).send(reservation);
 } catch (error) {
 res.status(500).send(error);
 }
};
