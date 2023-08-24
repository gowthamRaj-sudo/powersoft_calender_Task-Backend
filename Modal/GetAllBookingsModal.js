const pool = require("../Db_connection/Db")
const getAllBookingsModal = async () => {
    const sql = "select * from bookings_details";
    try {
        const connection = await pool.getConnection()
        const [results] = await connection.query(sql)
        connection.release()
        return results;
    } catch (err) {
        console.log(err)
        throw err
    }
}
module.exports = {
    getAllBookingsModal,
}