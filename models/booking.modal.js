const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    name: {
      type: String,
      trim: true,
      required: true,
    },
    day:{
        type: String,
    },
    slot :{
        type:String,
    }
  });
  module.exports = mongoose.model("Booking", bookingSchema);