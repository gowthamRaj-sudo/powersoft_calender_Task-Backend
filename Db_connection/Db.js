 const mysql2 = require("mysql2/promise");

 // Create a connection pool
 const pool = mysql2.createPool({
   host: "localhost",
   user: "root",
   password: "Password@123#@!",
   database: "hr_booking_slot_Db",
   waitForConnections: true,
   connectionLimit: 10, // Adjust this value as needed
   queueLimit: 0,
 });

 // Create tables and insert default values
 (async () => {
   const connection = await pool.getConnection();

   try {
     // Create tables if they don't exist
     const createUserTable = `
      CREATE TABLE IF NOT EXISTS bookings_details (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(50),
        mobileNumber VARCHAR(10),
        email VARCHAR(100),
        calender_slot VARCHAR(100),
        recuiter VARCHAR(100)
      )
    `;

     const createRecruiterTable = `
      CREATE TABLE IF NOT EXISTS recuiter_table (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(100),
        image BLOB,
        isActive TINYINT(1) DEFAULT 1
      )
    `;

     await connection.query(createUserTable);
     console.log("Table 'bookings_details' successfully created");

     await connection.query(createRecruiterTable);
     console.log("Table 'recuiter_table' successfully created");

     // Insert default values into recuiter_table
     const defaultRecruiters = ["gowtham", "raj", "kadhir", "vikram", "sabesh"];

     const checkRecruiterExists = `
      SELECT COUNT(*) AS count FROM recuiter_table WHERE name = ?
    `;

     const insertDefaultRecruiter = `
      INSERT INTO recuiter_table (name) VALUES (?)
    `;

     for (const name of defaultRecruiters) {
       const [rows] = await connection.query(checkRecruiterExists, [name]);

       if (rows[0].count === 0) {
         await connection.query(insertDefaultRecruiter, [name]);
         console.log(`Inserted default recruiter: ${name}`);
       } else {
         console.log(`Recruiter ${name} already exists, skipping insertion.`);
       }
     }
   } catch (error) {
     console.error("Error:", error);
   } finally {
     connection.release(); // Release the connection back to the pool
   }
 })();
 module.exports = pool;