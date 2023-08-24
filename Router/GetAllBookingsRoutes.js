const express = require("express")
const getAllBookingsController = require("../Controller/GetAllBookingsController")
const router = express.Router()
router.get('/getAllBookings', getAllBookingsController.getAllBookingsController)
module.exports=router