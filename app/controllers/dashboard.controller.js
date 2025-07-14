const Reservation = require('../models/Reservation');
const Desk = require('../models/workspace');

exports.getDailyOccupancy = async (req, res) => {
  const today = new Date().toISOString().split('T')[0];

  const occupied = await Reservation.countDocuments({
    type: 'on-site',
    date: { $regex: today }
  });

  const totalDesks = await Desk.countDocuments();
  const totalEmployees = await User.countDocuments();
  const totalOccupied = await Reservation.countDocuments({
    type: 'on-site',
    date: { $regex: today }
  });
  const totalAvailable = await Reservation.countDocuments({
    type: 'on-site',
    date: { $regex: today },
    isAvailable: true
  });
  const totalOnSite = await Reservation.countDocuments({
    type: 'on-site',
    date: { $regex: today },
    isAvailable: false
  });
  const totalOffSite = await Reservation.countDocuments({
    type: 'off-site',
    date: { $regex: today }
  });


  res.json({
    date: today,
    occupied,
    totalDesks,
    totalEmployees,
    totalOccupied,
    totalAvailable,
    totalOnSite,
    totalOffSite,
    occupancyRate: ((occupied / totalDesks) * 100).toFixed(1) + '%'
  });
};
