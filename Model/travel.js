const mongoose = require("mongoose");
const travelSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Aylalin nerig zaawal oruulna uu?"],
  },
  images: {
    type: Text,
    require: [true, "URL oruulna uu"],
  },
  detail: {
    type: String,
    maxlength: [500, "Tailbar max 500 temdegt bna"],
  },
  price: Number,
  location: {
    type: String,
  },
  day: Number,
  cat_id: String,
});
