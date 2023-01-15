const express = require("express");
const { requireSignin } = require("../controllers/auth.controller");
const { getAllBookings ,getAllDoctors ,createBookings} = require("../controllers/doctor.controller");
const router = express.Router({ mergeParams: true });

router.get("/doctors", requireSignin, getAllDoctors);
router.get("/bookings",requireSignin,getAllBookings);
router.post("/createBookings",requireSignin,createBookings);

module.exports = router;
