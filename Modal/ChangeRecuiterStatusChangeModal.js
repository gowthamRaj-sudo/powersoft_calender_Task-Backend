const pool = require('../Db_connection/Db')
const recuiterstatusChangeModal = async (id,isActive) => {
    const sql='UPDATE recuiter_table SET isActive = ? WHERE id = ?'
    try {
        const connection = await pool.getConnection();
        console.log("sql query", sql, [isActive, id]);
        const [results] = await connection.query(sql, [isActive, id])
        connection.release();
        return {message:"updated successfully !", results}
    } catch (err) {
        console.log(err)
        throw err
    }
}
module.exports = {
    recuiterstatusChangeModal,
}