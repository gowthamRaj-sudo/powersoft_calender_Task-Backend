const recruiterModal = require("../Modal/RecuiterModal")


const getRecuiters =async (req, res) => {
    try {
        const response =await recruiterModal.getRecuiters()
        return res.status(200).json(response)
        
    } catch (err) {
        console.log(err)
         return res.status(500).json({ error: "Internal server error" });
    }
}
module.exports = {
    getRecuiters,
}