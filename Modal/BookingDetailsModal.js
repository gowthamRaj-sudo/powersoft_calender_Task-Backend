const pool = require("../Db_connection/Db")
const inserBookings = async (bookingData) => {
  const sql =
    "INSERT INTO bookings_details (name,mobileNumber,email,calender_slot,recuiter)VALUES(?)";
  try {
    const connection = await pool.getConnection();
    const [results] = await connection.query(sql, [bookingData]);
    connection.release();
    return results,"booked successfully !";
  } catch (err) {
    console.log(err);
    throw err;
  }
};
module.exports = {
  inserBookings,
};