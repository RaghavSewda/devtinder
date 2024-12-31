const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://sewdaraghav:fH2NQsTsrgeqqczi@nodezen.tlajk.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
