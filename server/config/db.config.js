const mongoose = require("mongoose");

const dbConnection = (MONGO_URI) => {
  mongoose
    .connect(MONGO_URI)
    .then((con) =>
      console.log(`MongoDB is connected on: ${con.connection.host}`)
    )
    .catch((err) => console.log(`MongoDB error occurred: ${err}`));
};

module.exports = dbConnection;
