const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
    Name: {
      type: String,
      trim: true,
      required: true,
    },
    Timezone:{
        type: String,
    },
    "Day of Week":{
        type: String,
    },
    "Available at":{
        type: String,
    },
    "Available until":{
        type: String
    }
  });
  module.exports = mongoose.model("Doctor", doctorSchema);