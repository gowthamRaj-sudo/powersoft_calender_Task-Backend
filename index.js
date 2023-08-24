
const express = require("express");
const bodyParser = require("body-parser");
const connection = require("./Db_connection/Db")
const cors = require("cors"); // Import the cors middleware
const recuiterRouter = require("./Router/RecuiterRoutes");
const bookingSlots = require('./Router/BookingSlotsRouter')
const updateRecuiterStatus = require("./Router/ChangeRecuiterStatusRouter")
const getAllBookingsDetails=require("./Router/GetAllBookingsRoutes")
const app = express();



// Use the cors middleware
app.use(cors());
app.use(bodyParser.json());
// Establish a database connection




app.use("/api", recuiterRouter);
app.use('/api', bookingSlots)
app.use('/api', updateRecuiterStatus)
app.use('/api', getAllBookingsDetails)
// Close the connection when the application is terminated
app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(500).send("Internal Server Error");
});
process.on("SIGINT", () => {
  connection.end();
  process.exit();
});

const port = 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

