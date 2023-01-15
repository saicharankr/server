const Doctor = require("../models/doctor.modal");
const Booking = require("../models/booking.modal");
const { responseHandler } = require("../helpers/responseHandler");
const { errorMessages, successMessages } = require("../constants/messages");
const { StatusCodes } = require("http-status-codes");

exports.getAllDoctors = async (req, res) => {
  try {
    var doctors = await Doctor.find();

    if (!doctors) {
      return responseHandler(
        res,
        true,
        StatusCodes.INTERNAL_SERVER_ERROR,
        errorMessages.INTERNAL_SERVER_ERROR
      );
    } else {
      return responseHandler(
        res,
        false,
        StatusCodes.OK,
        successMessages.LIST_OF_RECORDS,
        doctors
      );
    }
  } catch (err) {
    return responseHandler(
      res,
      true,
      StatusCodes.INTERNAL_SERVER_ERROR,
      errorMessages.INTERNAL_SERVER_ERROR
    );
  }
};

exports.getAllBookings = async (req, res) => {
  try {
    const {name ,day} = req.query;
    console.log(name,day)
    var doctors = await Booking.find({name:name ,day:day});

    if (!doctors) {
      return responseHandler(
        res,
        true,
        StatusCodes.INTERNAL_SERVER_ERROR,
        errorMessages.INTERNAL_SERVER_ERROR
      );
    } else {
      return responseHandler(
        res,
        false,
        StatusCodes.OK,
        successMessages.LIST_OF_RECORDS,
        doctors
      );
    }
  } catch (err) {
    return responseHandler(
      res,
      true,
      StatusCodes.INTERNAL_SERVER_ERROR,
      errorMessages.INTERNAL_SERVER_ERROR
    );
  }
};

exports.createBooking = async (req, res) => {
  try {
    const data = req.body;

    await Booking.insertMany(data);
    return responseHandler(
      res,
      false,
      StatusCodes.CREATED,
      "Booking Successfully"
    );
  } catch (err) {
    console.log(err)
    return responseHandler(
      res,
      true,
      StatusCodes.INTERNAL_SERVER_ERROR,
      "Booking failed"
    );
  }
};