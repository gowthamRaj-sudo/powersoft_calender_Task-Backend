const express = require("express")
const recuiterController = require("../Controller/RecuiterController")
const bookingController=require("../Controller/BookingControler")
const router = express.Router()
router.get("/recuiters", recuiterController.getRecuiters)
router.post('/bookAdemo',bookingController.BookingControler)


module.exports = router