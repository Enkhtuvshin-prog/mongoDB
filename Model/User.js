const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Hereglegchin nerig zaawal oruulna uu?"],
  },
  email: {
    type: String,
    unique: true,
  },
  password: String,
  profileImg: String,
  role: {
    type: String,
    enum: ["User", "Admin"],
    default: "User",
  },
  phone: String,
  createAt: {
    type: Date,
    default: Date.now(),
  },
  profileImg: String,
});

const user = mongoose.model("User", UserSchema);

module.exports = user;
