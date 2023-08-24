const getAllBookingsModal = require("../Modal/GetAllBookingsModal")
const getAllBookingsController = async (req, res) => {
    try {
        const response = await getAllBookingsModal.getAllBookingsModal()
        return res.status(200).json(response)
    } catch (er) {
        console.log(er)
        return res.status(500).json({ error: "Internal server error" });
    }
}
module.exports = {
    getAllBookingsController,
}