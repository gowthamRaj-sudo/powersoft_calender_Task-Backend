const BookingModal = require("../Modal/BookingDetailsModal")
const BookingControler = async (req, res, next) => {
    const { name, mobileNumber, email, calender_slot, recuiter } = req.body;
    const bookingData = [name, mobileNumber, email, calender_slot, recuiter];
    try {
        const results = await BookingModal.inserBookings(bookingData)
        res.json(results)
    } catch (err) {
        next(err)
    }
}
module.exports = {
  BookingControler,
};