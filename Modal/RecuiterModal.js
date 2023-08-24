
const pool = require("../Db_connection/Db"); // Import the pool from Db.js

const getRecuiters = async () => {
  const sql = "SELECT * FROM recuiter_table";
  try {
    const connection = await pool.getConnection();
    const [results] = await connection.query(sql);
    connection.release(); // Release the connection back to the pool
    return results;
  } catch (err) {
      console.log(err);
      throw err
  }
};

module.exports = {
  getRecuiters,
};