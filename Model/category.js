const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Hereglegchin nerig zaawal oruulna uu?"],
  },
  description: {
    type: String,
    maxlength: [500, "Tailbar max 500 temdegt bna"],
  },
  categoryImg: {
    type: String,
  },
  categoryRating: Number,
});
const category = mongoose.model("Category", categorySchema);
module.exports = category;
