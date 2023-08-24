const express = require("express");

const bookingController = require("../Controller/BookingControler");
const router = express.Router();

router.post("/bookAdemo", bookingController.BookingControler);

module.exports = router;
