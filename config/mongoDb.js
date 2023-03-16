const mongoose = require("mongoose");
const DATABASE_URI = process.env.DATABASE_URI;
const connectDB = async () => {
  try {
    await mongoose.connect(DATABASE_URI);
    console.log("MongoDB connected");
  } catch (err) {
    console.log("Aldaa garlaa", err);
  }
};
module.exports = connectDB;
