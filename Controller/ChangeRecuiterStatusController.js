const recuiterStatus = require('../Modal/ChangeRecuiterStatusChangeModal')
const recuiterStatusChangeController = async (req, res, next) => {
    const { id, isActive } = req.query;
    console.log("Received params:", id, isActive); 
    try {
        const results = await recuiterStatus.recuiterstatusChangeModal(id, isActive)
        console.log(results)
        res.json(results)
    } catch (err) {
        console.log(err)
        next(err)
    }
}
module.exports = {
    recuiterStatusChangeController,
}