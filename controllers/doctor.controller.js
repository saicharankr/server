const { doctorService } = require("../services");

exports.getAllDoctors = async (req, res) => {
  await doctorService.getAllDoctors(req, res);
};

exports.getAllBookings = async (req, res) => {
  await doctorService.getAllBookings(req, res);
};
exports.createBookings = async (req, res) => {
  await doctorService.createBooking(req, res);
};